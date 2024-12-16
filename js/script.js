const audio = document.getElementById("audio");
const playPauseButton = document.getElementById("play-pause");
const stopButton = document.getElementById("stop");
const muteButton = document.getElementById("mute");
const volumeSlider = document.getElementById("volume");
const progressBar = document.getElementById("progress");
const currentTimeDisplay = document.getElementById("current-time");
const durationDisplay = document.getElementById("duration");

// Reproducir o Pausar
playPauseButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseButton.textContent = "⏸️";
  } else {
    audio.pause();
    playPauseButton.textContent = "▶️";
  }
});

// Detener
stopButton.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0;
  playPauseButton.textContent = "▶️";
});

// Mute
muteButton.addEventListener("click", () => {
  audio.muted = !audio.muted;
  muteButton.textContent = audio.muted ? "🔊" : "🔇";
});

// Volumen
volumeSlider.addEventListener("input", (e) => {
  audio.volume = e.target.value;
});

// Barra de progreso y tiempo
audio.addEventListener("timeupdate", () => {
  const current = audio.currentTime;
  const duration = audio.duration;

  progressBar.value = current / duration || 0;
  currentTimeDisplay.textContent = formatTime(current);
  durationDisplay.textContent = formatTime(duration);
});

// Control manual de la barra de progreso
progressBar.addEventListener("input", (e) => {
  audio.currentTime = e.target.value * audio.duration;
});

// Función para formatear el tiempo
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${secs}`;
}
