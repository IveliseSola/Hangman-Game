$(document).ready(function () {

    var arr = ["loop", "semicolon", "boolean", "array", "variable", "function", "method", "parameter"];

    var word = chooseWord(arr);
    var wordSpaces = [];
    var spaces = blanksFromAnswer(word);
    var remainingLetters = word.length;
    var lettersAlreadyGuessed = [];
    var newList = countElements(letter);


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
            lostGame(newList);
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

    function countElements(p6) {
        var failed = 0;
        lettersAlreadyGuessed.push(p6);
        // for (var i = 0; i < lettersAlreadyGuessed.length; i++){
        //     if ( lettersAlreadyGuessed[i] != word[i]) {
        //         failed++;
        //     }
        // }
        return lettersAlreadyGuessed;
        // return failed;
    }


    function winner(p4) {
        if (p4 === 0) {
            $(".draw").remove();
            $(".guessedList").remove();
            $("#target").remove();
            var messageWinner = $(".winnerMessage");
            var newDiv = $(`<div>
                <p>"Congrats, you won!"</p>
                    <form id="target">
                        <input type="submit" value="Play Again!">
                    </form>
                </div>`)
            // var newDiv = $("<div>");
            // newDiv.text("Congrats you won!!!");
            // messageWinner.append(newDiv);
            // var newButton = $("<input type='button'/>");
            // newButton.addClass("play");
            // newButton.text("Play Again!");
            messageWinner.append(newDiv);
        }
    }


    $(".play").submit(function () {
        return true;
    });



    function lostGame(p) {
        // lettersAlreadyGuessed.push(p);
        if (p.length === 11) {
            $(".draw").remove();
            $(".guessedList").remove();
            $("#target").remove();
            var messageLostGame = $(".lostGameMessage");
            // var divLostGame = $("<div>");
            // divLostGame.text("Oops! Sorry, You've lost!");
            // messageLostGame.append(divLostGame);
            var newDiv = $(`<div>
            <p>"Oops, you've lost!"</p>
                <form id="target">
                    <input type="submit" value="Play Again!">
                </form>
            </div>`)
            messageLostGame.append(newDiv);
        }
    }

});