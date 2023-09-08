//Diseñar el algoritmo correspondiente a un programa, que:
/* Crea una tabla bidimensional de longitud 5x5 y nombre ‘matriz’.
Carga la tabla con valores numéricos enteros.
Suma todos los elementos de cada fila y todos los elementos de cada columna visualizando los resultados en pantalla.
 */
let matriz= [[2,5,6,7,8],[3,5,6,7,1],[4,6,2,3,7],[2,7,1,3,2],[2,4,6,7,8]]
console.log("Matriz de 5x5")
let Fl1=0
let Fl2=0
let Fl3=0
let Fl4=0
let Fl5=0
let Cl1=0
let Cl2=0
let Cl3=0
let Cl4=0
let Cl5=0
for(let i=0; i<matriz.length; i++){
    console.log(matriz[i])
    Fl1+=matriz[0][i]
    Fl2+=matriz[1][i]
    Fl3+=matriz[2][i]
    Fl4+=matriz[3][i]
    Fl5+=matriz[4][i]

    Cl1+=matriz[i][0]
    Cl2+=matriz[i][1]
    Cl3+=matriz[i][2]
    Cl4+=matriz[i][3]
    Cl5+=matriz[i][4]
}
console.log("Resultados de la suma da cada fila:")
console.log("Fila uno: "+ Fl1+"   Fila dos:"+Fl2+"   Fila tres: "+Fl3+"  Fila 4: "+Fl4+"   Fila cinco:", Fl5);
console.log("Resultados de la suma da cada columna:")
console.log("Columna uno: "+ Cl1+"   Columna dos: "+Cl2+"   Columna tres: "+Cl3+"   Columna 4: "+Cl4+"  Columna cinco:", Cl5);