const chronometer = new Chronometer();
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
const minDec = document.getElementById('minDec');
const minUni = document.getElementById('minUni');
const secDec = document.getElementById('secDec');
const secUni = document.getElementById('secUni');
const milDec = document.getElementById('milDec');
const milUni = document.getElementById('milUni');
const splits = document.getElementById('splits');


function printTime() {
    printMinutes();
    printSeconds();
    printMilliseconds();
}

function printMinutes() {
    minDec.innerHTML = chronometer.minutes[0];
    minUni.innerHTML = chronometer.minutes[1];
}

function printSeconds() {
    secDec.innerHTML = chronometer.seconds[0];
    secUni.innerHTML = chronometer.seconds[1];
}

function printMilliseconds() {
    milDec.innerHTML = chronometer.milliseconds[0];
    milUni.innerHTML = chronometer.milliseconds[1];
}

function printSplit() {
    let li = document.createElement('li');
    li.innerHTML = chronometer.splitClick();
    splits.appendChild(li);
}

function clearSplits() {
    splits.innerHTML = '';
}

function setStopBtn() {
    btnLeft.textContent = 'STOP';
    btnLeft.className = 'btn stop';
}

function setSplitBtn() {
    btnRight.textContent = 'SPLIT';
    btnRight.className = 'btn split';
}

function setStartBtn() {
    btnLeft.textContent = 'START';
    btnLeft.className = 'btn start';
}

function setResetBtn() {
    btnRight.textContent = 'RESET';
    btnRight.className = 'btn reset';
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    let idIntervalPrint;
    if (chronometer.status === 'Stopped') {
        setStopBtn();
        setSplitBtn();
        chronometer.startClick();
        idIntervalPrint = setInterval(() => printTime(), 10);
    } else if (chronometer.status === 'Running') {
        setStartBtn();
        setResetBtn();
        chronometer.stopClick();
        clearInterval(idIntervalPrint);
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (chronometer.status === 'Running') {
        printSplit();
    } else if (chronometer.status === 'Stopped') {
        chronometer.resetClick();
        clearSplits();
        printTime();
    }
});