//Buscar un elemento dentro de un arreglo que nosotros le pedimos por teclado. Indicar las posición donde se encuentra. Si hay más de uno, indicar igualmente la posición. (FindIndex)

const grupo= [1,4,5,7,8,9,2,3,4,2]
let ingreso=parseInt(prompt("digite un numero del 1 al 10"))
const result =grupo.indexOf(ingreso)
console.log("La posicion del numero ingresado en el array es:", result)
