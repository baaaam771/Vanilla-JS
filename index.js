const title2 = document.getElementById("title");
const title = document.querySelector("#title");
title.innerHTML = "Hi! From JS";
title.style.color = "red";
document.title = "JS control";
console.log(title);

function handleResize() {
  console.log("I have been resized");
}

window.addEventListener("resize", handleResize);

function handleClick() {
  title.style.color = "blue";
}
title.addEventListener("click", handleClick);

//window.addEventListener("resize", handleResize());
//이거는 이벤트 리스너 조건(window가 resize 되었을 때)에 상관 없이 handleResize가 바로 호출됨

/*
function handleResize(event) {
    console.log(event);
  }
  
window.addEventListener("resize", handleResize);

이 동작에 관해서 나중에 알아보기(링크와 같은 이번xm에 유용)
*/
