//Escribir un programa que dado un número entero positivo n, calcule la suma de la siguiente 
//serie: 1 + 1/2 + 1/3 + 1/4 + 1/5 + … + 1/n
let n;
let total=0
n=parseInt(prompt("Digite un numero"))
for(let i=1; i<=n; i++){
total = total + 1/i
console.log(total)
}

