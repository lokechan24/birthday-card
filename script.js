const card = document.getElementById("card");
const messageEl = document.getElementById("message");
const photoEl = document.getElementById("photo");

const messageText =
  "Happy 😊 birthday Maddy. Wishing you a day as awesome and you are grateful to have you in my life. Here's we have another year of adventures,  laughter, sadness, stories and making memories because we are soulmate. I wish and pray to the god for you may this year bring success, happiness and endless opportunities.";

// 🔹 YOUR 4 PHOTOS (relative or online URLs)
const photos = [
  "photo/back.jpg",
  "photo/maddy_thumb.jpg",
  "photo/lmm.jpg",
  "photo/COLLAGE.jpg"
];

let msgIndex = 0;
let photoIndex = 0;
let opened = false;

card.addEventListener("click", () => {
  if (opened) return;

  opened = true;
  card.classList.add("open");

  // Show first image immediately
  photoEl.style.backgroundImage = `url('${photos[0]}')`;

  setTimeout(typeMessage, 500);
  startSlideshow();
});

function typeMessage() {
  if (msgIndex < messageText.length) {
    messageEl.textContent += messageText.charAt(msgIndex);
    msgIndex++;
    setTimeout(typeMessage, 40);
  }
}

function startSlideshow() {
  setInterval(() => {
    photoIndex = (photoIndex + 1) % photos.length;
    photoEl.style.backgroundImage = `url('${photos[photoIndex]}')`;
  }, 8000);
}
