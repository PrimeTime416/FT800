//console.log(NodeMCU.A0.getInfo());
//console.log(NodeMCU.D0.getInfo());
//esp = require('ESP8266WiFi');
//pinAnalog = NodeMCU.A0;

var myPins = ['A0','D0', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10'];

var myPinsD = ['D0', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10'];


//List Modes
for(var i = 0; i < myPinsD.length; i++){
 console.log(myPinsD[i]);
 console.log(Pin(myPinsD[i]).getMode());
}

//List Pin Object
for(var i = 0; i < myPins.length; i++){
 console.log(myPins[i]);
 console.log(NodeMCU[myPins[i]].getInfo());
}