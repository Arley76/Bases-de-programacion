//Invertir un número entero con Recursividad.
let num1=parseInt(prompt("Digite un numero entero positivo"))
let num2= num1 * -1
const conversion = (a)=>{
    if( a<num2) return
    console.log (a)
    return conversion(a-1)
}
conversion (num1)