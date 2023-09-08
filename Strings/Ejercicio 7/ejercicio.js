// Escribir un programa que pregunte al usuario la fecha de su nacimiento en formato dd/mm/aaaa y muestra por pantalla, el día, el mes y el año. Adaptar el programa anterior para que también funcione cuando el día o el mes se introduzcan con un solo carácter
let fecha=prompt(`digite su fecha de nacimiento
en el siguiente formato: dd/mm/aaaa` )
let letras=["Dia", "Mes", "Año"]
let nuevafecha=fecha.split("/")
for(let i=0;i<nuevafecha.length; i++){
    console.log(letras[i],nuevafecha[i])
}

