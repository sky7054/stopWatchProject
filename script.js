const countDown = document.getElementById("countDown");



const startBtn = document.querySelector(".startButton");

let initialSecond = 0;
let intervalId;
const startTimer = () => {
    intervalId = setInterval(() => {
        countDown.innerText = initialSecond++;
    },1000);
}

startBtn.addEventListener("click",startTimer());




const resetBtn = document.getElementById("resetButton");






const stopBtn = document.getElementById("stopButton");





const timeBtn = document.getElementById("timeButton");





const clearBtn = document.getElementById("clearButton");



