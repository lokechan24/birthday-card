const card = document.getElementById("card");
const messageEl = document.getElementById("message");
const photoEl = document.getElementById("photo");
const music = document.getElementById("birthday-music");

const messageText =
  "Happy 😊 birthday Maddy. Wishing you a day as awesome and you are grateful to have you in my life. Here's we have another year of adventures,  laughter, sadness, stories and making memories because we are soulmate. I wish and pray to god for you may this year bring success, happiness and endless opportunities.";

// Photos
const photos = ["photo/back.jpg", "photo/maddy_thumb.jpg", "photo/lmm.jpg", "photo/COLLAGE.jpg"];

// Playlist (replace with your 5 songs)
const playlist = [
  "song/06 - HAPPY BIRTHDAY TO YOU.mp3",
  "song/NAYEON_SUNSET_Lyrics_나연_노을만_예쁘다_가사_Color_Coded_Han_Rom_Eng.flac"
];

let msgIndex = 0;
let photoIndex = 0;
let opened = false;
let songIndex = 0;

// When card is clicked
card.addEventListener("click", () => {
  if (opened) return;
  opened = true;
  card.classList.add("open");

  // Start first song
  playNextSong();

  // Show first image immediately
  photoEl.style.backgroundImage = `url('${photos[0]}')`;

  setTimeout(typeMessage, 500);
  startSlideshow();
});

// Typewriter effect
function typeMessage() {
  if (msgIndex < messageText.length) {
    messageEl.textContent += messageText.charAt(msgIndex);
    msgIndex++;
    setTimeout(typeMessage, 40);
  }
}

// Photo slideshow
function startSlideshow() {
  setInterval(() => {
    photoIndex = (photoIndex + 1) % photos.length;
    photoEl.style.backgroundImage = `url('${photos[photoIndex]}')`;
  }, 5000);
}

// Play next song in playlist
function playNextSong() {
  if (songIndex >= playlist.length) return; // stop after last song

  music.src = playlist[songIndex];
  music.play().catch(() => console.log("User interaction required"));

  // When song ends, play next
  music.onended = () => {
    songIndex++;
    playNextSong();
  };
}
