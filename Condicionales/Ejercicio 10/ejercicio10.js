//Pida a usuario la edad y el sexo, para que la computadora le indique si ya puede jubilarse. 
//Tome en cuenta que un Hombre se puede jubilar cuando tenga 60 años o más, 
//en cambio, una mujer mayor se jubilara si tiene más de 54 años.
var sexo=prompt("digite su sexo")
var edad=parseInt(prompt("digite su edad"))
if ("masculino" === sexo && edad>=60){
    console.log(" ya puede jubilarse")
} else{
    if ("femenino" === sexo && edad>54){
        console.log(" Ya puede jubilarse")
    }else{
        console.log(" Aun no puede jubilarse")
    }
}


