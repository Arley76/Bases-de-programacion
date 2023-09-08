//Construir un programa que calcule y visualice por pantalla el factorial de todos 
//los valores numéricos enteros entre 1 y 10.

 let numbe=0
function factorial(numbe) {
    let resultado= 1;
    let i=1;
    while (i<numbe) {
        resultado *= i;

        ++i;
    }
    return resultado;

}   
alert("Factoriales de cada numero ")
console.log(factorial(1))
console.log(factorial(2))
console.log(factorial (3))
console.log(factorial (4))
console.log(factorial (5))
console.log(factorial (6))
console.log(factorial (7))
console.log(factorial (8))
console.log(factorial(9))
console.log(factorial (10))
console.log(factorial(11))
console.log(factorial (12))
console.log(factorial (13))


