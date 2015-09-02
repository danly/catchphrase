var mongoose = require("mongoose");

var wordSchema = new mongoose.Schema({
                      word: String,
                      def: String
                 })

var Word = mongoose.model("Word", wordSchema);
module.exports = Word;