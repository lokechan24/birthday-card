const card = document.getElementById("card");
const messageEl = document.getElementById("message");
const photoEl = document.getElementById("photo");
const music = document.getElementById("birthday-music");

const balloonsContainer = document.getElementById("balloons");
const confettiContainer = document.getElementById("confetti");

/* =====================
   DATA
===================== */
const messageText =
  "Happy 😊 birthday Maddy. Wishing you a day as awesome as you are. Grateful to have you in my life. Here's to another year of memories, laughter, and adventures together. May this year bring success, happiness, and endless opportunities.";

const photos = [
  "photo/back.jpg",
  "photo/maddy_thumb.jpg",
  "photo/lmm.jpg",
  "photo/beach.jpg",
  "photo/noice.jpg",
  "photo/pinksweatshrt.jpg",
  "photo/selfi.jpg",
  "photo/tounge.jpg",
  "photo/uglybubbly.jpg",
  "photo/COLLAGE.jpg",
  "photo/endofbeggining.jpg"
];

const playlist = [
  "song/06 - HAPPY BIRTHDAY TO YOU.mp3",
  "song/SUNSET - NAYEON (320).mp3"
];

/* =====================
   STATE
===================== */
let msgIndex = 0;
let photoIndex = 0;
let songIndex = 0;
let opened = false;

/* =====================
   CARD CLICK
===================== */
card.addEventListener("click", () => {
  if (opened) return;
  opened = true;

  card.classList.add("open");

  playNextSong();
  startCelebrations();

  photoEl.style.backgroundImage = `url('${photos[0]}')`;
  setTimeout(typeMessage, 500);
  startSlideshow();
});

/* =====================
   TYPEWRITER
===================== */
function typeMessage() {
  if (msgIndex < messageText.length) {
    messageEl.textContent += messageText.charAt(msgIndex++);
    setTimeout(typeMessage, 40);
  }
}

/* =====================
   SLIDESHOW
===================== */
function startSlideshow() {
  setInterval(() => {
    photoIndex = (photoIndex + 1) % photos.length;
    photoEl.style.backgroundImage = `url('${photos[photoIndex]}')`;
  }, 5000);
}

/* =====================
   MUSIC (LOOP FOREVER)
===================== */
function playNextSong() {
  if (songIndex >= playlist.length) songIndex = 0;

  music.src = playlist[songIndex];
  music.play().catch(() => {});

  music.onended = () => {
    songIndex++;
    playNextSong();
  };
}

/* =====================
   BALLOONS
===================== */
function launchBalloons() {
  const colors = ["#ff4d4d", "#ffd93d", "#6bcf63", "#4d96ff", "#ff6ec7"];

  for (let i = 0; i < 20; i++) {
    const b = document.createElement("div");
    b.className = "balloon";

    const size = Math.random() * 20 + 30;
    b.style.width = size + "px";
    b.style.height = size * 1.3 + "px";
    b.style.left = Math.random() * 100 + "vw";
    b.style.background = colors[Math.floor(Math.random() * colors.length)];
    b.style.animationDuration = 4 + Math.random() * 3 + "s";

    balloonsContainer.appendChild(b);
    setTimeout(() => b.remove(), 7000);
  }
}

/* =====================
   CONFETTI
===================== */
function launchConfetti() {
  const colors = ["#ff4d4d", "#ffd93d", "#6bcf63", "#4d96ff", "#ff6ec7"];

  for (let i = 0; i < 40; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.background = colors[Math.floor(Math.random() * colors.length)];
    c.style.animationDuration = 3 + Math.random() * 2 + "s";

    confettiContainer.appendChild(c);
    setTimeout(() => c.remove(), 4000);
  }
}

/* =====================
   CELEBRATION LOOP
===================== */
function launchCelebration() {
  launchBalloons();
  launchConfetti();
}

function startCelebrations() {
  launchCelebration();
  setInterval(launchCelebration, 10000);
}
