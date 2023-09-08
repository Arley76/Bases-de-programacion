//Escribir un programa que pregunte el nombre del usuario en la consola y después de que el usuario lo introduzca muestre por pantalla <NOMBRE> tiene <n> letras, donde <NOMBRE> es el nombre de usuario en mayúsculas y <n> es el número de letras que tienen el nombre.
let ingnombre=String(prompt("Digite su nombre"))
let conteo=ingnombre.replace(/\s/g, "").length// Elimina espacios y cuenta letras
console.log(ingnombre.toLocaleUpperCase(), "Tiene "+ conteo + " letras en su nombre" )

