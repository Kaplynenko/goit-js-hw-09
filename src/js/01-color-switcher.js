const buttonStart = document.Qeryselector("button[data-start]")
const buttonStop = document.Qeryselector("button[data-stop]")

buttonStart.addEventListener("click", onStartBtnClick)
buttonStop.addEventListener("click", onStopBtnClick)

const DELAY = 1000;

intervalId = null;

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