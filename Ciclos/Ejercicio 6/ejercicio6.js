//Escribir un programa que calcule los primeros ‘n’ números de Fibonacci.
//Los números de Fibonacci comienzan con 0 y 1, y cada término siguiente 
//es la suma de los anteriores: 0, 1, 2, 3, 5, 8, 13, 21, …

let a=0
let b=1
let c;
for( let i=1; i<10; i++){
c= a+b
console.log(c)
a=b
b=c
}


