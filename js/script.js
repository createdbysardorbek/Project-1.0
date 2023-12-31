let workMin = document.querySelector(".workMin"),
    workSec = document.querySelector(".workSec"),
    breakSec = document.querySelector(".breakSec"),
    breakMin = document.querySelector(".breakMin"),
    cycleTime = document.querySelector(".cycleTime");

let start = document.querySelector(".start"),
    reset = document.querySelector(".reset"),
    pause = document.querySelector(".pause");

let startTimer;

start.addEventListener("click", () => {
    if (startTimer === undefined) {
        startTimer = setInterval(timer, 1000);
    } else {
        alert("Timer is already running")
    }
})

reset.addEventListener("click", () => {
    workMin.innerHTML = 25;
    workSec.innerHTML = '00';

    cycleTime.innerHTML = 0;

    breakMin.innerHTML = '05';
    breakSec.innerHTML = '00';

    stopInterval();
    startTimer = undefined;
})

pause.addEventListener("click", () => {
    stopInterval();
    startTimer = undefined;
})

function stopInterval() {
    clearInterval(startTimer)
    startTimer = undefined
}

function timer() {
    if (parseInt(workSec.innerHTML) !== 0) {
        workSec.innerHTML = workSec.innerHTML-- < 11 ? `0${workSec.innerHTML--}` : workSec.innerHTML--
    } else if (parseInt(workMin.innerHTML) !== 0 && parseInt(workSec.innerHTML) === 0) {
        workMin.innerHTML = workMin.innerHTML-- < 11 ? `0${workMin.innerHTML--}` : workMin.innerHTML--
        workSec.innerHTML = 59
    }

    if (parseInt(workMin.innerHTML) === 0 && parseInt(workSec.innerHTML) === 0) {
        if (parseInt(breakSec.innerHTML) !== 0) {
            breakSec.innerHTML = breakSec.innerHTML-- < 11 ? `0${breakSec.innerHTML--}` : breakSec.innerHTML--
        } else if (parseInt(breakMin.innerHTML) !== 0 && parseInt(breakSec.innerHTML) === 0) {
            breakMin.innerHTML = breakMin.innerHTML-- < 11 ? `0${breakMin.innerHTML--}` : breakMin.innerHTML--
            breakSec.innerHTML = 59
        }
    }

    if (parseInt(workMin.innerHTML) === 0 && parseInt(workSec.innerHTML) === 0 && parseInt(breakMin.innerHTML) === 0 && parseInt(breakSec.innerHTML) === 0) {
        workSec.innerHTML = '00';
        workMin.innerHTML = 25;

        cycleTime.innerHTML = 0;

        breakMin.innerHTML = '05';
        breakSec.innerHTML = '00';

        stopInterval();

        cycleTime.innerHTML++
    }
}
