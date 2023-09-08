Proceso Ejercicio12
	//Visualizar la tarifa de la luz según el gasto de corriente eléctrica. Para un gasto  menor de 1.000Kwxh 
	//la tarifa es 1.2, entre 1.OOO y 1.850Kwxh es 1.0 y mayor de  1.85OKwxh 0.9.
	Definir x Como Entero;
	Escribir "Digite el gasto exacto de corriente electrica";
	leer x;
	
	si x <= 1000 Entonces
		Escribir " El valor de su tarifa es de 1.2 ";
	SiNo
		si x >= 1850 entonces; 
			Escribir " El valor de su tarifa es de 0.9";
		FinSi 
		si (x >= 1001) & (x <= 1849) Entonces
			Escribir " El valor de su tarifa es de 1.0";
		FinSi
	FinSi
	
FinProceso
