//Suponga un array con N notas de 0 a 20, calcule el promedio de aprobados y el promedio de los desaprobados e indique la cantidad de aprobados y desaprobados.
let nota= [3, 4, 2, 10, 17, 14 ,3, 1, 20]
let aprobados= nota.filter((nota)=>{
    return nota>=10
})
let desaprobados= nota.filter((nota)=>{
    return nota<10
})
console.log( "Numero de personas aprobadas:", aprobados.length)
function proceso(a){
    let resultado = 0
    for( let num of a){
    resultado += num
    } return resultado
}
console.log("Promedio de los aprobados:",proceso(aprobados)/aprobados.length)
console.log("Numero de personas desaprobadas:", desaprobados.length)
console.log("Promedio de los aprobados:",proceso(desaprobados)/desaprobados.length)







