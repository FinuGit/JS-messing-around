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