const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let contadorMenores = 0;
let contadorMayores = 0;
let contadorPersonas = 0;

rl.on('line', (input) => {
  const edad = parseInt(input);
  contadorPersonas++;

  if (edad > 17) {
    contadorMayores++;
  } else {
    contadorMenores++;
  }

  if (contadorPersonas === 20) {
    console.log("Cantidad de personas menores de edad: " + contadorMenores);
    console.log("Cantidad de personas mayores de edad: " + contadorMayores);
    rl.close();
  } else {
    console.log("Ingrese la edad de la siguiente persona:");
  }
});

console.log("Ingrese la edad de la primera persona:");

