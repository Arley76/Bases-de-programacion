// Desarrollar un programa que cargue los datos de un triángulo. Implementar una clase con los métodos para inicializar los atributos, imprimir el valor del lado con un tamaño mayor y  el tipo de triángulo que es (equilátero, isósceles o escaleno).
class Figurageometrica{
    constructor(){
        this.lado1;
        this.lado2;
        this.lado3;
    }
    get getprimertriangulo(){
        return this.lado1+this.lado2+this.lado3
    }
    operacion (lado1, lado2, lado3){
        this.lado1=lado1
        this.lado2=lado2
        this.lado3= lado3
         
        if(lado1===lado2 && lado2===lado3){
            console.log("Es un triangulo equilatero")

        }else if(lado1== lado2 || lado2==lado3 || lado1==lado3 ){
            console.log("Es un triangulo isoceles")
        }else{
            console.log("Es un triangulo escaleno")}
    
}
}
const prueba= new Figurageometrica
let numing=+prompt("Digite el valor del primer lado del triaungulo")
let numing2=+prompt("Digite el valor del segundo lado del triaungulo")
let numing3=+prompt("Digite el valor del tercer lado del triaungulo")
prueba.operacion(numing,numing2,numing3)
prueba.operacion(34,34,34)
prueba.operacion(3,7,34)