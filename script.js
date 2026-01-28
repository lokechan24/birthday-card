const card = document.getElementById("card");
const photoEl = document.getElementById("photo");
const messageEl = document.getElementById("message");
const music = document.getElementById("birthday-music");

/* ================= DATA ================= */

const messageText =
"Happy 😊 birthday Maddy. Wishing you a day as awesome and you are grateful to have you in my life. Here's we have another year of adventures,  laughter, sadness, stories and making memories because we are soulmate. I wish god for you may this year bring success, happiness and endless opportunities.";

const photos = [
  "photo/back.jpg",
  "photo/beach.jpg",
  "photo/COLLAGE.jpg",
  "photo/lmm.jpg",
  "photo/maddy_thumb.jpg",
  "photo/noice.jpg",
  "photo/pinksweatshrt.jpg",
  "photo/selfi.jpg",
  "photo/tounge.jpg",
  "photo/uglybubbly.jpg",
  "photo/x.jpg",
  "photo/y.jpg",
  "photo/z.jpg",
  "photo/zz.jpg"
];

const playlist = [
  "song/maddy.mpeg"
];

/* ================= STATE ================= */

let photoIndex = 0;
let msgIndex = 0;
let songIndex = 0;
let opened = false;

/* ================= CARD OPEN ================= */

card.addEventListener("click", () => {
  if (opened) return;
  opened = true;

  card.classList.add("open");

  playNextSong();
  typeMessage();
  startSlideshow();
});

/* ================= TYPEWRITER ================= */

function typeMessage() {
  if (msgIndex < messageText.length) {
    messageEl.textContent += messageText.charAt(msgIndex);
    msgIndex++;
    setTimeout(typeMessage, 40);
  }
}

/* ================= PHOTO FADE LOGIC ================= */

function showPhoto(index) {
  const layer = document.createElement("div");
  layer.className = "photo-layer";
  layer.style.backgroundImage = `url('${photos[index]}')`;

  photoEl.appendChild(layer);

  requestAnimationFrame(() => {
    layer.classList.add("active");
  });

  const previous = photoEl.querySelector(
    ".photo-layer.active:not(:last-child)"
  );

  if (previous) {
    previous.classList.remove("active");
    setTimeout(() => previous.remove(), 1200);
  }
}

function startSlideshow() {
  showPhoto(photoIndex);

  setInterval(() => {
    photoIndex = (photoIndex + 1) % photos.length;
    showPhoto(photoIndex);
  }, 5000);
}

/* ================= MUSIC ================= */

function playNextSong() {
  if (songIndex >= playlist.length) songIndex = 0;

  music.src = playlist[songIndex];
  music.play().catch(() => {});

  music.onended = () => {
    songIndex++;
    playNextSong();
  };
}
