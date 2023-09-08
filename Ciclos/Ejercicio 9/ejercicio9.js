//Escribir un programa que imprima todos los números pares entre dos números que se le pida al usuario.
let num1= parseInt(prompt("Digite el primer numero"))
let num2= parseInt(prompt("Digite el segundo numero"))
/* while(num1<= num2){
    
        let x= num1%2
        if (x==0){
            console.log("Numero par:",num1)
        }
    num1++  
      
}  */
for(i=num1; i<=num2; i++){
    let x= i%2
     if (x==0){
        console.log("Numero par:",i)
    }
 
    
}



