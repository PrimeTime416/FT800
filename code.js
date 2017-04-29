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
  console.log('4) After Intetval Timing, blocked call :( ');
}

(function main(){
  greeting3();
  setInterval(toggle, 500);
  greeting4();
})();


//save();

E.on('init', function(){
 // console.log('PROGRAM STARTED');
  greeting1();
  }
);

E.on('init', greeting2);

save();

