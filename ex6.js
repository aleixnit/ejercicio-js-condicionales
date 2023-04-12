/*

Operador: && https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison_and

https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_l%C3%B3gicos

1. Antes de ejecutar "node ex6.js"; razona: qué vamos a ver por el terminal? Por qué ?

- Por el terminal vamos a ver el codigo dentro del 1r bloque IF, en este caso "Esta condición se cumple", ya que la condición dentro del if es true, porque 4 es mayor que 3 y 6 es mayor que 5. En el 2ndo IF la condicion es false porque -1 no es mayor que 0.
*/

if (4 > 3 && 6 > 5) {
    console.log("Esta condición se cumple");
}

if (4 > 3 && -1 > 0) {
    console.log("Esta condición también se cumple?");

}