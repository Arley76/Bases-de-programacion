//Ingrese un número y calcule e imprima su raíz cuadrada. Si el número es negativo  imprima el número y un mensaje que diga "tiene raíz imaginaria".

var num=parseInt(prompt("Digite un numero"))
var x= Math.sqrt(num)
if (x>=0){
    console.log ("La raiz cuadrada de ",num, "es: " ,x) 
}
else{
    console.log ("El numero",num, "tiene raiz imaginaria") 
}





