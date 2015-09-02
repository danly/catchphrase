function allWords() {
  $.get("/words").done(function (data){
    console.log(data)
    $(data).each(function (i, word) {
      $(".wordsContainer").append("<li>"+word.word +"</li>")
    })
  })
}




$(function() {
  console.log("Ready!")
  allWords()
})
