//sets up the tools we need

var express 		= require('express'),
	app 			= express()
	bodyParser 		= require('body-parser'),
	morgan 			= require('morgan'),
	mongoose 		= require('mongoose'),
	port 			= process.env.PORT || 8080,
	apiRouter 		= require('./app/routes/userRoutes'),
	flash 			= require('connect-flash'),
	morgan			= require('morgan'),
	cookieParser	= require('cookie-parser'),
	session			= require('express-session'),
	configDB		= require('./config/database.js')
	
	

//	CONFIGURATION 
//	=============

mongoose.connect('mongodb://localhost:27019/vacaychat')
//sets up middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cookieParser());

app.set('view engine' 'ejs'); //sets the ejs for templates

// required for passport
app.use(session({ secret: 'supersecretkey'})); //session secret
app.use(passport.initialize());
app.use(passport.session()); //persistent login session
app,use(flash()); //for flash messaging

app.use('/api', apiRouter) //when you get a request starting with api use apiRouter


app.listen(port)
console.log("listening on port" + port)
