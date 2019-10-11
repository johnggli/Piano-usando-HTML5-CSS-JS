const C4 = new Audio("sounds/C4.mp3")
const Db4 = new Audio("sounds/Db4.mp3")
const D4 = new Audio("sounds/D4.mp3")
const Eb4 = new Audio("sounds/Eb4.mp3")
const E4 = new Audio("sounds/E4.mp3")
const F4 = new Audio("sounds/F4.mp3")
const Gb4 = new Audio("sounds/Gb4.mp3")
const G4 = new Audio("sounds/G4.mp3")
const Ab4 = new Audio("sounds/Ab4.mp3")
const A4 = new Audio("sounds/A4.mp3")
const Bb4 = new Audio("sounds/Bb4.mp3")
const B4 = new Audio("sounds/B4.mp3")
const C5 = new Audio("sounds/C5.mp3")
const Db5 = new Audio("sounds/Db5.mp3")
const D5 = new Audio("sounds/D5.mp3")
const Eb5 = new Audio("sounds/Eb5.mp3")
const E5 = new Audio("sounds/E5.mp3")

const playSound = audio => {
    const clone = audio.cloneNode();
    clone.play();
    setTimeout(() => (clone.volume = 0.8), 400);
    setTimeout(() => (clone.volume = 0.6), 800);
    setTimeout(() => (clone.volume = 0.4), 1200);
    setTimeout(() => (clone.volume = 0.2), 1600);
    setTimeout(() => (clone.volume = 0), 2000);
};

const C4key = document.querySelector(".C4-key");
const playC4 = () => {
    playSound(C4);
    C4key.classList.add("active");
    setTimeout(() => C4key.classList.remove("active"), 200);
};
C4key.addEventListener("click", playC4);