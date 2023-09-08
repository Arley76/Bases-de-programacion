// Escribir un programa que pregunte por consola por los productos de una cesta de la compra, separados por comas, y muestre por pantalla cada uno de los productos en una línea distinta.
let producto_tienda=prompt(`Digite los productos que desea comprar.
Separe con ( , ) cada producto`)
let producto_separados=producto_tienda.split(",")
console.log("Productos a comprar:")
for(let i=0; i<producto_separados.length; i++){
    console.log(producto_separados[i])
}
