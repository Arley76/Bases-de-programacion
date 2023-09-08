//Queremos guardar los nombres y las edades de los alumnos de un curso. Realiza un programa que introduzca el nombre y la edad de cada alumno. El proceso de lectura de datos terminará cuando se introduzca como nombre un asterisco (*) Al finalizar se mostrará los siguientes datos:
//Todos los alumnos mayores de edad.
//Encontrar la edad mayor y obtener los alumnos que posean dicha edad.
let names=[]
let ages=[]
alert("Para terminar el programa por favor digite un asterisco (*) en la casilla: Nombre")
for(let i=0; i<Infinity; i++){
    let suname=prompt("Digite su nombre")
    let suage=parseInt(prompt("Digite su edad"))
    if(suname !== "*"){
        names.push(suname)
        ages.push(suage) 
    }if(suage>=18){
      console.log((suname+" es mayor de edad, con "+ suage +" años"))
    }else if(suname=="*")
    break
}
function proces(a){ 
let numeromayor=a[0]

for(let i=0; i<a.length;i++)
if(numeromayor<a[i]){
    numeromayor=a[i]
}console.log( "La mayor edad es:", numeromayor)
}
proces(ages)
