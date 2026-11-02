# Mis Finanzas Pro Android actualizado

Esta carpeta contiene la web actualizada en `www/` y la configuración Capacitor.

## Windows
1. Instala Node.js LTS y Android Studio (con Android SDK).
2. Extrae el ZIP y abre PowerShell en esta carpeta.
3. Ejecuta:
   `npm install`
   `npx cap add android`
   `npx cap sync android`
   `npx cap open android`
4. En Android Studio espera el sync de Gradle.
5. Build → Build Bundle(s) / APK(s) → Build APK(s).
6. Usa Locate para abrir el APK debug y cópialo a tu teléfono.

Después de editar `www/`, ejecuta `npx cap sync android` y vuelve a compilar.

El APK no está precompilado en este paquete: la compilación se realiza con Android Studio local.
