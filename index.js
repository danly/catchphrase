var express = require("express"),
    bodyParser = require("body-parser"),
    path = require("path"),
    db = require("./models");

var app = express(),
    views = path.join(__dirname, "views");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("bower_components"));
app.use(express.static("public"));


app.get("/", function (req, res){
  var homePath = path.join(views, "home.html")
  res.sendFile(homePath)
});

app.get("/words", function (req, res){
  db.Word.find({}, function (err, words){
    res.send(words);
  })
})











var port = 3001
app.listen(port, function(){
  console.log("Listening on port", port)
});

