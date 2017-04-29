// Hello World Test File :)
//


var ledRed = 0;
var ledBlue = 2;
var toggleOn = false;

function toggle(){
  toggleOn = !toggleOn;
  digitalWrite(ledRed, toggleOn);
  digitalWrite(ledBlue, !toggleOn);
}

function greeting1(){
  console.log('PROGRAM STARTED');
}

function greeting1(){
  console.log('Hello World');
}

var intervalTimer = setInterval(toggle, 500);
//save();

//E.on('init', greeting1);
//E.on('init', greeting2);
