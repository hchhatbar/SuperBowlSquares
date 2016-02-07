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

app.post('/score', function (req, res) {
    console.log('********SCORE POST/UPDATE******');
  console.log(req.body);  
  console.log('broncos score: ' + req.body.broncos_score);
 console.log('panthers score: ' + req.body.panthers_score);
  // create logic to autogenerate uid and password
  // 
    var score = new Score({
    broncos_score: req.body.broncos_score,
    panthers_score: req.body.panthers_score,
  
    });
  
  score.save(function(err) {
  if (err) throw err;
  else{
  console.log('Score saved successfully!');
   // send the username password back for login
      res.json({
        score: score,
        message : 'Score saved successfully'
      });
      }

  });

});


app.get('/score', function (req, res) {
console.log('get scores')
Score.find().sort([['_id', -1]]).limit(1).select('broncos_score panthers_score  _id').exec(function(err, score){
    //handle result
  //  }
//});
//Score.find({}, function(err, score) {
  var defaultScore = {
    broncos_score: '0',
    panthers_score: '0'
    };
        console.log('score:' + score);
    console.log('err:' + err);
    if (err) throw err;

    if (!score) {
      console.log('no scores');
      res.json({ success: false, message: 'Score not found.', score:defaultScore });
    } else if (score) {

       var score = score;

        console.log('score:' + score);

        // return the information including token as JSON
        res.json({
          success: true,
          message: 'Enjoy your score!',
          score: score
        });
      }   
});
});






// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

// =======================
// start the server ======
// =======================
app.listen(port);
console.log('Magic happens at http://localhost:' + port);