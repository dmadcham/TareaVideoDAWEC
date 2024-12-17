/**
 * Referencia al elemento de video en el DOM.
 * @type {HTMLVideoElement}
 */
const video = document.getElementById("video");

/**
 * Botón para reproducir o pausar el video.
 * @type {HTMLButtonElement}
 */
const playPauseButton = document.getElementById("play-pause");

/**
 * Botón para detener la reproducción del video.
 * @type {HTMLButtonElement}
 */
const stopButton = document.getElementById("stop");

/**
 * Botón para silenciar o activar el audio del video.
 * @type {HTMLButtonElement}
 */
const muteButton = document.getElementById("mute");

/**
 * Botón para activar la pantalla completa en el video.
 * @type {HTMLButtonElement}
 */
const fullscreenbutton = document.getElementById("fullscreen");

/**
 * Control deslizante para ajustar el volumen del video.
 * @type {HTMLInputElement}
 */
const volumeSlider = document.getElementById("volume");

/**
 * Barra de progreso que muestra el avance del video.
 * @type {HTMLInputElement}
 */
const progressBar = document.getElementById("progress");

/**
 * Elemento que muestra el tiempo actual del video.
 * @type {HTMLSpanElement}
 */
const currentTimeDisplay = document.getElementById("current-time");

/**
 * Elemento que muestra la duración total del video.
 * @type {HTMLSpanElement}
 */
const durationDisplay = document.getElementById("duration");

/**
 * Alterna entre reproducir y pausar el video.
 * Cambia el ícono del botón en función del estado del video.
 * @event click
 */
playPauseButton.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playPauseButton.innerHTML = `<i class="fi fi-rr-pause"></i>`;
  } else {
    video.pause();
    playPauseButton.innerHTML = `<i class="fi fi-rr-play"></i>`;
  }
});

/**
 * Detiene la reproducción del video y restablece el tiempo a 0.
 * Cambia el ícono del botón a "play".
 * @event click
 */
stopButton.addEventListener("click", () => {
  video.pause();
  video.currentTime = 0;
  playPauseButton.innerHTML = `<i class="fi fi-rr-play"></i>`;
});

/**
 * Silencia o activa el audio del video.
 * Cambia el ícono del botón en función del estado de silencio.
 * @event click
 */
muteButton.addEventListener("click", () => {
  video.muted = !video.muted;
  muteButton.innerHTML = video.muted ? `<i class="fi fi-rr-volume-slash"></i>` : `<i class="fi fi-rr-volume"></i>`;
});

/**
 * Ajusta el volumen del video según el valor del control deslizante.
 * @param {Event} e - Evento de entrada.
 * @event input
 */
volumeSlider.addEventListener("input", (e) => {
  video.volume = e.target.value;
});

/**
 * Activa el modo de pantalla completa para el video.
 * @event click
 */
fullscreenbutton.addEventListener("click", () => {
  video.requestFullscreen();
});

/**
 * Actualiza la barra de progreso y los elementos de tiempo actual y duración
 * mientras el video se reproduce.
 * @event timeupdate
 */
video.addEventListener("timeupdate", () => {
  const current = video.currentTime;
  const duration = video.duration;

  progressBar.value = current / duration || 0;
  currentTimeDisplay.textContent = formatTime(current);
  durationDisplay.textContent = formatTime(duration);
});

/**
 * Controla manualmente el progreso del video cuando el usuario ajusta la barra.
 * @param {Event} e - Evento de entrada.
 * @event input
 */
progressBar.addEventListener("input", (e) => {
  video.currentTime = e.target.value * video.duration;
});

/**
 * Convierte un tiempo en segundos a un formato de minutos y segundos (MM:SS).
 * @param {number} seconds - El tiempo en segundos.
 * @returns {string} - El tiempo formateado como "MM:SS".
 */
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${secs}`;
}
