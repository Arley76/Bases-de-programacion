//Hacer un programa que pida por pantalla un número del 1 al 10 y mediante un procedimiento muestre por pantalla el número escrito en letras.

function proceso() {
    
let num= parseInt(prompt("Digite  cualquier numero del 1 al 10"))

let letras=[`cero`,`Uno`, `Dos`, `Tres`, `Cuatro`,`Cinco`, `Seis`, `Siete`,`Ocho`, `Nueve`, `Diez`] [num]
console.log(letras)
}
  
proceso()
 
