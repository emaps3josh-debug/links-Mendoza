# Mendoza · Sonido y DJ — Página de links

Sitio estático (HTML + CSS + JS), sin dependencias ni compilación.

## Antes de subir
Abre `config.js` y cambia los enlaces de Instagram, TikTok y Facebook por los de tus perfiles.
El botón "Pide tu canción" apunta a `/pedir` (tu plataforma de peticiones). Si vive en otro dominio, pon la URL completa.

## Archivos
- `index.html` — la página
- `styles.css` — estilos y animaciones
- `app.js` — letras que rebotan, ecualizador, estrellas y enlaces
- `config.js` — tus enlaces (lo único que tienes que editar)
- `assets/` — logo (transparente y negro), íconos de la app y la imagen para compartir

## Subir a Vercel
1. Sube la carpeta a tu repositorio de GitHub (o arrástrala en vercel.com/new).
2. Framework preset: **Other**. Sin build command. Output directory: la raíz.
3. Si esta página va en la raíz de sonidomendoza.mx junto con la plataforma de peticiones, copia estos archivos a la carpeta pública de ese proyecto.

Las animaciones se apagan solas en teléfonos con "Reducir movimiento" activado.
