var inputBox = document.querySelector("#mytypingText");
var inputBox2 = document.querySelector("#mytypingText2");
var inputBox3 = document.querySelector("#mytypingText3");

var myString = 'Hii, I am Gaurav Vala, I am 20 years old, Living in Gujarat';

var myString2 = 'I am Learning Front End Development, Watch this space for my upcoming projects';


let myArray2 = myString2.split('');

var myArray = myString.split('');


var loopTimer;

var frameLoop = function() {
    if (myArray.length > 0) {
        inputBox.innerHTML += myArray.shift()
    } else {
        clearTimeout(loopTimer)
    }
    var loopTimer = setTimeout("frameLoop()", 90)
}

var frameLoop2 = function() {
    if (myArray2.length > 0) {
        inputBox2.innerHTML += myArray2.shift()
    } else {
        clearTimeout(loopTimer)
    }
    var loopTimer = setTimeout("frameLoop2()", 80)
}

frameLoop();

frameLoop2();


