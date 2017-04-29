var tX = 16;
var rX = 15;
var baud = 115200 ;
var serial = Serial1;
var pins = { rx: rX, tx : tX };
function test(baud) {
  serial.removeAllListeners();
  var l="";
  serial.on('data', function(d) {l+=d;});
  serial.setup(baud, pins);
  serial.write("AT+GMR\r\n");
  setTimeout(function(){console.log(JSON.stringify(l));},800);
}
//digitalWrite(B9,1); // enable on Pico Shim V2
setTimeout(function() { test(9600); }, 2000);
setTimeout(function() { test(115200); }, 3000);
setTimeout(function() { test(57600); }, 4000);
setTimeout(function() { console.log("Done!"); }, 5000);




