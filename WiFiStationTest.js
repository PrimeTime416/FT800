var wifi = require('Wifi');
var sidTest = 'Starbucks WiFi';
var sidTestPassword = '';

//var sidTest = 'SM-A1kerr';
//var sidTestPassword = '9054830760';

var targetpage = 'http://pur3.co.uk/hello.txt';
//var targetpage = 'http://starbucks.allstreamwifi.ca/04BD88C15508/Welcome';

function test(data){
  console.log(data);
}

function getPage(){
require("http").get(targetpage, function(res) {
  res.on('data', function(data) {
    console.log("HTTP> "+data);
  });
  res.on('close', function(data) {
    console.log("Connection closed");
  });
});
}

function connentAP(sid, pw){
  wifi.connect(sid, {password:pw}, function(err){
    console.log("connected? err=", err, "info=", wifi.getIP());
  
});

  
}



//wifi.scan(test);
connentAP(sidTest, sidTestPassword);
getPage();

