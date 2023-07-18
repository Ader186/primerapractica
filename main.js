let contadorMayores = 0;
let contadorMenores = 0;
let personasIngresadas = 0;

while (personasIngresadas < 20) {
  const edad = parseInt(prompt("Ingrese la edad de la persona:"));

  if (edad >= 18) {
    contadorMayores++;
  } else {
    contadorMenores++;
  }

  personasIngresadas++;
}

console.log("Total de personas mayores de edad:", contadorMayores);
console.log("Total de personas menores de edad:", contadorMenores);
