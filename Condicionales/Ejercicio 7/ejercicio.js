//Escriba un programa que reciba cuatro calificaciones de un estudiante y devuelva el promedio y la máxima y la mínima calificación.
var cal1= parseInt(prompt("Digite su nota"))
var cal2= parseInt(prompt("Digite su nota"))
var cal3= parseInt(prompt("Digite su nota"))
var cal4= parseInt(prompt("Digite su nota"))
var promcal, max, min =Number
promcal= (cal1+cal2+cal3+cal4)/4
console.log("El promedio de sus notas es:", promcal)
max= Math.max( cal1, cal2, cal3, cal4)
console.log ("Su nota maxima es:", max)
min= Math.min(cal1, cal2,cal3,cal4)
console.log("Su nota minima es:", min)
