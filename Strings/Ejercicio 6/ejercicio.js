// Escribir un programa que pregunte el correo electrónico del usuario en la consola y muestre por pantalla otro correo electrónico con el mismo nombre (la parte delantera de la arroba @) pero con dominio ceu.es.
let correo=prompt("Digite su correo electronico")
let separador=correo.split(`@`)[0]
let nuvcorreo= ("@ceu.es.")
console.log(separador.concat(nuvcorreo))