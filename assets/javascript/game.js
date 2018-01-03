$(document).ready(function () {

    var arr = ["loop", "semicolon", "boolean", "array", "variable", "function", "method", "parameter"];

    var word = chooseWord(arr);
    var wordSpaces = [];
    var spaces = blanksFromAnswer(word);
    var remainingLetters = word.length;
    var lettersAlreadyGuessed = [];

    drawWord();

    function drawWord() {
        $(".test").empty();
        spaces.forEach(function (space) {
            $(".test").append(space + " ");
        });
    }

    function chooseWord(p) {
        return p[Math.floor(Math.random() * p.length)];
    }

    function blanksFromAnswer(wordSelected) {
        for (var i = 0; i < wordSelected.length; i++) {
            wordSpaces[i] = "_";
        }
        return wordSpaces;
    }

    
    // jQuery.validator.addMethod("lettersonly", function(value, element) {
    //     return this.optional(element) || /^[a-z]+$/i.test(value);
    //   }, "Letters only please");

    // $("#target").validate({
    //     rules: {
    //         letter: { lettersonly: true }
    //     }
    // });
    
      
    $("#target").submit(function (event) {

        var letter = $("input:first").val();

        
        if (letter.length !== 1) {
            alert("Please enter a single letter.");
        } else {
            lettersAlreadyGuessed += letter;
            for (var j = 0; j < word.length; j++) {
                if (word[j] === letter) {
                    wordSpaces[j] = letter;
                    remainingLetters--;
                }
            }
        }

        drawWord();
        event.preventDefault();
        this.reset();
    })

    // $(".guessedList").test(lettersAlreadyGuessed[]);
});