
var port     = process.env.PORT || 8083;
var client = require('socket.io')();



client.on('connection' , function(socket ){
	console.log("Client "+clients+ " Connected.....");

	


});

client.listen(port);
console.log("Connected on port "+port);


