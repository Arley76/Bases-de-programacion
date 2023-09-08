//En un videoclub se ofrece la promoción de llevarse tres películas por el precio de las dos más baratas. 
//Haga un programa que, dados los tres precios de las películas, determine la cantidad a pagar. 

var prim1 = parseInt(prompt("Digite el valor de la primera pelicula"))
var prim2 = parseInt(prompt("Digite el valor de la segunda pelicula"))
var prim3 = parseInt(prompt("Digite el valor de la tercera pelicula"))

if (prim1 < prim2 && prim3 < prim2) {
    console.log(" el valor total de las tres pelciulas es $", prim1 + prim3)
} if (prim2 < prim1 && prim3 < prim1) {
    console.log(" el valor total de las tres pelciulas es $", prim2 + prim3)
} if (prim2 < prim3 && prim1 < prim3) {
    console.log(" el valor total de las tres pelciulas es $", prim2 + prim1)
} if (prim2 < prim1 && prim1 == prim3) {
    console.log(" No se puede obtener su descuento")
} if (prim1 < prim3 && prim2 == prim3) {
    console.log(" No se puede obtener su descuento")
} if (prim2 == prim1 && prim3 < prim1) {
    console.log(" No se puede obtener su descuento")
} if (prim2 == prim1 && prim1 == prim3) {
    console.log(" No se puede obtener su descuento")
}



