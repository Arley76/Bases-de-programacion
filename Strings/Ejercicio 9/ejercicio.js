// Que lea una oración desde el teclado y determine cuántas palabras tiene la oración.
let oracion=prompt("Ingrese una oración").replace(/\s/g, "").length
console.log("La oracion tiene "+ oracion + " palabras.")


