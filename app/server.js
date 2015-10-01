var express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	port = process.env.PORT || 8080,

mongoose.connect('mongodb://localhost:27019/vacaychat')
//sets up middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));


app.listen(port);
console.log("listening on port" + port);

