const myHeading = document.querySelector("h1");
const imgElememt = document.querySelector("img");

const img1URL = "img/wool.jpg"
const img2URL = "img/nature.jpg"

myHeading.textContent = "Hello World!";

// let myVariable = "Dog";
// alert(myVariable);

let myFirstArray = [11, 'Aliman', true, false, 4.5, null];
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}
function sayHello() {
    alert("Hello my dear!");
    console.log("It is console.log");
    console.error("It is error message!");
}
myHeading.addEventListener('click', sayHello);

function changePhoto(event) {
    let current = imgElememt.getAttribute("src");
    if(current == img1URL) {
        imgElememt.setAttribute("src", img2URL);
    } 
    else {
        imgElememt.setAttribute("src", img1URL);
    }
}
imgElememt.onclick = changePhoto;

