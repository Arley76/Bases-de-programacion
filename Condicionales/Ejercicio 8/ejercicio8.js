//Realizar un programa que pida tres números y diga cuáles son pares y cuáles impares.
var num1 = parseInt(prompt("Digite el primer numero"))
var num2 = parseInt(prompt("Digite el segundo numero"))
var num3 = parseInt(prompt("Digite el tercer numero"))
var totala, totalb, totalc = Number
totala = num1 % 2
totalb = num2 % 2
totalc = num3 % 2
if (totala == 0) {
    console.log("El numero %d es par ", num1)
} else {
    console.log("El numero %d es impar", num1)
} if (totalb == 0) {
    console.log("El numero %d es par", num2)
} else {
    console.log("El numero %d es impar", num2)
} if (totalc == 0) {
    console.log("El numero %d es par", num3)
} else {
    console.log("El numero %d es impar", num3)
}
