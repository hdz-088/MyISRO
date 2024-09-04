const cursorBig = document.querySelector(".big");

const positionElement = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  cursorBig.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
};

window.addEventListener("mousemove", positionElement);

const images = [
  "assets/alien.png",
  "assets/ufo.png",
  "assets/rocket.png",
  "assets/astronaut.png",
];

let currentIndex = 0;
function switchImage() {
  currentIndex = (currentIndex + 1) % images.length;
  const img = document.getElementById("imageSwitcher");
  img.src = images[currentIndex];
}

document.getElementById("imageSwitcher").addEventListener("click", switchImage);
