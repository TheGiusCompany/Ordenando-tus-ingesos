# Mis Finanzas Pro — paquete PWA

Aplicación web de finanzas personales, con soporte de instalación como PWA en navegadores compatibles.

## Publicar en GitHub Pages
1. Crea un repositorio público llamado `mis-finanzas-pro`.
2. Descomprime este ZIP y sube **todo el contenido de esta carpeta** a la raíz del repositorio.
3. Confirma que `index.html` está en la raíz (no dentro de otra subcarpeta).
4. En GitHub abre **Settings → Pages**.
5. En **Build and deployment**, selecciona **Deploy from a branch**.
6. Elige `main` y `/ (root)`, y pulsa **Save**.
7. Espera a que GitHub Pages indique que el sitio está publicado y abre el enlace.

## Instalar en Android
1. Abre la URL publicada en Chrome (debe ser HTTPS).
2. Menú ⋮ → **Instalar aplicación** o **Añadir a pantalla de inicio**.
3. Confirma. Se abrirá como aplicación independiente desde el icono.

## Instalar en iPhone
1. Abre la URL publicada en Safari.
2. Pulsa **Compartir** → **Añadir a pantalla de inicio**.
3. Pulsa **Añadir**.

## Datos y privacidad
- Los movimientos se guardan localmente en el navegador del dispositivo.
- No existe sincronización automática entre teléfonos o navegadores.
- Usa la opción de respaldo de la aplicación y guarda el archivo exportado en un lugar seguro.
- Si limpias los datos del navegador o cambias de dispositivo, restaura previamente tu respaldo.

## Tasa BCV
La consulta de tasa usa un servicio externo de terceros (`dolarapi.com`) que puede cambiar, estar fuera de servicio o no permitir la consulta desde todos los navegadores. La tasa no se debe considerar garantizada en tiempo real. Si falla, ingrésala manualmente en Ajustes y guarda.

## Limitación de instalación
Este paquete es una **PWA instalable**, no un APK nativo. Para generar APK/AAB hace falta envolver el sitio con Capacitor o crear un proyecto Android y compilarlo con Android Studio. La guía de Android está en `ANDROID.md`.

## Contenido
- `index.html`: aplicación.
- `manifest.webmanifest`: identidad y opciones de instalación.
- `sw.js`: caché básica de recursos para funcionamiento offline de la interfaz.
- `icons/`: iconos de instalación.
- `README.md`: publicación e instalación.
- `ANDROID.md`: opciones para compilar un APK.
