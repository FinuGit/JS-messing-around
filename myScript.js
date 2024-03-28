function firstTest(){
    document.getElementById("test1").innerHTML = "Testing the change of html via JS";
}
function alertMathAddition(){
    let x = 5, y = 6
    alert(x + y);
}
function time(){
    document.getElementById("time").innerHTML = Date();
}
function charAt(){
    let x = 12;
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    document.getElementById("getChar").innerHTML = text.charAt(x);
}
function shout(){
    let text = document.getElementById("hello").innerHTML;
    document.getElementById("hello").innerHTML = text.toLocaleUpperCase();
}

/*let count = 0;

console.log(count);

let myAge = 24;
console.log(myAge);

let humanDogRatio = 7;
let myDogAge = myAge * humanDogRatio;
console.log(myDogAge);*/

let countEl = document.getElementById("countClicks");
console.log(countEl);

let count = 0

function increment() {
    count = count + 1;
    countEl.innerText = count;
}