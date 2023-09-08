//Una distribuidora de motocicletas tiene una promoción de fin de año qué consiste en lo siguiente. 
//Las motos marca Honda tienen un descuento del 5%, las marcas Yamaha del 8% y las Suzuki del 10%, las otras marcas 2%
alert("Marcas de motos: Yamaha, Honda, Suzuki, otras...")
var moto=prompt("Digite la marca de la moto que desea comprar")
var precio=parseInt(prompt("Digite el valor de la moto"))
var Th, Ty, Ta, Ts = Number

if ("honda"==moto){
    Th= precio-(precio*5/100)
    console.log("El valor de su moto Honda con el 5% de descuesto es de:", Th)
}
else{
    if ("yamaha"==moto){
        Ty= precio-(precio*8/100)
        console.log("El valor de su moto Yamaha con el 8% de descuesto es de:", Ty)
    }
    if ("suzuki"==moto){
        Ts= precio-(precio*10/100)
        console.log("El valor de su moto Suzuki con el 10% de descuesto es de:", Ts)
    }
    if ("Otras"==moto){
        Ta= precio-(precio*2/100)
        console.log("El valor de su moto con el 2% de descuesto es de:", Ta)
    }
}
