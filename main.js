// Variable para almacenar la cantidad de mayores y menores
let contadorMayores = 0;
let contadorMenores = 0;

// Función para agregar una edad y actualizar los resultados
function agregarEdad() {
  // Obtener el valor de la edad ingresada
  const edad = parseInt(document.getElementById('age-input').value);

  // Verificar si la edad es mayor o menor de edad
  if (edad >= 18) {
    contadorMayores++;
  } else {
    contadorMenores++;
  }

  // Actualizar los resultados en el HTML
  document.getElementById('mayores').textContent = contadorMayores;
  document.getElementById('menores').textContent = contadorMenores;
}
