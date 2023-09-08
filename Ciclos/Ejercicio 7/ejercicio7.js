//Escribir un programa que, dadas 5 notas finales, determine cuántas notas fueron mayores o iguales a 3.0.

let resultado = 0;
let nota;
while (resultado <= 4) {
    resultado++
    nota=parseInt(prompt("Digite "+ resultado + " la nota",))
    if(nota >= 3){
        console.log("Nota mayor",nota)
    }
}
