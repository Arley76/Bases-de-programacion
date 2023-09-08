// Realizar un programa que tenga una clase Persona con las siguientes características. La clase tendrá como atributos el nombre y la edad de una persona. Implementar los métodos necesarios para inicializar los atributos, mostrar los datos e indicar si la persona es mayor de edad o no.
class Persona{
    constructor(nombre){
        this.nombre=nombre
        this.edad;
    }
    get getvida(){
        return this.edad
    }


   set setedad(años){
    if(años>=18){
        this.edad=años
        console.log(this.nombre + " es mayor de edad: "+ this.edad)
    }else{
        this.edad=años
        console.log(this.nombre + " es menor de edad: "+ this.edad)
    }

   }
}
const usuario= new Persona("nicol")
usuario.setedad=12
usuario
const usuario2= new Persona("Alejandra")
usuario2.setedad=32