// =======================
// get the packages we need ============
// =======================
var fs = require("fs");
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var methodOverride = require('method-override');

var Score   = require('./app/models/score'); // get our mongoose model
var Winner   = require('./app/models/winner');    
// =======================
// configuration =========
// =======================
var port = process.env.PORT || 8080; // used to create, sign, and verify tokens

//'database': 'mongodb://localhost:27017/nistDB'
//'mongodb://noder:noderauth&54;proximus.modulusmongo.net:27017/so9pojyN'

mongoose.connect('mongodb://localhost:27017/superBowlSquaresDB'); // connect to database



// use body parser so we can get info from POST and/or URL parameters
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users




// use morgan to log requests to the console
app.use(morgan('dev'));


app.get('/score', function (req, res) {
  var score = {
    broncos_score: '8',
    panthers_score: '0'
    };

console.log(score);
res.json({
          success: true,
          message: 'Enjoy your score!',
          score: score
        });

});

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

// =======================
// start the server ======
// =======================
app.listen(port);
console.log('Magic happens at http://localhost:' + port);