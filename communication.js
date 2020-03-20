var airconsole = new AirConsole();

// Listen for messages from other devices
airconsole.onMessage = function (from, data) {
/*
    // We receive a message -> Send message back to the device
    airconsole.message(from, "Full of pixels!");

    // Show message on device screen
    var info = document.createElement('DIV');
    info.innerHTML = data;
    document.body.appendChild(info);*/

    if(data.xVelChange !== null) {
        eggs[0].xVel += data.xVelChange;
    }
    if(data.xVelSet !== null) {
        eggs[0].xVel = data.xVelSet;
    }
    if(data.yVelChange !== null) {
        eggs[0].yVel += data.yVelChange;
    }
    if(data.yVelSet !== null) {
        eggs[0].yVel = data.yVelSet;
    }
    if(data.xAcc !== null) {
        eggs[0].xAcc = data.xAcc;
    }
    if(data.yAcc !== null) {
        eggs[0].yAcc = data.yAcc;
    }
    
};