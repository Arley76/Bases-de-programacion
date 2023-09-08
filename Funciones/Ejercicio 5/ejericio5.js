//Hacer un programa que pida por pantalla una temperatura en grados Celsius, muestre un menú para convertirlos a Fahrenheit o Kelvin y muestre el equivalente por pantalla, utilizando funciones.
//Celsius a Fahrenheit: F = (9*C)/5 + 32;
//Celsius a Kelvin: K = C + 273.15;
 const Fahrenheit = () => console.log("Los %d° Celcius son %d° Fahrenheit",tempcelc, 9*tempcelc/5+32)
const kelvin =() => console.log ("Los %d° Celcius son %d° Fahrenheit", tempcelc,tempcelc+ 273.15 ) 

let opcion="Digite el numero de la temperatura a la cual desea hacer la conversion\n"
opcion += "1. Grados Fahrenheit \n"
opcion += "2. Grados kelvin \n"

let eleccion=(prompt(opcion))
let tempcelc= parseFloat(prompt("Digite la temperatura del los grados celcius"))

if(eleccion==1){
    Fahrenheit()
}else if(eleccion==2){
    kelvin()
} 

