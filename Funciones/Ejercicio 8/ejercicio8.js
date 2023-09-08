//Hacer un programa que muestre 3 números ordenados descendentemente, utilizar un procedimiento para cada operación.
let num1=parseInt(prompt("Digite el primer numero"))
let num2=parseInt(prompt("Digite el segundo numero"))
let num3=parseInt(prompt("Digite el tercer numero"))
function opciones (a,b,c){
    if (a>b && b>c){
        console.log("Cadena descendente",a,b,c)
    }else if(a>c && c>b){
        console.log("Cadena descendente",a,c,b)
    }else if (b>a && a>c){
        console.log("Cadena descendente",b,a,c)
    }else if(b>c && c>a){
        console.log("Cadena descendente",b,c,a)
    }else if (c>a && a>b){
        console.log("Cadena descendente",c,a,b)
    }else if (c>b && b>a){
        console.log("Cadena descendente",c,b,a)
    }
}
opciones(num1,num2,num3)