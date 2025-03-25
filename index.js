const start = new Date("2025-03-25T09:00:00Z"); // 10h Paris = 9h UTC
const end = new Date("2026-03-25T09:00:00Z");

document.getElementById("startDate").textContent = start.toLocaleString("fr-FR", { timeZone: "Europe/Paris" });

function updateTimer() {
  const now = new Date();
  let elapsed = now - start;
  let remaining = end - now;

  if (elapsed < 0) {
    document.getElementById("elapsed").textContent = "Pas encore commencé !";
    document.getElementById("remaining").textContent = formatTime(end - start);
  } else if (remaining < 0) {
    document.getElementById("elapsed").textContent = "Défi terminé 🎉";
    document.getElementById("remaining").textContent = "0 jour";
  } else {
    document.getElementById("elapsed").textContent = formatTime(elapsed);
    document.getElementById("remaining").textContent = formatTime(remaining);
  }
}

function formatTime(ms) {
  let totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  totalSeconds %= 3600 * 24;
  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${days}j ${hours}h ${minutes}m ${seconds}s`;
}

updateTimer();
setInterval(updateTimer, 1000);