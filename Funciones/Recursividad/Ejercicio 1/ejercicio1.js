//Serie Fibonacci con Recursividad: 1.1.2.3.5.8…
let numeroFIbo = parseInt(prompt("Digite el numero por el cual se desarrollara el ejercicio"))
let b=1;
let c=0; 
let m;
const serieprogresiva = (a) => {
   if ( a > numeroFIbo ) return
  m= b+c
  console.log(m) 
  b=c //B =>> toma el valor de c y lo guarda despues de cada vuelta al igual que C con m.
  c=m 
   return serieprogresiva (a +1)
 
}
serieprogresiva (1)



//0,1,1,2,
