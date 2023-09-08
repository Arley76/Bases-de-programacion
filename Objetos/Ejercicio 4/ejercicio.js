//Realizar un programa que conste de una clase llamada Alumno que tenga como atributos el nombre y la nota del alumno. Definir los métodos para inicializar sus atributos, imprimirlos y mostrar un mensaje con el resultado de la nota y si ha aprobado o no.´
class Alumno{
    constructor(nombre){
        this.nombre=nombre;
        this.nota;
       
    }
    get getvalornota(){
        return this.nota
    }

    set setaprueba(notaevaluativa){
        if(notaevaluativa>3){
            this.nota=notaevaluativa
            console.log("Aprobado con una nota de:", notaevaluativa)
        }else{
            this.nota=notaevaluativa
            console.log("Reprobado con una nota de.", notaevaluativa)
        }
        
    }
}
const Estudiante = new Alumno("Caesar")
Estudiante.setaprueba= 4;
Estudiante
const Estudiante1 = new Alumno("owen")
Estudiante1.setaprueba=2.8
Estudiante1