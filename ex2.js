/*
¿Que va a mostrar por el terminal cuando hagamos node ex2.js? ¿Por qué?
*/

//Se va a mostrar por el terminal 'Cuack', ya que el valor de la variable numero es 3, entonces la condición (numero < 2) no se cumple y es false. Por lo tanto, no se va a ejecutar el codigo dentro del if, y se ejecutará el else.

let numero = 3;

if (numero < 2) {
    console.log("Bruuuu!")
}

else {
    console.log("Cuack!")
}
