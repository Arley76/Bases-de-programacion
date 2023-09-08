//Realizar una clase que administre una agenda. Se debe almacenar para cada contacto el nombre, el teléfono y el email. Además deberá mostrar un menú con las siguientes opciones
// Añadir contacto
// Lista de contactos
// Buscar contacto
// Editar contacto
// Cerrar agenda
class Agenda{

    constructor(nombre, telefono, email){
        this.nombre=nombre;
        this.telefono=telefono;
        this.email= email;
        this.contactos=[]
    }
    get getguardar(){
        return this.contactos
    }

    set añadir(contac){
        this.contactos.push(contac) 
    }
    
    listacont(letra){
        if(letra==="si"){
            console.log(this.contactos)
        }
    }

    buscarcont(numero){
        let comprobante= this.contactos.includes(numero)
        if(comprobante==true){
        console.log("El contacto se encuentra registrado en la agenda")                     
        }else{
            console.log("El numero ingresado no se encuentra en la agenda")     
        }
    }



}



const persona =new Agenda ("ruben", 3214447341, "arleymartinez@gmail.com")
persona.añadir=3138761513; 
persona.añadir=3108038950

let inicioagenda= prompt(`¿Quieres guardar un numero en tu agenda? 
Digite: Si o No?`)
if(inicioagenda==="si"){ 
    let contantoañadir=prompt("Digite el numero para ser guardado en su agenda")
    let recuento=contantoañadir.replace(/\s/g, "").length
        if(recuento==10){
          persona.añadir=contantoañadir 
        }else{
            console.log("El numero a ingresar es invalido")}
    let verlista=prompt(`Desea ver su lista de contactos 
        Por favor digite: Si o No`)
        persona.listacont(verlista)
    let busqueda=parseInt(prompt("Digite el contacto que desea buscar"))
        persona.buscarcont(busqueda)
    let edit=prompt(`Desea editar algun contacto
        Digite su respuesta: Si o No`)
        if(edit==="si"){
        console.log(persona.contactos)
    let numduda=prompt(`Digite la posicion del numero que desea cambiar
        Recuerde que:
        El primer numero tiene la posicion 0 y asi sucesivamente`)
        persona.contactos.splice(numduda, 1);
    let cambiocontacto=parseInt(prompt("Digite el nuevo numero para ser guardado en su agenda"))
        persona.contactos.push(cambiocontacto)
        console.log(persona.contactos)
    let cierreagenda= prompt(`¿Desea cerrar sua agenda?
         Digite: si o no`)
        if(cierreagenda==="si"){
            console.log("Tu agenda fue cerrada exitosamente")
        }
   
}}else{
    console.log("Tu agenda fue cerrada exitosamente")
}