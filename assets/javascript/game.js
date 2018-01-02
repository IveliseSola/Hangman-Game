

var arr = ["mango", "cherry", "apple", "pineapple"];

function chooseWord(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
}

var word = chooseWord(arr);
//console.log(word);

var wordSpaces = [];

function blanksFromAnswer(palabra) {
    for (var i = 0; i < palabra.length; i++) {
        wordSpaces[i] = "_";
    }
    return wordSpaces;
}

var spaces = blanksFromAnswer(word);
// $(".test").append("<div>");
// $("<div>").addClass("newDiv");
// var newVar = $("<div>");

spaces.forEach(function (space) {
    $("#test").append(space + " ");
});
// console.log(spaces);
var remainingLetters = word.length;

while (remainingLetters > 0) {

    alert(wordSpaces.join(" "));

    var guess = prompt("Guess a letter, or click Cancel to stop playing.");

    if (guess === null) {

        break;

    } else if (guess.length !== 1) {

        alert("Please enter a single letter.");

    } else {


        for (var j = 0; j < word.length; j++) {

            if (word[j] === guess) {

                wordSpaces[j] = guess;

                remainingLetters--;

            }

        }

    }
}
alert(wordSpaces.join(" "));
