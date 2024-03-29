// Función para solicitar el nombre del usuario
function solicitarNombre() {
    let nombre;
    do {
        nombre = prompt("Ingrese su nombre");
        if (nombre === null) {
            alert("Cancelaste la operacion, asi no podemos continuar. Debes ingresar un nombre valido");
        }
    } while (nombre === "" || nombre === null);
    return nombre;
}

// Función para solicitar la edad del usuario
function solicitarEdad() {
    let edad;
    do {
        edad = prompt("Ingrese su edad");
        if (edad === null) {
            alert("Debes ingresar tu edad para continuar.");
        } else if (isNaN(edad) || edad === "") {
            alert("Por favor, ingrese su edad en números.");
        }
    } while (edad === null || isNaN(edad) || edad === "");
    return parseInt(edad);
}

// Función para verificar la edad y mostrar el mensaje correspondiente
function verificarEdad(edad) {
    if (edad < 18) {
        alert("La venta de alcohol está prohibida a menores de 18 años.");
    } else {
        alert("Sos mayor, puedes adquirir nuestros productos.");
    }
}

// Función para mostrar las opciones del menú y manejar la selección
function mostrarMenu() {
    let opcion;
    do {
        opcion = prompt(`Por favor, selecciona una opcion:
1. Vinos
2. Cervezas
3. Destilados
4. Espumantes
0. Salir`);

        opcion = parseInt(opcion);
        //verificar si es correcto
        switch (opcion) {
            case 1:
                alert("Elegiste Vinos");
                break;
            case 2:
                alert("Elegiste Cervezas");
                break;
            case 3:
                alert("Elegiste Destilados");
                break;
            case 4:
                alert("Elegiste Espumantes");
                break;
            case 0:
                alert("Gracias por visitarnos!");
                break; // vuelve al menu principal
            default:
                alert("Opción no válida!");
        }
    } while (isNaN(opcion) || opcion < 0 || opcion > 4);
    console.log(opcion);
}

// Llamadas a las funciones
let nombreIngresado = solicitarNombre();
alert("Hola " + nombreIngresado + ". Bienvenido a la bodega");
console.log(nombreIngresado);

let edad = solicitarEdad();
verificarEdad(edad);
mostrarMenu();
