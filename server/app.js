express = require('express');
var app = express();
var https = require('https');
var request = require('request');
var options={};

app.get('/recommend', function (req, res) {
	console.log(req.query.repo);
	if(req.query.repo === undefined){
			console.log("undefined issue");
	}else{
			request.get("https://api.github.com/repos/" + req.query.repo + "/contributors", function(error,response,body){
			console.log(response.statusCode);
				if (!error && response.statusCode == 200) {
			        console.log(body); // Show the HTML for the Modulus homepage.
					console.log(response);
			    }});
	}
});

https.createServer(options, app).listen(3000);

		
