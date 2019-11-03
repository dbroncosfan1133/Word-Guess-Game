
//Global arrays
var bands = ["defleppard", "eagles", "journey", "rush", "styx", "foreigner", "aerosmith","ironmaiden", "bonjovi", "genesis", "blacksabbath", "metallica", "vanhalen"];
var chosenBand = "";
var lettersInWord = [];
var numberBlanks = 0;
var blanksCorrectLetters = [];
var wrongLetters = [];
var userGuess  = [];
var remainingGuesses = 10;
var winCounter = 0;
var lossCounter = 0
var rightCount = 0;
hasFinished = false



function resetGame () {

    chosenBand = bands[Math.floor(Math.random() * bands.length)];
    lettersInWord = chosenBand.split('');
    numberBlanks = lettersInWord.length;
    rightCount = 0;
    remainingGuesses = 10;
    blanksCorrectLetters = [];
    wrongLetters = [];
    
    startGame();
}

function startGame() {
    chosenBand = bands[Math.floor(Math.random() * bands.length)];
    lettersInWord = chosenBand.split('');
    numberBlanks = lettersInWord.length;

    rightCount = 0;
    remainingGuesses = 10;
    wrongLetters = [];
    blanksCorrectLetters = [];

    for(var i = 0; i < numberBlanks; i++) {
        blanksCorrectLetters.push('_');
        document.getElementById('bandToGuess').innerHTML = blanksCorrectLetters;
    }

    document.getElementById('bandToGuess').innerHTML = blanksCorrectLetters.join(' ');
    document.getElementById('numGuess').innerHTML = remainingGuesses;
    document.getElementById('wins').innerHTML = winCounter;
    document.getElementById('losses').innerHTML = lossCounter;
    document.getElementById('wrongLetters').innerHTML = wrongLetters;
}
    document.onkeyup = function(event) {
        userGuess = event.key
        if(chosenBand.indexOf(event.key) > -1) {
            for(var i =0; i < numberBlanks; i++) {
                if(lettersInWord[i] === event.key) {
                    rightCount++;
                    blanksCorrectLetters[i] = event.key;
                    document.getElementById('bandToGuess').innerHTML = blanksCorrectLetters.join(' ');
            }
        }
    }
    else {
        wrongLetters.push(event.key);
        remainingGuesses--;
        document.getElementById('numGuess').innerHTML = remainingGuesses;
        document.getElementById('wrongLetters').innerHTML = wrongLetters;
    }
    winLose();
}

function winLose () {
    if(rightCount === numberBlanks) {
        winCounter++;
        document.getElementById('wins').innerHTML = winCounter;
        alert("Winner Winner");
        resetGame();
    }
    else if(remainingGuesses === 0) {
        lossCounter++;
        document.getElementById('losses').innerHTML = lossCounter;
        alert('Gameover');
        resetGame();
    }
}


startGame();
