//Pasar de número entero a número binario con Recursividad.
//funcion para encontrar numero binarios (#.toString(2))
let numero=parseInt(prompt("Digite un numero entero"))
const binary =(a)=>{
    if (a<1) return
    console.log("Numero binario:")
    console.log( a.toString(2))
    

}
binary(numero)

