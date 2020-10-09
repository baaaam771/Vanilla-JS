const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  const currentClass = title.className;
  if (currentClass !== CLICKED_CLASS) {
    title.className = CLICKED_CLASS;
    console.log("!==");
  } else {
    title.className = "";
    console.log("===");
  }
}

function init() {
  title.addEventListener("click", handleClick);
}

init();
