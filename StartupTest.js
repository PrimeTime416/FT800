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
  console.log();
  console.log('1) PROGRAM STARTED');
}

function greeting2(){
  console.log('2) Hello World');
}

function greeting3(){
  console.log('3) Main Function Called :) ');
}

function greeting4(){
  console.log('4) After Intetval Timing, blocked if NO E.on(init) ');
}

function main(){
  greeting3();
  var intervalTimer = setInterval(toggle, 500);
  greeting4();
}

E.on('init', function(){
  greeting1();
  greeting2();
  }
);


//*********************** MAIN START *******************
E.on('init', main);
//main(); //Gets BLOCKED IF E.on('init', main) NOT CALLED FIRST
save();

