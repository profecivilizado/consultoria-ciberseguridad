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
| `cybersearch.html` | Misión 1 · buscador |
| `picto.html` | Misión 1 · red social (con buscador y cuentas señuelo) |
| `archivos.html` | Misión 1 · metadatos |
| `cuentas.html` | Misión 2 · cuentas y prueba de recuperación |
| `informe.html` | Plantilla del informe, entrega y evaluación |
| `datos/hugo.js`, `dani.js` | Todo el contenido de cada personaje, incluidas las preguntas guiadas. Para cambiar un texto, se edita aquí |
| `js/comun.js`, `css/comun.css` | Código y estilo compartidos |
| `img/` | Fotos ya preparadas |
| `originales/` | Tus fotos sin preparar (no hace falta subirlas) |
| `metadatos.py` | Prepara las fotos |

Cada página recibe el personaje después de `#`: `picto.html#hugo`, `cuentas.html#dani`…

## Fotos

Ya están en `img/`. Si quieres cambiar alguna, son fotos de ambiente (sin pistas):

| Hugo | Dani |
| --- | --- |
| hugo-1 · playa tropical | dani-1 · escritorio gamer con LED |
| hugo-2 · portal de noche | dani-2 · husky cachorro |
| hugo-3 · mapa de viaje | dani-3 · skatepark |
| hugo-4 · perro en un parque | dani-4 · consola portátil |
| hugo-5 · tarta de cumpleaños | |

Y, si quieres, `hugo-avatar` y `dani-avatar` para las fotos de perfil.

Cópialas en `originales/` con esos nombres (vale .jpg, .png o .webp) y ejecuta:

```
pip install pillow
python metadatos.py
```

Las deja en `img/` cuadradas, sin sus metadatos originales y con fecha, móvil y GPS falsos. Las coordenadas de las casas están en Valdemora, una ciudad inventada en mitad del Atlántico, para que no apunten a ninguna vivienda real.

**Ojo:** los metadatos solo se leen de las fotos reales con la web publicada. Si abres los HTML con doble clic, la misión de archivos muestra los datos de muestra.
