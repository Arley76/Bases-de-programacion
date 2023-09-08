//Realizar un programa en el cual se declaran dos valores enteros por teclado utilizando el método constructor. Calcular después la suma, resta, multiplicación y división. Utilizar un método para cada una e imprimir los resultados obtenidos. Llamar a la clase Calculadora.
class Calculadora{
    constructor(){
        this.numero1;
        this.numero2;
    }
    get guarado(){
        return this.numero1, this.numero2
    }
    set ingresonum (num1){
        if(num1>0){
         this.numero1=num1   
        }
    }
    set ingresonum2 (num2){
        if(num2>0){
            this.numero1=num2  
           }

    }
    sumar (num1,num2){
        console.log(" La suma total es: ", num1+num2)

    }
    resta (num1,num2){
        console.log(" El valor de resta es: ", num1-num2)

    }
    multi (num1,num2){
        console.log(" El valor de de la multiplicacion: ", num1*num2)

    }
    dividir (num1,num2){
        console.log(" La division total es: ", num1/num2)

    }

}
const intento1 = new Calculadora()
let numuero1= parseInt(prompt("Ingrese un numero"))
intento1.ingresonum=numuero1
let numuero2= parseInt(prompt("Ingrese un numero"))
intento1.ingresonum=numuero1
intento1.sumar(numuero1,numuero2)
intento1.resta(numuero1, numuero2)
intento1.multi(numuero1,numuero2)
intento1.dividir(numuero1,numuero2)


