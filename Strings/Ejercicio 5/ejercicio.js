//Escribir un programa que pida al usuario que introduzca una frase en la consola y una vocal, y después muestre por pantalla la misma frase pero con la vocal introducida en mayúscula.
let frase_vocal=prompt("Digite una frase y una vocal")

let buscando_vocal= frase_vocal.split(" ")
let encuentrA=buscando_vocal.pop().toUpperCase()
console.log(buscando_vocal.concat(encuentrA).join(" "))
