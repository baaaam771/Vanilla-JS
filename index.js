const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";
/*
function handleClick() {
  const hasClass = title.classList.contains(CLICKED_CLASS);
  if (hasClass) {
    title.classList.remove(CLICKED_CLASS);
    console.log(title.classList);
  } else {
    title.classList.add(CLICKED_CLASS);
    console.log(title.classList);
  }
}
*/
//위에 함수랑 똑같은 기능
function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}

init();

//시간
const date = new Date();
date;
date.getDay();
date.getDate();
date.getHours();
date.getMinutes();
