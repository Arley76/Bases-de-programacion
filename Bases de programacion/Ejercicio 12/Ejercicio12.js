//Visualizar la tarifa de la luz según el gasto de corriente eléctrica. Para un gasto  menor de 1.000Kwxh 
//la tarifa es 1.2, entre 1.OOO y 1.850Kwxh es 1.0 y mayor de  1.85OKwxh 0.9.
var Rcb = parseInt(prompt("Digite su gasto en el servicio de corriente electrica"))

if (Rcb < 1000) {
    console.log("El valor de la taria electrica es de 1.2")
}
    
else {
    if (Rcb >= 1000&&Rcb <= 1850){
        console.log("El valor de tarifa electrica es de 1.0")
    }
        
    
    if (Rcb >1850) {
        console.log("El valor de la tarifa electrica es de 0.9")
    }
        
    
}
