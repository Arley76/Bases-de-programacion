Proceso Ejercicio15
//Ingrese un n�mero y calcule e imprima su ra�z cuadrada.
//  Si el n�mero es negativo  imprima el n�mero y un mensaje que diga "tiene ra�z imaginaria".
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
