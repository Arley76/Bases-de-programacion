//ingresa un string de números del cual debes separar todos los números con una coma (,) y formar un array con sus valores.
let valoresingresados=[]
for(let i=1; i<6; i++){  
let ingreso=prompt("Digite el "+ i +" numero")
 valoresingresados.push(ingreso)
}
let mostrar= valoresingresados.toString(valoresingresados)
console.log("Los valores ingresador en el array son:",mostrar)