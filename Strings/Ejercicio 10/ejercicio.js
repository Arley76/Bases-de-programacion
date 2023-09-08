// Crear Función que determine si un string numérico es capicua EJ: “12321”
let numcapicua = prompt("Digite un número para determinar si es capicúa o no");
let numReverso = numcapicua.split("").reverse().join(""); 
if (numcapicua === numReverso) {
    console.log("El número " + numcapicua + " es capicúa");
} else {
    console.log("El número no es capicúa");
}
