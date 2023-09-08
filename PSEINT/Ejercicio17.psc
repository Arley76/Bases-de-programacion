Proceso Ejercicio17
	//Ingresar por teclado el nombre, la edad y el sexo de cualquier persona e imprima, 
	//solo si la persona es de sexo masculino y mayor de edad, el nombre de la persona.
	
	Definir x,c,M Como Caracter;
	Definir z Como Entero;
	M<- ("masculino");
	Escribir "Digite su nombre.";
	leer x;
	Escribir "Digite su edad. ";
	leer z;
	Escribir "Digite su sexo";
	leer c;
	si (c=M) & (z>=18) Entonces
		Escribir  "Nombre: ", x;
	SiNo escribir "Sus datos son:";
		Escribir "Nombre: ", x;
		Escribir  "Edad: ", z; 
		Escribir "Sexo: ", c;
	FinSi
	
	
	
	
	
FinProceso

