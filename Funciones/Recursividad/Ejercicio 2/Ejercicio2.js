//Consideremos una función que recibe un número n e imprime los números del n al 1 con recursividad.
let numeroingresado=parseInt(prompt("Digite un numero"))
const descender = (numeroingresado) =>{
    if (numeroingresado < 1) return
    console.log(numeroingresado)
    return descender (numeroingresado -1)
}
descender(numeroingresado)