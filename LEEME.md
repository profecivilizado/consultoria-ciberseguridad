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
| `expediente.html` | Ficha del caso y las 2 misiones |
| `ejemplo.html` | Informe de ejemplo resuelto (caso ficticio Leo Sanz) |
| `cybersearch.html` | Misión 1 · buscador |
| `picto.html` | Misión 1 · red social (con buscador y cuentas señuelo) |
| `archivos.html` | Misión 1 · metadatos |
| `cuentas.html` | Misión 2 · cuentas y prueba de recuperación |
| `informe.html` | Plantilla del informe, entrega y evaluación |
| `datos/hugo.js`, `dani.js`, `nora.js`, `marcos.js`, `irene.js` | Todo el contenido de cada personaje, incluidas las preguntas guiadas. Para cambiar un texto, se edita aquí |
| `js/comun.js`, `css/comun.css` | Código y estilo compartidos |
| `img/` | Fotos ya preparadas |
| `originales/` | Tus fotos sin preparar (no hace falta subirlas) |
| `metadatos.py` | Prepara las fotos |

Cada página recibe el personaje después de `#`: `picto.html#hugo`, `cuentas.html#dani`…

## Fotos

Son fotos de ambiente (sin pistas). Ya están todas en `img/`:

| Hugo | Dani | Nora | Marcos | Irene |
| --- | --- | --- | --- | --- |
| hugo-1 … hugo-5 | dani-1 … dani-4 | nora-1 mesa de dibujo · nora-2 gata · nora-3 cuaderno | marcos-1 guitarra · marcos-2 ukelele · marcos-3 partitura | irene-1 perro en la protectora · irene-2 pueblo · irene-3 microscopio |

Para cambiar alguna, pon la nueva en `originales/` con el mismo nombre.

Y, si quieres, `hugo-avatar` y `dani-avatar` para las fotos de perfil.

Cópialas en `originales/` con esos nombres (vale .jpg, .png o .webp) y ejecuta:

```
pip install pillow
python metadatos.py
```

Las deja en `img/` cuadradas, sin sus metadatos originales y con fecha, móvil y GPS falsos. Las coordenadas de las casas están en Valdemora, una ciudad inventada en mitad del Atlántico, para que no apunten a ninguna vivienda real.

**Ojo:** los metadatos solo se leen de las fotos reales con la web publicada. Si abres los HTML con doble clic, la misión de archivos muestra los datos de muestra.
