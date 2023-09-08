// Crea una clase llamada Cuenta que tendrá los siguientes atributos: titular y cantidad (puede tener decimales).
// El titular será obligatorio y la cantidad es opcional. Crea dos constructores que cumplan lo anterior.
// Crea sus métodos get, set y toString.
// Tendrá dos métodos especiales:
//  ingresar(double cantidad): se ingresa una cantidad a la cuenta, si la cantidad introducida es negativa, no se hará nada.
// retirar(double cantidad): se retira una cantidad a la cuenta, si restando la cantidad actual a la que nos pasan es negativa, la cantidad de la cuenta pasa a ser 0.

class Cuenta {
    constructor(titular, cantidad){
        this.titular= titular
        this.cantidad = cantidad;
    }
   get getsaldo (){
    return this.cantidad
   }

   ingresar(cantidad){
    if(cantidad>0){
        console.log("Valor aceptado, digite este valor en el ingreso:")   
    }else{
        console.log("Error: Monto a ingresar invalido")
    }


   }
   set setIngreso (cantidad){
    if(cantidad>0){
        this.cantidad += cantidad    
    }
   }

   retirar (monto){
    let nuevoresult= this.cantidad-monto
    if(nuevoresult<0){
        this.cantidad= 0
        console.log("El valor de la cuenta despues de este retiro es de: ", this.cantidad)
    }else{
        this.cantidad -= monto
        console.log("Saldo disponible ", this.cantidad)
    }
   }

}
const persona1 = new Cuenta ("olaf", 1000) 

persona1.setIngreso= 100
console.log(persona1.getsaldo)
persona1.ingresar(207)
persona1.setIngreso=207
console.log(persona1)
persona1.retirar(100)
console.log(persona1)
persona1.retirar(1209)
