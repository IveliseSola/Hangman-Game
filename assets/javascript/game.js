$(document).ready(function () {

    var arr = ["loop", "semicolon", "boolean", "array", "variable", "function", "method", "parameter"];

    var word = chooseWord(arr);
    var wordSpaces = [];
    var spaces = blanksFromAnswer(word);
    var remainingLetters = word.length;
    var lettersAlreadyGuessed = [];


    drawWord();

    function drawWord() {
        $(".draw").empty();
        spaces.forEach(function (space) {
            $(".draw").append(space + " ");
        });
    }

    function chooseWord(p1) {
        return p1[Math.floor(Math.random() * p1.length)];
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
            list(letter);
            checkGuess(letter);
            lostGame(letter);
        }
        drawWord();
        event.preventDefault();
        this.reset();
    })


    function checkGuess(p2) {
        for (var i = 0; i < word.length; i++) {
            if (word[i] === p2) {
                wordSpaces[i] = p2;
                remainingLetters--;
                winner(remainingLetters);
            }
        }
        // lostGame(failed);
    }


    function list(p3) {
        lettersAlreadyGuessed.push(p3);
        var moreLetters = $(".guessedList");
        var newList = $("<div>");
        for (var i = 0; i < lettersAlreadyGuessed.length; i++) {
            newList.text(lettersAlreadyGuessed[i]);
            moreLetters.append(newList);
        }
    }

    function winner(p4) {
        if (p4 === 0) {
            $(".draw").remove();
            $(".guessedList").remove();
            $("#target").remove();
            var messageWinner = $(".winnerMessage");
            var newDiv = $("<div>");
            newDiv.text("Congrats you won!!!");
            messageWinner.append(newDiv);
            var newButton = $("<button>");
            newButton.addClass("play");
            newButton.text("Play Again!");
            messageWinner.append(newButton);
        }

    }

    $(".play").click(function () {


    });

    function lostGame(p5) {
        var failed = 0;
        for (var i = 0; i < 11; i++) {
            for (var j = 0; j < word.length; j++) {
                if (word[j] != p5) {
                    failed++;
                }
            }
        }
        $(".draw").remove();
        $(".guessedList").remove();
        $("#target").remove();
        var messageLostGame = $(".lostGameMessage");
        var divLostGame = $("<div>");
        divLostGame.text("Oops! Sorry, You've lost!");
        messageLostGame.append(divLostGame);
    }
    // lostGame(failed);

    // if (p5 === 11) {
    //     $(".draw").remove();
    //     $(".guessedList").remove();
    //     $("#target").remove();
    //     var messageLostGame = $(".lostGameMessage");
    //     var divLostGame = $("<div>");
    //     divLostGame.text("Oops! Sorry, You've lost!");
    //     messageLostGame.append(divLostGame);
    // }


});