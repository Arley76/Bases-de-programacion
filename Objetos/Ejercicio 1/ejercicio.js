// Crea una clase Cuenta con los métodos ingreso, reintegro y transferencia. La clase contendrá un constructor por defecto y los métodos getters y setters.

class cuenta {
   
    constructor (name){
        this.name= name;
        this.ingreso= 0;
        this.reintegro=0;
        this.transferencia= 0;
    }

    get saldo() {
        return this.ingreso - this.reintegro - this.transferencia;
    }

    ingresar(dinero){
        if(dinero>0){
            this.ingreso+=dinero
        }else {
            console.log("Error: El dinero ingresado debe ser mayor que 0.");
        }
    }

    reintegrar(retiro){
        if(retiro>0 && retiro <= this.ingreso){
            this.ingreso -=retiro
           this.reintegro =retiro
        } else {
            console.log("Error: Monto inválido para reintegrar.");
        }

    }

    transferir(monto, otraCuenta){
        if( monto>0 && monto <=this.ingreso){
            this.transferencia = monto;
            this.ingreso -=monto
            otraCuenta.ingresar(monto)
        }else {
            console.log("Error: Monto inválido para transferir.");
        }

    }

}
const cuentamillonario= new cuenta(`Dario`)
console.log(cuentamillonario);

cuentamillonario.ingresar(1000);
cuentamillonario.reintegrar(250);
console.log(cuentamillonario);

const cuentaAmigo = new cuenta("Amigo");
console.log(cuentaAmigo);
cuentamillonario.transferir(140, cuentaAmigo)
cuentamillonario.transferir(100, cuentaAmigo);

console.log(cuentamillonario);
console.log(cuentaAmigo);

console.log("Saldo de cuenta Millonario:", cuentamillonario.saldo);
console.log("Saldo de cuenta Amigo:", cuentaAmigo.saldo);

cuentamillonario.ingresar(1000);
console.log("Saldo de cuenta Millonario:", cuentamillonario.saldo);






// class Cuentabancaria{
//     constructor(name){
//         this.name= name;
//         this.ingreso= 0
//         this. reintegro= 0
//         this.trasnferencia= 0
//     }

//     get saldo (){
//         return "El Saldo actual de la cuenta es :",this.ingreso - this.reintegro - this.trasnferencia

//     }

//    setingresar(dinero){
//         if( dinero>0){
//           this.ingreso += dinero
          
//         }else{
//             console.log("El dinero ingresado debe ser mayor a 0")
//         }    
//    }

//    setreintegrar(retiro){
//     if(retiro>0 && retiro <= this.ingreso){
//         this.reintegro=retiro
//         this.ingreso -=retiro
//     }else{
//         console.log("Monto invalido para retirar")
//     }
//    }

//    settransferiri(monto, otracuenta){
//     if(monto>0 && monto<= this.ingreso){
//         this.trasnferencia= monto
//         this.ingreso -= monto
//         otracuenta.setingresar(monto)
//     }else{
//         console.log("Monto invalido para retirar")

//     }
//    }
// }
// const persona1 = new Cuentabancaria ("Sebas")

// console.log(persona1)
// persona1.setingresar(10000)
// persona1.setreintegrar(2800)

// console.log(persona1)

// const persona2 = new Cuentabancaria ("Lexa")
// console.log(persona2)
// persona1.settransferiri(4000, persona2)
// persona2.setingresar(2000)
// console.log(persona2)
// console.log(persona1)


// persona2.settransferiri(2000, persona1)
// console.log(persona2)

// console.log(persona1)










