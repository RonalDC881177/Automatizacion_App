
const { remote } = require('webdriverio');

async function main() {

    // 1. Conectarnos al dispositivo Android
    const driver = await remote({
        hostname: '127.0.0.1',
        port: 4723,
        path: '/',
        capabilities: {
            platformName: 'Android',
            'appium:automationName': 'UiAutomator2',
            'appium:deviceName': 'Android',

            'appium:appPackage': 'com.alocredit.pre',
            'appium:appActivity': 'com.alo.credit.presentation.ui.MainActivity',

            'appium:noReset': false,
            'appium:forceAppLaunch': true
        }
    });

    try {

        console.log('¡Conexión exitosa con el dispositivo Android!');

        const pantalla = await driver.getPageSource();

        console.log('ESTRUCTURA DE LA PANTALLA:');
        console.log(pantalla);

        // 2. Buscar el texto de bienvenida
        const bienvenida = await driver.$(
            'android=new UiSelector().text("¡Bienvenido!")'
        );

        // 3. Buscar el campo de documento
        const campoDocumento = await driver.$(
            'android=new UiSelector().className("android.widget.EditText")'
        );

        // 4. Buscar el botón Siguiente
        const botonSiguiente = await driver.$(
            'android=new UiSelector().text("Siguiente")'
        );

        // 5. Validar visibilidad de los elementos
        console.log(
            'Bienvenida visible:',
            await bienvenida.isDisplayed()
        );

        console.log(
            'Campo documento visible:',
            await campoDocumento.isDisplayed()
        );

        console.log(
            'Botón Siguiente visible:',
            await botonSiguiente.isDisplayed()
        );

        // 6. Consultar estado del botón
        console.log(
            'Botón Siguiente habilitado:',
            await botonSiguiente.isEnabled()
        );

        // 7. Consultar propiedades del elemento
        console.log(
            'Texto del elemento:',
            await botonSiguiente.getText()
        );

        console.log(
            'Atributo clickable:',
            await botonSiguiente.getAttribute('clickable')
        );

    } finally {

        // 8. Cerrar la sesión de Appium
        await driver.deleteSession();
        console.log('Sesión de Appium finalizada.');

    }
}

main().catch(console.error);
