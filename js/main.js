// Nombre saludo al usuario
let nombreIngresado = prompt("Ingrese su nombre");

while (nombreIngresado === "" || nombreIngresado === null) {
    if (nombreIngresado === null) {
        alert("Cancelaste la operacion, asi no podemos continuar. Debes ingresar un nombre valido");
    } else {
        alert("Decinos tu nombre para una atencion personalizada!");
    }
    nombreIngresado = prompt("Ingrese su nombre");
}

alert("Hola " + nombreIngresado + ". Bienvenido a la bodega");
console.log(nombreIngresado);

// Edad del usuario
let edad = prompt("Ingrese su edad");

if (edad === null) {
    alert("Has cancelado la operación. Debes ingresar tu edad para continuar.");
} else {
    // controlar que no deje vacio el dato
    while (isNaN(edad) || edad === "") {
        alert("Por favor, ingrese su edad en números.");
        edad = prompt("Ingrese su edad con números.");
    }

    // Convertir la edad a número entero
    edad = parseInt(edad);
    // verificar edad y seguir con el codigo
    if (edad < 18) {
        alert("La venta de alcohol está prohibida a menores de 18 años.");
    } else {
        alert("Sos mayor, puedes adquirir nuestros productos.");
    }

    console.log(edad);

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
                break;// vuelve al menu principal
            default:
                alert("Opcion no valida!");
        }
    } while (isNaN(opcion) || opcion < 1 || opcion > 4);
    console.log(opcion);
}