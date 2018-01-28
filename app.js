var http = require("http");

var fs = require("fs");



var server = http.createServer(function(req, res){
	console.log("request was made : "+req.url);
	res.writeHead(200,{'content-type': 'application/json'});
	fs.readFile("people.json","utf8", function(err,data){
		console.log(data)
		res.end(data);
	})
});

server.listen(8000, '127.0.0.1');
console.log("Listerining to port 8000");
