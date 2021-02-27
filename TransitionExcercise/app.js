const btn = document.getElementById("btn1");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");

let clickTime = 0;

box1.addEventListener("click", clickCounter);
box2.addEventListener("click", clickCounter);
box3.addEventListener("click", clickCounter);
box4.addEventListener("click", clickCounter);


function clickCounter() {
    clickTime++;
    btn.innerText = `${clickTime} times you have clicked !`;
}

