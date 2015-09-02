var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/catchphrase");

module.exports.Word = require("./word");