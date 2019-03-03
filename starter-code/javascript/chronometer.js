// Constructor
function Chronometer() {
    this.currentTime = 0;
    this.intervalId = 0;
    this.minutes;
    this.seconds;
    this.milliseconds;
    this.status = 'Stopped';
}

Chronometer.prototype.startClick = function () {
    this.status = 'Running';
    this.intervalId = setInterval(() => {
        this.currentTime++;
        this.setTime();
    }, 10)
};

Chronometer.prototype.setMinutes = function () {
    return Math.floor((this.currentTime / 100) / 60);
};

Chronometer.prototype.setSeconds = function () {
    return Math.floor((this.currentTime /100) % 60);
};

Chronometer.prototype.twoDigitsNumber = function (number) {
    return number < 10 ? ('0' + number) : number.toString()
};

Chronometer.prototype.setTime = function () {
    this.minutes = this.twoDigitsNumber(this.setMinutes());
    this.seconds = this.twoDigitsNumber(this.setSeconds());
    this.milliseconds = this.twoDigitsNumber(this.setMilliseconds());
};

Chronometer.prototype.setMilliseconds = function () {
     return this.currentTime % 100;
};

Chronometer.prototype.stopClick = function () {
    this.status = 'Stopped';
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
    this.setTime();
};

Chronometer.prototype.splitClick = function () {
    return (`${this.minutes}:${this.seconds}:${this.milliseconds}`)
};
