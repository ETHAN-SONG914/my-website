const nameText = "SONG XINGCHEN";
const nameElement = document.getElementById("name-typing");
let index = 0;

function typeEffect() {
  if (index < nameText.length) {
    nameElement.innerHTML += nameText.charAt(index);
    index++;
    setTimeout(typeEffect, 150); 
  }
}

typeEffect();

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
