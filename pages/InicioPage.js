
class InicioPage {

    // Localiza el botón Siguiente en la pantalla.
    async obtenerBotonSiguiente(driver) {
        return await driver.$(
            'android=new UiSelector().text("Siguiente")'
        );
    }

    // Ingresa el documento del usuario.
    async ingresarDocumento(driver, documento) {

        // Localizamos el campo de documento.
        const campoDocumento = await driver.$(
            'android=new UiSelector().className("android.widget.EditText")'
        );

        // Esperamos hasta que el campo esté visible.
        await campoDocumento.waitForDisplayed({
            timeout: 10000
        });

        // Escribimos el documento recibido.
        await campoDocumento.setValue(documento);
    }

    // Ingresa la contraseña del usuario.
    async ingresarContrasena(driver, contrasena) {

        // Buscamos el campo identificado como contraseña.
        const campoContrasena = await driver.$(
            'android=new UiSelector().className("android.widget.EditText").password(true)'
        );

        // Esperamos a que el campo esté visible.
        await campoContrasena.waitForDisplayed({
            timeout: 30000
        });

        // Escribimos la contraseña recibida.
        await campoContrasena.setValue(contrasena);
    }

}

module.exports = new InicioPage();
