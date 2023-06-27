let inputCantidad = document.getElementById('input-cantidad');

function sumar() {
  if (inputCantidad.value < 9) {
    inputCantidad.value = parseInt(inputCantidad.value) + 1
  }
}

function restar() {
  if (inputCantidad.value < 1) {
    inputCantidad.value = 0
  } else {
    inputCantidad.value = parseInt(inputCantidad.value) - 1
  }
}