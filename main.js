let contadorMayores = 0;
let contadorMenores = 0;
let personasIngresadas = 0;

function solicitarEdades() {
  for (let i = 1; i <= 20; i++) {
    const edad = parseInt(prompt("Ingrese la edad de la persona " + i + ":"));

    if (edad >= 18) {
      contadorMayores++;
    } else {
      contadorMenores++;
    }

    personasIngresadas++;
  }

  mostrarResultados();
}

function mostrarResultados() {
  alert("Total de personas mayores de edad: " + contadorMayores +
        "\nTotal de personas menores de edad: " + contadorMenores);
}
