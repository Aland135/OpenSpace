/*
Alan Garcia
Open Space
february 19, 2022
alan.garcia1135gmail.com

This project is a basic game made using HTML, CSS and JavaScript.
*/

/*----------------LOGIN-----------------*/

const passwordCode = "TrustNo1";//Set password to enable buttons "TrustNo1"
let passwordGiven;//Password we input
const entryInput = document.querySelectorAll(".buttons");
const okCheck = document.getElementById("ok");

entryInput.forEach(function(entry){//Disable input except for password and ok button
    entry.disabled = true;
});

function logIn(){//Function to enable control panel if our password is correct
    passwordGiven = document.getElementById("password").value;
    if (passwordCode == passwordGiven){
        document.getElementById("password").disabled = true;
        document.getElementById("ok").disabled = true;
        entryInput.forEach(function(entry) {
            entry.disabled = false;
        });
        return true;
    } else if (passwordCode != passwordGiven){
        entryInput.forEach(function(entry){
            entry.disabled = true;
        });
        return false;
    }
}

okCheck.addEventListener("click", logIn);//Call the logIn function each time the ok button is pressed

/*----------------LAUNCH BUTTON ACTIVATION-----------------*/

let conditionButtons = Array();
let conditionLevers = Array();
const checkBoxValue = [true, true, true, true, true, true];

const condition1 = document.querySelectorAll(".condition1");
const condition2 = document.querySelectorAll(".condition2");

function launchCondition(){//Set a function to set a new value to the arrays of checkboxes and levers and enable launch button 
    let i = 0;
    condition1.forEach(function(button){//Set value to checkboxes depending on user input
        conditionButtons[i] =  button.checked;
        i++;
    });

    i = 0;
    condition2.forEach(function(button){//Set value to levers depending on user input
        conditionLevers[i] =  button.value;
        i++;
    });

    if (conditionButtons.toString() === checkBoxValue.toString()){//Enable launch button when all the checkboxes are marked
        document.getElementById("launchButton").disabled = false;
    }
}

condition1.forEach(function(button){//Call launchCondition function when a checkbox is clicked
    button.addEventListener("click",launchCondition);
});
condition2.forEach(function(button){//Call launCondition function when a lever is clicked
    button.addEventListener("click",launchCondition);
});

/*----------------ROCKET ANIMATION-----------------*/

const rocket = document.getElementById("rocket");
const launch = document.getElementById("launchButton");

function moveRocket() {//Set animation to the rocket based on user input
    let speed;//Set the speed of the rocket based on the first lever
    if (conditionLevers[0] == 0){
        speed = 0;
    } else if (conditionLevers[0] == 1) {
        speed = 3000;
    } else if (conditionLevers[0] == 2) {
        speed = 2500;
    } else if (conditionLevers[0] == 3) {
        speed = 2000;
    } else if (conditionLevers[0] == 4) {
        speed = 1500;
    } else if (conditionLevers[0] == 5) {
        speed = 1000;
    }

    let directionX;//Set the horizontal direction of the rocket based on the second lever
    if (conditionLevers[1] == 0){
        directionX = 0;
    } else if (conditionLevers[1] == 1) {
        directionX = 10;
    } else if (conditionLevers[1] == 2) {
        directionX = 20;
    } else if (conditionLevers[1] == 3) {
        directionX = 30;
    } else if (conditionLevers[1] == 4) {
        directionX = 40;
    } else if (conditionLevers[1] == 5) {
        directionX = 50;
    }

    let directionY;//Set the vertical direction of the rocket based on the third lever
    if (conditionLevers[2] == 0){
        directionY = 50;
    } else if (conditionLevers[2] == 1) {
        directionY = 60;
    } else if (conditionLevers[2] == 2) {
        directionY = 70;
    } else if (conditionLevers[2] == 3) {
        directionY = 80;
    } else if (conditionLevers[2] == 4) {
        directionY = 90;
    } else if (conditionLevers[2] == 5) {
        directionY = 100;
    }

    let tilt;//Set the rotation of the rocket based on the fourth lever 
    if (conditionLevers[3] == 0){
        tilt = -20;
    } else if (conditionLevers[3] == 1) {
        tilt = -5;
    } else if (conditionLevers[3] == 2) {
        tilt = 10;
    } else if (conditionLevers[3] == 3) {
        tilt = 25;
    } else if (conditionLevers[3] == 4) {
        tilt = 40;
    } else if (conditionLevers[3] == 5) {
        tilt = 55;
    }

    rocket.animate([
        { // current position of the rocket
            bottom: '38vh',
            left: '18vw'
        },
        { //  final position of the rocket
            bottom: directionY + 'vh',
            left: directionX + 'vw',
            transform: 'rotate(' + tilt + 'deg)' 
        }
    ], {
        // speed
        duration: speed,
        iterations: 1
    })
}

launch.addEventListener("click", moveRocket);//Call the moveRocket function when the launch button is clicked