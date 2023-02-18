function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBgColor = document.querySelector('.change-color');
const bodyColor = document.querySelector('body');
const TextBgColor = document.querySelector('.color');



changeBgColor.addEventListener("click", (changeColor) => {
   TextBgColor.textContent = getRandomHexColor();
   bodyColor.style.backgroundColor = TextBgColor.textContent;
});












// bodyColor.addEventListener('click', changeColor);

// function changeColor(event) {
//   TextBgColor.textContent = getRandomHexColor();
//   bodyColor.style.backgroundColor = TextBgColor.textContent;
// };

