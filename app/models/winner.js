// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Winner', new Schema({ 
    q1_winner: String,
    q2_winner: String,
    q3_winner: String,
    q4_winner: String
}));