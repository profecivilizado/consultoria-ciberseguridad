# Operación Lupa

Práctica P4 · Consultoría de Ciberseguridad · Informática 1.º de Bachillerato.

Web publicada: `https://profecivilizado.github.io/consultoria-ciberseguridad/`

## Cómo publicarla

1. Crea en GitHub un repositorio público llamado `consultoria-ciberseguridad` (sin tilde) y sube todo el contenido de esta carpeta.
2. En el repositorio: **Settings › Pages › Source: Deploy from a branch › main / (root)** y guarda.
3. En un par de minutos estará en la dirección de arriba. Enlázala desde Recursos Bachillerato.

## Estructura

| Archivo | Qué es |
| --- | --- |
| `index.html` | Portada: elegir expediente |
| `expediente.html` | Ficha del caso y las 4 misiones |
| `cybersearch.html` | Misión 1 · buscador |
| `picto.html` | Misión 1 · red social |
| `archivos.html` | Misión 1 · metadatos |
| `cuentas.html` | Misión 2 · cuentas y prueba de recuperación |
| `bandeja.html` | Misión 3 · mensajes |
| `bienestar.html` | Misión 4 · uso del móvil |
| `informe.html` | Plantilla del informe, entrega y evaluación |
| `datos/hugo.js`, `lucia.js`, `dani.js` | Todo el contenido de cada personaje. Para cambiar un texto, se edita aquí |
| `js/comun.js`, `css/comun.css` | Código y estilo compartidos |
| `img/` | Fotos ya preparadas |
| `originales/` | Tus fotos sin preparar (no hace falta subirlas) |
| `metadatos.py` | Prepara las fotos |

Cada página recibe el personaje después de `#`: `picto.html#hugo`, `cuentas.html#lucia`…

## Fotos (opcionales)

Sin fotos, la web muestra recuadros con un icono y funciona igual. Si quieres ponerlas, son 14 fotos de ambiente (sin pistas; Pexels o Unsplash sirven, mejor sin caras reconocibles):

| Hugo | Lucía | Dani |
| --- | --- | --- |
| hugo-1 · playa tropical | lucia-1 · carrera popular | dani-1 · escritorio gamer con LED |
| hugo-2 · portal de noche | lucia-2 · café con arte latte | dani-2 · husky en un sofá |
| hugo-3 · guía de viaje | lucia-3 · calle desde un balcón al amanecer | dani-3 · bufanda de fútbol en una grada |
| hugo-4 · perro en un parque | lucia-4 · gata en un sofá | dani-4 · pantalla de videojuego |
| hugo-5 · tarta de cumpleaños | lucia-5 · tortitas | |

Y, si quieres, `hugo-avatar`, `lucia-avatar` y `dani-avatar` para las fotos de perfil.

Cópialas en `originales/` con esos nombres (vale .jpg, .png o .webp) y ejecuta:

```
pip install pillow
python metadatos.py
```

Las deja en `img/` cuadradas, sin sus metadatos originales y con fecha, móvil y GPS falsos. Las coordenadas de las casas están en Valdemora, una ciudad inventada en mitad del Atlántico, para que no apunten a ninguna vivienda real.

**Ojo:** los metadatos solo se leen de las fotos reales con la web publicada. Si abres los HTML con doble clic, la misión de archivos muestra los datos de muestra.
