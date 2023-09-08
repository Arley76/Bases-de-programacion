//Pedir una calificación  de 0 a 10 y mostrar de la siguiente manera: Insuficiente, Suficiente, Bien, Excelente
var num = parseInt(prompt("Digite su calificacion de 0 a 10"))

if (num <= 6) {
    console.log("Insuficiente")
}
else {
    if (num >= 6.1 && num <= 7.9) {
        console.log("insuficiente")
    }
    if (num >= 8 && num < 9) {
        console.log("Bien")
    }
    if (num >= 9 && num <= 10) {
        console.log("Excelente")
    }
}












