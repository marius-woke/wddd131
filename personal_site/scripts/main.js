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

const spookyAudio = document.getElementById("spooky-audio");
spookyAudio.volume = 0.3; // soft spooky ambience
