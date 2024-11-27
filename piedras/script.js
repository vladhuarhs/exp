let numPiedras;
let min = 1;
let max = 100;

function iniciarJuego() {
  numPiedras = parseInt(document.getElementById("piedras").value);

  // Validar el número de piedras ingresado
  if (isNaN(numPiedras) || numPiedras < 1 || numPiedras > 100) {
    alert("Por favor, ingresa un número válido entre 1 y 100.");
    return;
  }

  // Ocultamos la entrada inicial
  document.querySelector("label").style.display = "none";
  document.getElementById("piedras").style.display = "none";
  document.querySelector("button").style.display = "none";

  // Mostramos la primera pregunta
  document.getElementById("pregunta").style.display = "block";
  siguientePregunta();
}

function siguientePregunta() {
  if (min <= max) {
    let mid = Math.floor((min + max) / 2);
    document.getElementById("mensajePregunta").innerText = `¿El número de piedras es mayor que ${mid}?`;
  }
}

function responder(respuesta) {
  if (min <= max) {
    let mid = Math.floor((min + max) / 2);

    // Ajustamos los límites según la respuesta
    if (respuesta) {
      // Si la respuesta es "sí", significa que el número es mayor que mid
      min = mid + 1;
    } else {
      // Si la respuesta es "no", el número es menor o igual que mid
      max = mid;
    }

    // Si hemos reducido el rango a un solo número, hemos adivinado
    if (min === max) {
      document.getElementById("pregunta").style.display = "none";
      document.getElementById("resultado").style.display = "block";
      document.getElementById("adivinanza").innerText = `¡El número de piedras es ${min}!`;
    } else {
      siguientePregunta();
    }
  }
}

function reiniciarJuego() {
  // Reiniciar el juego
  document.getElementById("resultado").style.display = "none";
  document.querySelector("label").style.display = "block";
  document.getElementById("piedras").style.display = "block";
  document.querySelector("button").style.display = "block";
  document.getElementById("piedras").value = '';
  min = 1;
  max = 100;
}
