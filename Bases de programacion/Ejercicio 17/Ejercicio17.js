//Ingresar por teclado el nombre, la edad y el sexo de cualquier persona e imprima, 
	//solo si la persona es de sexo masculino y mayor de edad, el nombre de la persona.
	
    var nom=prompt("Digite su nombre")
    var edad=parseInt(prompt("Digite su edad"))
    var sex= prompt("Digite su sexo")
    
    if ( "masculino" == sex&& edad>=18) {
        console.log("Nombre:",nom)
    }
    else{
        console.log("Nombre:", nom, "Edad:",edad, "Sexo:",sex )
    }
