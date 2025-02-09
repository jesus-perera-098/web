// Referencias a los elementos
const playMusicButton = document.getElementById('play-music');
const audio = document.getElementById('musica-fondo');
const gif = document.getElementById("gif");
const btnSi = document.getElementById("btn-si");
const btnNo = document.getElementById("btn-no");
const texto = document.getElementById("texto");
const btnDescargarPDF = document.getElementById("btn-descargar");

// Contador para los clics en el botón "No"
let contadorNo = 0;

// Rutas de los diferentes GIFs
const gifs = [
  "Gif/5.gif", 
  "Gif/6.gif", 
  "Gif/3.gif", 
  "Gif/4.gif", 
  "Gif/9.gif"
];

// Mensajes dinámicos para el botón "No"
const mensajesBotonNo = [
  "¿Estás segura?",
  "Piénsalo bien...",
  "¿De verdad no?",
  "Ya no puedes decir que no"
];

// Función para mover el botón "No"
function moverBotonNo() {
  const buttonContainer = document.querySelector('.buttons');
  const containerWidth = buttonContainer.offsetWidth;
  const botonNoWidth = btnNo.offsetWidth;

  const maxX = containerWidth - botonNoWidth;
  const randomX = Math.random() * maxX;

  btnNo.style.left = `${randomX}px`;
}

// Función para cambiar el GIF, el texto y el mensaje del botón "No"
function cambiarGifYTexto() {
  if (contadorNo < gifs.length) {
    gif.src = gifs[contadorNo]; 
    texto.textContent = `¿Quieres ser mi San Valentín? ❤️`;
    btnNo.textContent = mensajesBotonNo[contadorNo]; // Cambia el texto del botón
    contadorNo++;
  }

  let scaleFactor = 1 + 0.80 * contadorNo;
  btnSi.style.transform = `scale(${scaleFactor})`;

  if (contadorNo >= gifs.length) {
    btnNo.style.opacity = "0";
    btnNo.style.pointerEvents = "none"; 
  } else {
    moverBotonNo();
  }
}

// Función para cambiar el GIF y mostrar el botón de descarga al presionar "Sí"
function cambiarGifSi() {
  gif.src = "Gif/7.gif";
  texto.textContent = "¡Sabía que dirías que sí! ❤️";

  btnSi.style.display = "none"; // Ocultar botón "Sí"
  btnDescargarPDF.style.display = "block"; // Mostrar botón de descarga
  btnNo.style.opacity = "0"; // Desaparece el botón "No"
  btnNo.style.pointerEvents = "none";
}

// Evento para reproducir música al hacer clic en el botón de música
playMusicButton.addEventListener('click', () => {
  audio.currentTime = 43; // Inicia desde el segundo 43
  audio.play();
  playMusicButton.style.display = 'none'; // Oculta el botón de música
});

// Configurar el enlace para descargar el PDF
btnDescargarPDF.href = "imagen/invitacion para Eymi.pdf";
btnDescargarPDF.download = "invitacion para Eymi.pdf";

// Asignar eventos a los botones "Sí" y "No"
btnNo.addEventListener("click", cambiarGifYTexto);
btnSi.addEventListener("click", cambiarGifSi);




































  