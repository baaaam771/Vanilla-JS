const a = 221;
let b = a - 5;
var c = 7;
a = 4; //error 앞에 const 써서

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", a];
//array(DB)
const bumkeyInfo = {
  name: "BumKey",
  age: 24,
  gender: "Male",
  isHandsome: True,
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
