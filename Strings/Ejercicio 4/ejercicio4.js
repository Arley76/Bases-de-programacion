//Escribir un programa que pida al usuario que introduzca una frase en la consola y muestre por pantalla la frase invertida.
let frase = prompt("Ingresa una frase");
let separador= frase.split(" "); 
 console.log(separador.reverse().join(" "))

