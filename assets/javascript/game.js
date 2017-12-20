
var arr = ["aaa", "asdfff", "edfrt", "ao"];

function chooseWord(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
}

var word = chooseWord(arr);

function blanksFromAnswer(palabra) {

    var result = ""; 
    for (var i = 0; i < palabra.length; i++) {
        result += " _ ";
    }

    return result;
}

var spaces = blanksFromAnswer(word);



