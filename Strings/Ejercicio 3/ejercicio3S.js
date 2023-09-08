// Los teléfonos de una empresa tienen el siguiente formato prefijo-número-extension donde el prefijo es el código del país +34, y la extensión tiene dos dígitos (por ejemplo +34-913724710-56). Escribir un programa que pregunte por un número de teléfono con este formato y muestre por pantalla el número de teléfono sin el prefijo y la extensión.
let numsin=prompt(`Digite el numero de telefono
con este formato: +34-913724710-56 `)
let numeroentre= numsin.match(/\-(\d+)\-/g)
if(numeroentre){
    numeroentre= numeroentre.map(match=> match.slice(1, -1))
    console.log("Número:", numeroentre);
}else{
    console.log("No se encontraron numero entre - y -.")
}


