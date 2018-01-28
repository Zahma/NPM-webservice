var fs = require("fs");

var text = "hello world !";
var readMe = fs.readFile('people.json', 'utf8', function(err,data){
	var array = JSON.parse(data);
	array.forEach(function(element){
		console.log("my name is "+element.name+" and my age is "+element.age);
	});
});
