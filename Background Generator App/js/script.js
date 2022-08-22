// CREATING A BACKGROUND GENERATOR

let inputColor1 = document.getElementById('input1');

let inputColor2 = document.getElementById('input2');
let body = document.querySelector('body');
let color1 = "#00ff00";
let color2 = "#ff0000";
let userText = document.querySelector('h3');

inputColor1.addEventListener('change',function(e){
    // console.log("I am Working!!");
    // console.log(inputColor1.value);  
    color1 = inputColor1.value;
    backgroundGenerator();
    // body.style.background = color1
})

inputColor2.addEventListener('change',function(e){
    // console.log("I am Working!!");
    // console.log(inputColor2.value);  
    color2 = inputColor2.value;
    backgroundGenerator();
    // body.style.background = color1;
})

// This below function will change the background color of the body!!!
function backgroundGenerator() {
    body.style.background = "linear-gradient(to right, "+color1 +", "+ color2 +")";
    userText.innerHTML = "linear-gradient(to right, "+color1 +", "+ color2 +")";
}

