//Realizar un programa que pida tres números y diga cuál es el mayor, cuál es el segundo mayor, y cuál es el menor. 
//(Mostrar: mayor: persona 1, medio: persona 3, menor: persona 2)
var persona1 = parseInt(prompt("Digite el primer numero"))
var persona2 = parseInt(prompt("Digite el segundo numero"))
var persona3 = parseInt(prompt("Digite el tercer numero"))
var max, medi, min = Number
max = Math.max(persona1, persona2, persona3)
min = Math.min(persona1, persona2, persona3)
if (persona1 > persona2 && persona1 < persona3 || persona1 < persona2 && persona1 > persona3){ 
    console.log(" numero mayor: %d, numero medio: %d, numero menor: %d", max, persona1, min)

} if (persona2 > persona1 && persona2 < persona3 || persona2 < persona1 && persona2 > persona3) {
        console.log(" numero mayor: %d, numero medio: %d, numero menor: %d", max, persona2, min)

    } else
        if (persona3 > persona1 && persona3 < persona2 || persona3 < persona1 && persona3 > persona2) {
            console.log(" numero mayor: %d, numero medio: %d, numero menor: %d", max, persona3, min)


        }
