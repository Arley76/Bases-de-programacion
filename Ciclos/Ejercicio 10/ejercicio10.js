//Realizar un algoritmo para determinar cuánto ahorrará una persona en un año, si al final de cada mes deposita cantidades variables de dinero; además, se quiere saber cuánto lleva ahorrado cada mes.
let suma =0
for(let i=1; i<13; i++){
    let dinmes=parseInt(prompt("Digite la cantidad de dinero ahorrado por mes"))
    console.log("El dinero ahorrado durante el %d mes es de %d pesos:", i, dinmes )
    suma += dinmes
  
} console.log("Los ahorros actuales son de %d pesos", suma)
 
