//Desarrollar un programa que calcule el factorial de un número entero positivo. El factorial de un número es el producto de todos los números enteros positivos desde 1 hasta el número en cuestión.

let num=parseInt(prompt("Digite un numero entero positivo"))
let x=1
for(let i= 1; i<=num; i++){
    
    x *=i// para hallar el factorial

}
console.log("El resultado del facotorial de %d, es",num,x)
