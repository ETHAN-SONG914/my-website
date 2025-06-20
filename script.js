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
document.addEventListener('DOMContentLoaded', function() {
    const title = document.getElementById("name-typing");
    const text = title.textContent;
    title.textContent = "";

    function typeWriter(i) {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(() => typeWriter(i), 50); 
        }
    }
    typeWriter(0); 
});