// Escribir un programa que pregunte el nombre completo del usuario en la consola y después muestre por pantalla el nombre completo del usuario tres veces, una con todas las letras minúsculas, otra con todas las letras mayúsculas y otra solo con la primera letra del nombre y de los apellidos en mayúscula. El usuario puede introducir su nombre combinando mayúsculas y minúsculas como quiera.
let suname=prompt("Digite su nombre completo")

console.log("Nombre en mayuscula:\n"
,suname.toUpperCase());
console.log("Nombre en minuscula:\n"
,suname.toLocaleLowerCase());
let separacion=suname.split(" ")
for(let i=0; i<separacion.length; i++){
    separacion[i]= separacion[i].charAt(0).toUpperCase() + separacion[i].slice(1).toLocaleLowerCase();
    
}
let unirletras= separacion.join(" ")
console.log("Nombre solo con las iniciales en Mayuscula:\n"
,unirletras)

 






