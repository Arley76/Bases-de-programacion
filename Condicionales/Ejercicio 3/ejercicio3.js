//Pedir dos números y decir si non múltiplos o no

var num=parseInt(prompt("Digite un numero"))
var num2= parseInt(prompt(" Digite un numero"))
result=num%num2
if (result==0){
    console.log("Son multiplos")
}
else{
    console.log("no son multiplos")
}
