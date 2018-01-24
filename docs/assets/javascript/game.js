$(document).ready(function () {

    var languages = ["c", "php", "java", "javascript", "pascal", "objetivec", "html" ,"python","swift", "csharp", "sql"];
    var validLetters =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var word = chooseWord(languages);
    var wordSpaces = [];
    var spaces = blanksFromAnswer(word);
    var remainingLetters = word.length;
    var lettersAlreadyGuessed = [];
    var failed = 0;
    var countNeg = 11;

    drawWord();

    function drawWord() {
        $(".draw").empty();
        spaces.forEach(function (space) {
            $(".draw").append(space + " ");
        });
    }


    function chooseWord(parameter) {
        return parameter[Math.floor(Math.random() * parameter.length)];
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
        if (letter.length == 1 && validLetters.indexOf(letter) > -1) {
            if(lettersAlreadyGuessed.indexOf(letter) < 0) {
                if(word.indexOf(letter) > -1) {
                    checkGuess(letter);
                    list(letter);
                }
                else {
                    failed++;
                    countNeg--;
                    printCountNeg(countNeg);
                    // alert("Incorrect guess");
                    list(letter);
                    lostGame(failed);
                }
            }
            else {
                alert("You already guessed that letter");
            }
        } else {
            alert("Please enter a single letter")
        }
        drawWord();
        event.preventDefault();
        this.reset();
    })
 

    function printCountNeg(parameter) {
        var newSpan = $("<span>");
        newSpan.text(parameter +" ");
        $(".count").append(newSpan);
    }

    
    function checkGuess(parameter) {
        for (var i = 0; i < word.length; i++) {
            if (word[i] === parameter) {
                wordSpaces[i] = parameter;
                remainingLetters--;
                winner(remainingLetters);
            }
        }
    }


    function list(parameter) {
        lettersAlreadyGuessed.push(parameter);
        var moreLetters = $(".guessedList");
        var newList = $("<div>");
        for (var i = 0; i < lettersAlreadyGuessed.length; i++) {
            newList.text(lettersAlreadyGuessed[i]);
            moreLetters.append(newList);
        }
    }


    function winner(parameter) {
        if (parameter === 0) {
            $(".draw").remove();
            $(".guessedList").remove();
            $("#target").remove();
            var messageWinner = $(".winnerMessage");
            var newDiv = $(`<div>
               <img src ="https://www.arcamax.com/hangman/win.gif" alt="happy hangman" style="height:250px;>
                <p>"Congrats, you win!"</p>
                    <form id="target">
                        <input type="submit" value="Play Again!">
                    </form>
                </div>`)
            messageWinner.append(newDiv);
        }
    }


    $(".play").submit(function () {
        return true;
    });


    function lostGame(parameter) {
        if (parameter === 11) {
            $(".draw").remove();
            $(".guessedList").remove();
            $("#target").remove();
            var messageLostGame = $(".lostGameMessage");
            var newDiv = $(`<div>
            <img src = "https://thumbs.gfycat.com/SaneHeavyIrishwolfhound-max-1mb.gif" alt = "hangman" style="height:250px;">
            <p>"Oops!"</p>
                <form id="target">
                    <input type="submit" value="Play Again!">
                </form>
            </div>`)
            messageLostGame.append(newDiv);
        }
    }

});