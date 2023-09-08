//Crea un array o arreglo unidimensional donde tu le indiques el tamaño por teclado y crear una función que rellene el array o arreglo con los múltiplos de un número pedido por teclado. Por ejemplo, si defino un array de tamaño 5 y elijo un 3 en la función, el array contendrá 3, 6, 9, 12, 15. Mostrarlos por pantalla usando otra función distinta.

let intento1=parseInt(prompt("Digite el numero de sea para el tamaño de array"))
let Numeroing=prompt("Digite un numero entero para obtener sus multiplos")
let array1=Array.from(intento1)

for(let i=1; i< intento1+1; i++){
    array1.push(Numeroing*[i])
}
console.log("Arreglo con los multiplos de "+ Numeroing +":", array1.toString(array1))

