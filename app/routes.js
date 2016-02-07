
 // app/routes.js

// grab the nerd model we just created
var Score = require('./models/score');
var Winner = require('./models/winner');
    module.exports = function(app) {
      app.get('*', function(req, res) {
            res.sendfile('./public/index.html'); // load our public/index.html file
        });
    };

