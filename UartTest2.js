var cmd="";
Serial1.setup(115200/*baud*/);
Serial1.on('data', function (data) { 
  Serial1.print(data); 

});


