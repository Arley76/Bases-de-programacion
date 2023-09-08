//Hacer un programa que muestre una tabla de multiplicar hasta el 20 de un número cualquiera por pantalla, el número se pedirá en el programa principal. Usar procedimiento.
let num = parseInt(prompt("Digite un numero"))
function multi(a) {
    
    for (let i = 1; i <= 20; i++) {
        
        console.log(i * a)
    }

}
multi(num)