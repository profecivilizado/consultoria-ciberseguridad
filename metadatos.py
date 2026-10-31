"""
Operación Lupa · Prepara las fotos de los personajes con metadatos falsos.

Uso:
  1. pip install pillow
  2. Guarda tus fotos en la carpeta "originales" con estos nombres
     (cualquier formato: .jpg, .png, .webp):
       hugo-1 ... hugo-5, dani-1 ... dani-4
       hugo-avatar, dani-avatar   (fotos de perfil, opcionales)
  3. python metadatos.py
  -> Deja cada foto en "img" como JPG cuadrado de 1080 px, sin los
     metadatos originales (los de la IA o los de tu móvil) y con la
     fecha, el móvil y el GPS del personaje.

Las coordenadas de casa están en Valdemora, una ciudad inventada situada
en medio del Atlántico, para que no apunten a ninguna vivienda real.
La de la playa de Hugo es un lugar público real (Railay Beach, Tailandia).
"""
from pathlib import Path

from PIL import Image
from PIL.ExifTags import GPS, IFD, Base

ORIGEN = Path("originales")
DESTINO = Path("img")
LADO = 1080

MOVIL = {
    "hugo": ("Apple", "iPhone 14"),
    "dani": ("Apple", "iPhone de Daniel Ortega"),  # el nombre del dispositivo es una pista
}

# foto: (fecha y hora de la toma, latitud, longitud). None = sin GPS
FOTOS = {
    "hugo-1": ("2026:10:27 16:18:31", 8.01150, 98.83780),     # playa, Krabi (Tailandia)
    "hugo-2": ("2026:10:23 23:38:12", 39.41600, -13.21500),   # portal = su casa
    "hugo-3": ("2026:10:10 18:02:11", None, None),            # guía de viaje
    "hugo-4": ("2026:07:03 12:40:05", None, None),            # perro
    "hugo-5": ("2024:03:12 21:05:44", None, None),            # tarta
    "dani-1": ("2026:10:20 19:27:33", 39.41000, -13.21700),   # setup = su casa
    "dani-2": ("2026:10:14 17:58:12", None, None),            # husky
    "dani-3": ("2026:10:05 17:44:09", None, None),            # skatepark
    "dani-4": ("2026:09:30 22:10:00", None, None),            # consola
}


def a_dms(grados: float):
    g = abs(grados)
    d = int(g)
    m = int((g - d) * 60)
    s = round(((g - d) * 60 - m) * 60, 2)
    return (float(d), float(m), s)


def exif_para(nombre: str) -> Image.Exif:
    persona = nombre.split("-")[0]
    marca, modelo = MOVIL.get(persona, ("Apple", "iPhone 13"))
    fecha, lat, lon = FOTOS.get(nombre, ("2026:10:01 12:00:00", None, None))
    exif = Image.Exif()
    exif[Base.Make] = marca
    exif[Base.Model] = modelo
    exif[Base.DateTime] = fecha
    sub = exif.get_ifd(IFD.Exif)
    sub[Base.DateTimeOriginal] = fecha
    sub[Base.DateTimeDigitized] = fecha
    if lat is not None:
        gps = exif.get_ifd(IFD.GPSInfo)
        gps[GPS.GPSLatitudeRef] = "N" if lat >= 0 else "S"
        gps[GPS.GPSLatitude] = a_dms(lat)
        gps[GPS.GPSLongitudeRef] = "E" if lon >= 0 else "W"
        gps[GPS.GPSLongitude] = a_dms(lon)
    return exif


def cuadrar(img: Image.Image) -> Image.Image:
    img = img.convert("RGB")
    w, h = img.size
    lado = min(w, h)
    img = img.crop(((w - lado) // 2, (h - lado) // 2, (w + lado) // 2, (h + lado) // 2))
    return img.resize((LADO, LADO), Image.LANCZOS)


def main():
    DESTINO.mkdir(exist_ok=True)
    archivos = sorted(p for p in ORIGEN.iterdir() if p.suffix.lower() in {".jpg", ".jpeg", ".png", ".webp"})
    if not archivos:
        print(f"No hay imágenes en la carpeta '{ORIGEN}'.")
        return
    for p in archivos:
        nombre = p.stem.lower()
        if nombre not in FOTOS and not nombre.endswith("-avatar"):
            print(f"· {p.name}: nombre no reconocido, se omite")
            continue
        img = cuadrar(Image.open(p))  # al recrear la imagen se pierden los metadatos originales
        salida = DESTINO / f"{nombre}.jpg"
        if nombre.endswith("-avatar"):
            img.resize((320, 320), Image.LANCZOS).save(salida, "JPEG", quality=88)
            print(f"✔ {salida}  (foto de perfil, sin metadatos)")
            continue
        img.save(salida, "JPEG", quality=88, exif=exif_para(nombre))
        gps = "con GPS" if FOTOS[nombre][1] is not None else "sin GPS"
        print(f"✔ {salida}  ({gps})")


if __name__ == "__main__":
    main()
