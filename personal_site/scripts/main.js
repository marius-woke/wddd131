// =========================
// 🎃 SLIDESHOW
// =========================
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000);
}

document.getElementById("quiz-form").addEventListener("submit", function (e) {
  e.preventDefault();

  let score = 0;
  const answers = {
    q1: "werewolf",
    q2: "jack",
    q3: "blue"
  };

  for (let key in answers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === answers[key]) {
      score++;
    }
  }

  const result = document.getElementById("quiz-result");
  result.textContent = `You got ${score} out of 3 correct! 🎃`;
});


// =========================
// 🦇 FLYING BATS
// =========================
const batContainer = document.getElementById("bat-container");
const batImage = "images/bat1.png";

function createBat() {
  const bat = document.createElement("img");
  bat.src = batImage;
  bat.classList.add("bat");
  bat.style.left = Math.random() * window.innerWidth + "px";
  bat.style.top = Math.random() * 200 + "px";
  bat.style.animationDuration = 8 + Math.random() * 5 + "s";
  batContainer.appendChild(bat);

  // Remove bat after animation
  setTimeout(() => {
    bat.remove();
  }, 13000);
}

// Create new bats periodically
setInterval(createBat, 3000);

// =========================
// 🔊 SPOOKY BACKGROUND MUSIC
// =========================
const spookyAudio = document.getElementById("spooky-audio");
spookyAudio.volume = 0.3; // soft spooky ambience
