//Hacer un programa que muestre un menú con las opciones sumar, restar, multiplicar y dividir, el programa solicitará una opción y realizará la tarea elegida, se debe usar procedimientos.
alert("SOLO DEBE INGRESAR EL NUMERO DE LA OPERACION")

let x1= "Digite el numero de la operacion que necesita: \n"
x1+= "1.suma \n"
x1+= "2.resta \n" 
x1+= "3.multiplicacion \n" 
x1+= "4. division \n" 
let opcion=parseInt(prompt (x1))
let num1=parseInt(prompt("Digite un numero"))
let num2=parseInt(prompt("Digite un numero"))

const funs = (a,b) => console.log(" El resultado de la suma es:" , a+b)
const rest = (a,b) =>  console. log ("El resultado de la resta es:", a-b)
const mult = (a,b) =>  console.log("El resultado de la multiplicacion es", a*b)
const div = (a,b) => console.log (" El resultado de la division es:",a/b)
    

if(opcion == 1  ){

funs(num1, num2)
     
}else if( opcion== 2){
    rest( num1, num2)

}else if( opcion == 3){
    mult (num1, num2)
    
}else if ( opcion == 4){
    div ( num1, num2)
}















