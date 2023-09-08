//Dado un vector de enteros, comprobar el mayor, el menor y por último la media de todos.
let Numero;
const vectores=[]
for(let b=1; b<6; b++){
    Numero= parseInt(prompt("Ingrese el " + b + " vector"))
    let ingreso= vectores.push(Numero)
}
function proceso2(valores){
    let max=valores[0]
    let men=valores[0]
    for(let i=0; i<valores.length; i++){
        if(men>valores[i]){
            men = valores[i]

        } 
        if( max < valores[i]){
            max = valores[i]
        } 
        
 
    }console.log("Vector menor: "+ men + "; Vector mayor:", max)
} 
proceso2(vectores)



function proceso(a){
    let resultado=0
    for(let num of a){
        resultado += num
    }return resultado
}
console.log("La media de los vectores es", proceso(vectores)/vectores.length)










