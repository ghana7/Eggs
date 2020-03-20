var airconsole = new AirConsole();

let leftButton = document.querySelector("#leftButton");
let jumpButton = document.querySelector("#jumpButton");
let rightButton = document.querySelector("#rightButton");
// When we press our button, we send a message to the screen
leftButton.addEventListener("mousedown", function () {
    airconsole.message(AirConsole.SCREEN, setVelocity(-10, null));
});
leftButton.addEventListener("touchstart", function () {
    airconsole.message(AirConsole.SCREEN, setVelocity(-10, null));
});

leftButton.addEventListener("mouseup", function () {
    airconsole.message(AirConsole.SCREEN, setVelocity(0, null));
});
leftButton.addEventListener("touchend", function () {
    airconsole.message(AirConsole.SCREEN, setVelocity(0, null));
});

rightButton.addEventListener("mousedown", function () {
    airconsole.message(AirConsole.SCREEN, setVelocity(10, null));
});
rightButton.addEventListener("touchstart", function () {
    airconsole.message(AirConsole.SCREEN, setVelocity(10, null));
});

rightButton.addEventListener("mouseup", function () {
    airconsole.message(AirConsole.SCREEN, setVelocity(0, null));
});
rightButton.addEventListener("touchend", function () {
    airconsole.message(AirConsole.SCREEN, setVelocity(0, null));
});

// Listen for messages
airconsole.onMessage = function (from, data) {

    // Show message on device screen
    var info = document.createElement('DIV');
    info.innerHTML = data;
    document.body.appendChild(info);
};

class MovementData {
    constructor(xVelChange, xVelSet, yVelChange, yVelSet, xAcc, yAcc) {
        this.xVelChange = xVelChange;
        this.xVelSet = xVelSet;
        this.yVelChange = yVelChange;
        this.yVelSet = yVelSet;
        this.xAcc = xAcc;
        this.yAcc = yAcc;
    }
}

function setVelocity(xVel, yVel) {
    return new MovementData(null, xVel, null, yVel, null, null);
}

function setAccel(xAcc, yAcc) {
    return new MovementData(null, null, null, null, xAcc, yAcc);
}