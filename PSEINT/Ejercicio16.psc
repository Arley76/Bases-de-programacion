Proceso Ejercicio16
	// Ingresar por teclado el nombre y el signo de cualquier persona e imprima,
	//el nombre sólo si la persona es signo Aries, caso contrario imprima no es signo Aries.
	definir x, z,c,v Como Caracter;
	c<- ("Aries");
	Escribir "Digite su nombre";
	Leer x;
	Escribir "Digite su signo";
	leer z; 
	
	si z=c Entonces
		Escribir "Nombre: ", x; 
	SiNo
		Escribir "Nombre: ", x; Escribir "Signo: ", z; Escribir "No es signo Aries"; 
		
	FinSi
FinProceso
