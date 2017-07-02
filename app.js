var express = require('express');
var port = process.env.PORT || 3000
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname)));

var count = 0;
var http = require("http");


	// setInterval(function() {
	// 	console.log("7312 Awaken: "+count++);
	//     http.get("http://shubham-great-livings.herokuapp.com");
	//     http.get("http://resumeselector.herokuapp.com");
	//     http.get("http://mediabuzznet.herokuapp.com");
	//     http.get("http://java-nodejs-blog.herokuapp.com");
	//     http.get("http://shubhamtwilio.herokuapp.com");
	//     http.get("http://shubhammovieflix.herokuapp.com");
	//     http.get("http://visitorsgooglemap.herokuapp.com");
	//     http.get("http://visitorsgooglemap.herokuapp.com");
	//     http.get("http://visitorsgooglemap.herokuapp.com");
	//     http.get("http://visitorsgooglemap.herokuapp.com");
	// }, 1000); // every 5 minutes (300000)




app.get('/', function(req, res){
  	res.render("index.ejs");
});


app.listen(port, function() {
  console.log('Listening on port ' + port)
});


// npm install express --save
// npm install body-parser --save
// npm install path --save
// npm install ejs --save
// npm install http --save
// npm install -g nodemon

