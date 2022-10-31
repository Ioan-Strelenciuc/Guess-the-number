var computerGuess;
var userGuessLog = [];
var incercari = 0;
var sound = document.getElementById('sound');
function jocNou() {
    window.location.reload();
}

function init() {
    computerGuess = Math.floor(Math.random() * 100 + 1);
    console.log(computerGuess);
}

function compareGuess() {
    var userGuess = " " + document.getElementById('inputBox').value;
    console.log(userGuess);

    userGuessLog.push(userGuess);
    console.log(userGuessLog);
    document.getElementById('guessLog').innerHTML = userGuessLog;

    incercari++;
    document.getElementById('incercari').innerHTML = incercari;

    if (userGuess > computerGuess) {
        document.getElementById('textOutput').innerHTML = 'Numarul este prea mare';
        document.getElementById('inputBox').value = "";
    } else if (userGuess < computerGuess) {
        document.getElementById('textOutput').innerHTML = 'Numarul este prea mic';
        document.getElementById('inputBox').value = "";
    } else {
        document.getElementById('textOutput').innerHTML = 'Corect';
        sound.pause();
        sound.currentTime = 0;
        sound.play();
    }
}

