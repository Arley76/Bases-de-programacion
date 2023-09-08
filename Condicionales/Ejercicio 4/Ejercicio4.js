//Pedir dos números y decir cual es el mayor
var num=parseInt(prompt("Digite el primer numero"))
var num2=parseInt(prompt("Digite el segundo numero"))
if (num>num2){
    console.log("Numero mayor %d, numero menor %d", num, num2)
}
else{
    console.log("Numero mayor %d, numero menor %d", num2, num)
}
