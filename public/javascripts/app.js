function allWords() {
  $.get("/words").done(function (data){
    console.log(data)
    $(data).each(function (i, word) {
      // $("#wordsContainer").append("<li>"+word.word +"</li>")
      // underscore templating
      var template = _.template($("#wordTemp").html())
      wordHTML = template(word)
      $("#wordsContainer").append(wordHTML)

    })
  })
}




$(function() {
  console.log("Ready!")
  allWords()
})
