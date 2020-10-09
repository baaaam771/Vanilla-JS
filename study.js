const a = 221;
let b = a - 5;
var c = 7;
//a = 4; //error 앞에 const 써서

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", a];
//array(DB)
const bumkeyInfo = {
  name: "BumKey",
  age: 24,
  gender: "Male",
  isHandsome: true,
  favMovies: ["Along the gods", "LOTR", "Old Boy"],
  favFood: [
    { name: "Kimchi", fatty: false },
    { name: "chicken", fatty: true },
  ],
};
//object
console.log(b);
console.log(daysOfWeek[2]);
console.log(bumkeyInfo.gender);

bumkeyInfo.gender = "Female";
console.log("Im Working. Im JS. Im Beautiful. Im worth it");

console.log(bumkeyInfo);
console.log(bumkeyInfo.favFood[0].fatty);

console.log(console);
/* const 
1. String 이모티콘도 가능
const name = "BumKey";
console.log(name);

2. boolean
const bool =0;
false

3. Number
const a = 221;

4. Float
const n = 55.1;
*/
function sayHello(name, age) {
  console.log("Hello! ", name, " I'm ", age, " years old");
}

function sayHello2(name, age) {
  console.log(`Hello! ${name} I'm ${age} years old`);
}
//``와 $를 이용해 문자열 표현

sayHello("Bumkey", 24);
sayHello2("Bumkey", 24);

//변수를 사용해 받기

function sayHello3(name, age) {
  console.log(`Hello! ${name} I'm ${age} years old`);
}
const greetBumkey = sayHello3("Bumkey", 24);

console.log(greetBumkey);
//결과값 나오지만 undefind 이유는 함수에 return 값이 없기 때문

function sayHello4(name, age) {
  return `Hello! ${name} I'm ${age} years old`;
}
const greetBumkey2 = sayHello4("Bumkey", 24);

console.log(greetBumkey2);

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  division: function (a, b) {
    return a / b;
  },
  squared: function (a, b) {
    return a ** b;
  },
};

const plus = calculator.plus(10, 5);
const minus = calculator.minus(10, 5);
const multiply = calculator.multiply(10, 5);
const division = calculator.division(10, 5);
const squared = calculator.squared(10, 5);
console.log(plus, minus, multiply, division, squared);

//event & event handler
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

//조건문

const age = prompt("How old are you");

if (age >= 18 && age <= 21) {
  console.log("You can drink but you should not");
} else if (age > 21) {
  console.log("You can drink. go ahead!");
} else {
  console.log("Too young");
}

//color if문
const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = "BASE_COLOR";
  title.addEventListener("click", handleClick);
}

init();

function handleOffline() {
  console.log("Bye Bye");
}

function handleOnline() {
  console.log("Welcomeback");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
