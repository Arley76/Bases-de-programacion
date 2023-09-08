//Recibes un Array de números y debes retornar un Array en donde cada número sea multiplicado por dos (Utilizar métodos de array). 
let primerarray=[]
for(let i=1; i<7; i++){
    let numingres=prompt("Digite el " + i + " numero")
    primerarray.push(numingres)
} 
let nuevogrupo=[]
primerarray.forEach((primerarray)=>{
  nuevogrupo.push(primerarray*2)
})
console.log("Numeros ingresados multiplicados por 2:",nuevogrupo)