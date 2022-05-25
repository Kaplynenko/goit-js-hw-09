const buttonStart = document.querySelector("button[data-start]")
const buttonStop = document.querySelector("button[data-stop]")

buttonStart.addEventListener("click", onStartBtnClick)
buttonStop.addEventListener("click", onStopBtnClick)

const DELAY = 1000;

let intervalId = null;

function onStartBtnClick() {
    intervalId = setInterval(() => {
        document.body.style.background = getRandomHexColor();
    },DELAY);
    changeBtnStatus(false, true);
};

function onStopBtnClick() {
    clearInterval(intervalId);
    changeBtnStatus(true, false);
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeBtnStatus = (remove, add) => {
    buttonStart.disabled = add;
    buttonStop.disabled = remove;
};
