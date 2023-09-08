Proceso Ejercicio15
//Ingrese un número y calcule e imprima su raíz cuadrada.
//  Si el número es negativo  imprima el número y un mensaje que diga "tiene raíz imaginaria".
	definir x, rz como real;
	Escribir "Digite un numero";
	leer x;
	
	si x >= 0 Entonces
		rz <- raiz(x);
		Escribir " La raiz cuadrada de ", x; Escribir  "Es:", rz;
	SiNo
		si x<0 Entonces
			Escribir " El numero ", x; Escribir  "Tiene raiz imaginaria";
		FinSi
		
	FinSi
FinProceso
