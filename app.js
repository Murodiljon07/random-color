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
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  let color = `rgb(${r}, ${g}, ${b})`;

  if (ColorType.textContent === "RGB:") {
    ColorCode.textContent = color;
  }
  return color;
}

console.log(ColorDisplay);

/* Function to generate RGB random color */
function linerGDcolor() {
  const color1 = rgbRandomColor();
  const color2 = rgbRandomColor();
  const color3 = rgbRandomColor();
  const angle = Math.floor(Math.random() * 360);

  let color = `linear-gradient(${angle}deg, ${color1}, ${color2}, ${color3})`;

  if (ColorType.textContent === "RGB:") {
    ColorCode.textContent = color;
  }

  return color;
}

/* Event listener for color type change */
ColorTypeChange.addEventListener("click", () => {
  if (ColorTypeChange.textContent === "HEX") {
    ColorTypeChange.textContent = "RGB";
    ColorType.textContent = "HEX:";
    GenerateBtn.addEventListener("click", () => {
      ColorDisplay.style.background = getRandomColor();
      document.body.style.background = getRandomColor();
    });
  } else if (ColorTypeChange.textContent === "RGB") {
    ColorTypeChange.textContent = "LinerRGB";
    ColorType.textContent = "RGB:";
    GenerateBtn.addEventListener("click", () => {
      ColorDisplay.style.background = rgbRandomColor();
      document.body.style.background = rgbRandomColor();
    });
  } else if (ColorTypeChange.textContent === "LinerRGB") {
    ColorTypeChange.textContent = "HEX";
    ColorType.textContent = "LinerRGB:";
    GenerateBtn.addEventListener("click", () => {
      ColorDisplay.style.background = linerGDcolor();
      document.body.style.background = linerGDcolor();
    });
  }
});
