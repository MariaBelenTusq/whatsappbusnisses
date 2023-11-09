// Obtén los números de teléfono del formulario
const phone_numbers = document.querySelector("input[name='phone_numbers']").value;

// Crea una lista de números de teléfono
const phone_numbers_list = phone_numbers.split(",");

// Inicializa el contador de aplicaciones
let counter = 0;

// Crea las aplicaciones de WhatsApp Business
for (const phone_number of phone_numbers_list) {
    // Crea el ID de la aplicación
    const app_id = "app_id_" + counter;

    // Crea el secreto de la aplicación
    const app_secret = "app_secret_" + counter;

    // Crea la solicitud para crear la aplicación
    const url = "https://api.whatsapp.com/v1/apps";
    const headers = {
        "Authorization": "Bearer " + app_secret,
    };
    const data = {
        "name": "Mi aplicación de WhatsApp",
        "description": "Una aplicación de ejemplo para WhatsApp Business",
    };

    // Envia la solicitud
    const response = fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(data),
    });

    // Comprueba el estado de la respuesta
    if (response.status === 200) {
        // La solicitud se realizó correctamente
        // Imprime la información de la aplicación
        const app = response.json();
        console.log(app);
    } else {
        // La solicitud no se realizó correctamente
        // Imprime el error
        console.log(response.status, response.text);
    }

    // Incrementa el contador de aplicaciones
    counter++;
}
