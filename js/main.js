// Nombre saludo al usuario
do {
    nombreIngresado = prompt("Ingrese su nombre");
    if (nombreIngresado === null) {
        alert("Cancelaste la operacion, asi no podemos continuar. Debes ingresar un nombre valido");
    }
} while (nombreIngresado === "" || nombreIngresado === null);


alert("Hola " + nombreIngresado + ". Bienvenido a la bodega");
console.log(nombreIngresado);

// Edad del usuario
let edad;

do {
    edad = prompt("Ingrese su edad");
    if (edad === null) {
        alert("Debes ingresar tu edad para continuar.");
    } else if (isNaN(edad) || edad === "") {
        alert("Por favor, ingrese su edad en números.");
    }
} while (edad === null || isNaN(edad) || edad === "");


// Convertir la edad a número entero
edad = parseInt(edad);
// verificar edad y seguir con el codigo
if (edad < 18) {
    alert("La venta de alcohol está prohibida a menores de 18 años.");
} else {
    alert("Sos mayor, puedes adquirir nuestros productos.");

    //secciones
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
                alert("Gracias por visitarnos!")
                break; // vuelve al menu principal
            default:
                alert("Opcion no valida!");
        }
    } while (isNaN(opcion) || opcion < 1 || opcion > 4);
    console.log(opcion);
}

