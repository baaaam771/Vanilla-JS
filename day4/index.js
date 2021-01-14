// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const Body = document.querySelector("body");
const color1 = "rgb(255, 0, 0)";
const color2 = "rgb(0, 255, 0)";
const color3 = "rgb(0, 0, 255)";

function colorChange() {
  const Width = window.innerWidth;
  // console.log(Width);
  if (Width < 400) {
    Body.style.backgroundColor = color1;
  } else if (Width < 800) {
    Body.style.backgroundColor = color2;
  } else {
    Body.style.backgroundColor = color3;
  }
}

function init() {
  colorChange();
  window.addEventListener("resize", colorChange);
}
init();
