$(document).ready(function () {

    var arr = ["loop", "semicolon", "boolean", "array", "variable", "function", "method", "parameter"];
    var validLetters =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "Z"];
    var word = chooseWord(arr);
    var wordSpaces = [];
    var spaces = blanksFromAnswer(word);
    var remainingLetters = word.length;
    var lettersAlreadyGuessed = [];
    var newList = countElements(letter);
    // var keyPressed = event.key.toLowerCase();

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
        // var failed = 0;
        lettersAlreadyGuessed.push(p6);
        
        // for (var i = 0; i < lettersAlreadyGuessed.length; i++){
        //     for ( var j = 0; j < word.length; j++)
        //     if ( lettersAlreadyGuessed[i] != word[j]) {
        //         failed++;
        //     }
        // }
        return lettersAlreadyGuessed;
        // return failed;
    }

    // var  keyPressed = event.key.toLowcase();
    // if (letterGuessed.length === 5) {

    // }
    // if (validLetters.indexOf(keyPressed) > -1 ){
   
    //     if ( lettersAlreadyGuessed.indexOf(keyPressed > -1)){
    //         alert("you already guessed that letter");
    //     }else {
    //         letterGuessed.push(keyPressed);
    //     }
    // }else {
    //     alert("you did not pressed a valid key")
    // }

    function winner(p4) {
        if (p4 === 0) {
            $(".draw").remove();
            $(".guessedList").remove();
            $("#target").remove();
            var messageWinner = $(".winnerMessage");
            var newDiv = $(`<div>
               <img src ="https://www.arcamax.com/hangman/win.gif" alt="happy hangman">
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
            <img src = "https://thumbs.gfycat.com/SaneHeavyIrishwolfhound-max-1mb.gif" alt = "hangman">
            <p>"Oops, you've lost!"</p>
                <form id="target">
                    <input type="submit" value="Play Again!">
                </form>
            </div>`)
            messageLostGame.append(newDiv);
        }
    }

});