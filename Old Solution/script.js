let keyboard = document.querySelector('.keyboard');
let display = document.querySelector(".display");
let key = document.querySelectorAll(".key.p");

console.log(key[1]);
keyboard.onclick = function (event) {
    event.preventDefault();
    // console.log(event);
    let key = event.target;
    // console.log(key);
    display.textContent += key.innerText;
    // console.log(display);
}

document.querySelector(".clear").onclick = function () {
    display.textContent = '';
}