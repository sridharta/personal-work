var http = require('http');
var htmllib = require('./htmllib');
http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type":"text/html"});
	response.write(htmllib.createHead('Sridhar'));
	console.log("enter");
	console.log("use Nodemon test in nodejs");
	response.write(htmllib.displaySalaryInfo('Sridhar',40000,20000,8500,8500,3000,3750,265,5000,3000));
	//response.write("<p><strong>" + htmllib.moneyInWords(95777) + "</strong></p>");
	response.end();
}).listen(8888);

