//Crea un array o arreglo unidimensional con un tamaño de 10, inserta los valores numéricos que desees de la manera que quieras y muestra por pantalla la media de valores del array.

const varios = []
let total=0
let x;
for(let i=1; i<11;i++){
    x=parseInt(prompt("Digite el " +  i + " numero"))
     /* do {
         x=prompt("Digite el " +  i + " numero")
    } while (x<0|| (isNaN(x)) && x !== null);
    if(x === null){
        break
    }  */
    varios.push(x)
    total +=x
    
}
console.log(varios)
console.log ("Media de los numero ingresados", total/10)