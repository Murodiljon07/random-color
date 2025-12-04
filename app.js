/* HTML elements*/

const ColorDisplay = document.getElementById("color-display");
const GenerateBtn = document.getElementById("generate-btn");
const ColorType = document.getElementById("color-type");
const ColorCode = document.getElementById("color-code");
const ColorTypeChange = document.getElementById("type-chang-btn");

/* Function to generate HEX random color */
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  if (ColorType.textContent === "HEX:") {
    ColorCode.textContent = color;
  }
  return color;
}

/* Function to generate RGB random color */
function rgbRandomColor() {
  const letters = "0123456789ABCDEF";
  let red = letters.charAt(Math.trunc(Math.random() * letters.length));
  let green = letters.charAt(Math.trunc(Math.random() * letters.length));
  let blue = letters.charAt(Math.trunc(Math.random() * letters.length));

  let color = `${red},${green},${blue}`;

  if (ColorType.textContent === "RGB:") {
    ColorCode.textContent = color;
  }
  return color;
}

console.log(ColorDisplay);

/* Event listener for color type change */
ColorTypeChange.addEventListener("click", () => {
  if (ColorTypeChange.textContent === "HEX") {
    ColorTypeChange.textContent = "RGB";
    ColorType.textContent = "HEX:";
    GenerateBtn.addEventListener("click", () => {
      ColorDisplay.style.background = getRandomColor();
    });
  } else {
    ColorTypeChange.textContent = "HEX";
    ColorType.textContent = "RGB:";
    GenerateBtn.addEventListener("click", () => {
      ColorDisplay.style.backgroundColor = rgbRandomColor();
    });
  }
});
