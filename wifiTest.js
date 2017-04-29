function out(payload){
console.log('THE AP STATUS');
console.log(payload);
}


//var wifi = require('Wifi');
//var esp = require("ESP8266");
var wifi = require("ESP8266WiFi_0v25");
wifi.getStatus(out);
wifi.scan(out);


