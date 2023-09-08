//Suponga un array con N números enteros generados aleatoriamente y mostrados en pantalla, N debe ser un número impar, mostrar en pantalla el valor que ocupa el centro del array.
let equipo=[1,8,4,7,5,9,2,3,6]
console.log("Numeros del array:",equipo)
let proceso;
let busqueda= equipo.indexOf(5)
equipo.forEach((equipo,)=>{
    proceso= equipo/5
    if(1==proceso){
      console.log("La posicion del numero que ocupa el centro del array es:", busqueda)
    }
})
