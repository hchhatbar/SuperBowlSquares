
 // app/routes.js

// grab the nerd model we just created
//var User = require('./models/user');

    module.exports = function(app) {
      app.get('*', function(req, res) {
            res.sendfile('./public/index.html'); // load our public/index.html file
        });
    };

