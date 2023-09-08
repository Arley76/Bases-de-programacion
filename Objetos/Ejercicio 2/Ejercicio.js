// Crea una clase Contador con los métodos para incrementar y decrementar el contador. La clase contendrá un constructor por defecto y los métodos getters y setters.
class Contador {
    constructor(valor){
        this.unicovalor=valor
       
    }
    get numerocontador (){
        return this.unicovalor
    }
    

    setincremento (numero){
        this.unicovalor += numero
        console.log("El incremento es de:",numero)  
    }

    get actualincremento (){
        return this.unicovalor
    }

    setdecremento(disminuye){
        this.unicovalor -= disminuye
        console.log("El decrimento es de:",disminuye)  
    }

    get actualdecrimento (){
        return this.unicovalor
    }



   
}
const primerintento = new Contador(8000)
console.log(primerintento)
 primerintento.setincremento(10000)
 console.log(primerintento.actualincremento) 
primerintento.setdecremento(504)
console.log(primerintento.actualdecrimento) 


 console.log(primerintento)

 primerintento.setincremento(10)
 console.log(primerintento.actualincremento)
 primerintento.setdecremento(1104)
 console.log(primerintento.actualdecrimento)
 
 console.log(primerintento)