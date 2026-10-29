# Opcional: crear una app Android nativa (APK/AAB)

El ZIP que recibiste ya se puede instalar como PWA desde una URL HTTPS. Un APK/AAB nativo es un artefacto distinto y requiere compilación.

## Opción recomendada: Capacitor
1. Instala Node.js LTS y Android Studio desde sus sitios oficiales.
2. Crea un proyecto Capacitor y coloca el contenido web de este paquete en la carpeta web (`www` o la carpeta `webDir` configurada).
3. Desde el proyecto, instala Capacitor:
   `npm install @capacitor/core @capacitor/cli`
   `npm install @capacitor/android`
4. Inicializa Capacitor (nombre: `Mis Finanzas Pro`, appId por ejemplo `com.tuusuario.misfinanzaspro`):
   `npx cap init`
5. Configura `webDir` para que apunte a la carpeta que contiene `index.html`.
6. Añade Android y sincroniza:
   `npx cap add android`
   `npx cap sync android`
7. Abre Android Studio:
   `npx cap open android`
8. En Android Studio selecciona **Build → Build APK(s)** para APK de prueba o **Build → Generate Signed Bundle/APK** para una publicación firmada.

Antes de publicar una APK:
- Cambia `com.tuusuario.misfinanzaspro` por un identificador único tuyo.
- Prueba en un teléfono real.
- Revisa permisos y política de privacidad.
- La tasa BCV seguirá dependiendo del servicio externo y conexión.

No se adjunta APK compilado porque este entorno no tiene Android SDK/Android Studio configurado para compilar y firmar una aplicación nativa.
