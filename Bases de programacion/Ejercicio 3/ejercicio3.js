//Sacar la hipotenusa de un triángulo rectángulo, pidiendo al usuario el valor de los 2 catetos. 
var a= parseInt(prompt("Digite el numero del primer cateto"))
var b= parseInt(prompt("Digite el numero del segundo cateto"))
var x=Math.sqrt(Math.pow(a,2)+(Math.pow(b,2)))
console.log (x)