Proceso Ejercicio18
	//Una distribuidora de motocicletas tiene una promoción de fin de año qué consiste en lo siguiente. 
	//Las motos marca Honda tienen un descuento del 5%, las marcas Yamaha del 8% y las Suzuki del 10%, las otras marcas 2%
	
	Definir x,z,c,v Como Entero;
	Definir descH, descY, descS, descT como real;
	definir ttH, tty, tts, ttt Como Real;
	definir a Como Caracter;
	Escribir "Marcas de motos: Honda, Yamaha, Suzuki, Otras";
	Escribir " Digite la Marca de la moto que desea llevar en minuscula"; 
	leer a;
	
	si a = ("honda") Entonces
		Escribir "Digite el valor de la moto sin separadores de mil";
		leer x;
		descH<- x*0.05;
		tth<- x-descH;
		Escribir " El valor de su moto con el descuento del 5% es de: $", tth;
	SiNo
		si a = ("yamaha") Entonces
			Escribir "Digite el valor de la moto sin separadores de mil";
			leer z;
			descY<- z*0.08;
			tty<- z-descY;
			Escribir " El valor de su moto  con el descuento del 8% es de: $", tty;
		FinSi
		si a = ("suzuki") Entonces
			Escribir "Digite el valor de la moto sin separadores de mil";
			leer c;
			descS<- c*0.1;
			tts<- c-descS;
			
			Escribir " El valor de su moto con el descuento del 10% es de: $", tts;
		FinSi
		si a = ("otras") Entonces
			Escribir "Digite el valor de la moto sin separadores de mil";
			leer v;
			descT<- v*0.02;
			ttt<- v-descT;
			Escribir " El valor de su moto con el descuento del 2% es de: $", ttt;
		FinSi
	FinSi
	
	
	
	
	
	
	
FinProceso
