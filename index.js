var express = require("express"),
    bodyParser = require("body-parser"),
    cookieParser = require("cookie-parser"),
    path = require("path"),
    db = require("./models");

var app = express(),
    views = path.join(__dirname, "views");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("bower_components"));
app.use(express.static("public"));
app.use(cookieParser());

var sessions = {};
var guid = 0;

app.get("/", function (req, res){

  //simple cookie counter for visits
  console.log(req.cookies.count);
  var count = 0;
  if (req.cookies.count){
    count = parseInt(req.cookies.count)
  }
  count += 1
  res.cookie("count", count)

  var homePath = path.join(views, "home.html")
  res.sendFile(homePath)
});

app.get("/words", function (req, res){
  db.Word.find({}, function (err, words){
    res.send(words);
  })
})

// app.post("/words", function (req, res){

// })







var port = 3001
app.listen(port, function(){
  console.log("Listening on port", port)
});

