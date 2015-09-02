var db = require("./models");
var initialWords = require("./words.json")

db.Word.create(initialWords, function(err, word){
  if(err){
    return console.log(err)
  }
  console.log("Added the words")
  process.exit(0);
})
