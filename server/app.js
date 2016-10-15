express = require('express');
var app = express();

app.get('/recommend', function (req, res) {
	console.log(req.query);
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});module.exports = app;
