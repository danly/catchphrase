function allWords() {
  $.get("/words").done(function (data){
    console.log(data)
  })
}




$(function() {
  console.log("Ready!")
  allWords()
})