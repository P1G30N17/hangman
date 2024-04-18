const screenKeyboardDiv = document.querySelector(".screen-keyboard");
const attemptsText = document.querySelector(".attempts-text b");
const guessWord = document.querySelector(".guess-word");
const hangmanStockImage = document.querySelector(".stockade-box img");

let chosenWord;
let wrongGuessCount;
let numberOfLetters;
const maxGuesses = 6;

/** 
*Resets the game and all parameters
*/
function resetGame() {
    numberOfLetters = [];
    wrongGuessCount = 6;
    hangmanStockImage.src = `assets/images/hangman-${wrongGuessCount}.png`;
    attemptsText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    document.querySelector(".help-text").style.display = "none";
    document.querySelector(".help-div").style.display = "flex";
    guessWord.innerHTML = chosenWord.split("").map(function() {return `<li class="guess-letter"></li>`}).join("");
    screenKeyboardDiv.querySelectorAll("button").forEach(function(button) {button.disabled = false});
}

/**
 * Selects a random word and corresponding hint from wordList.js
 */
function getRandomWord() {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    chosenWord = word;
    // Creates list of the words length and inserts the guessWord letters into the list.
    guessWord.innerHTML = word.split("").map(function() {return `<li class="guess-letter"></li>`}).join("");
    document.querySelector(".help-text b").innerText = hint; 
    resetGame();
}


/**
 * Checks if the clicked letter is in the chosenWord
 * @param {*} button 
 * @param {*} clickedLetter 
 */
function runGame(button, clickedLetter) {
    if(chosenWord.includes(clickedLetter)) {
        //Displays the correct guessed letters in the hidden word area.
        [...chosenWord].forEach(function (letter, index) {
            if (letter === clickedLetter) {
                guessWord.querySelectorAll("li")[index].innerText = letter;
                guessWord.querySelectorAll("li")[index].classList.add("guessed");
                numberOfLetters.push(letter);
            }
        });
    } else {
        wrongGuessCount --;
        hangmanStockImage.src = `assets/images/hangman-${wrongGuessCount}.png`;
    }
    button.disabled = true;
    attemptsText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    if (wrongGuessCount === 0) {
        Swal.fire({
            title: "Unlucky. The word was " + chosenWord,
            confirmButtonText: "Try Again"
          });
        resetGame();
        getRandomWord();
    }
    if (numberOfLetters.length === chosenWord.length) {
        Swal.fire({
            title: "Congratulations. The word was " + chosenWord,
            confirmButtonText: "Play Again"
          });
        resetGame();
        getRandomWord();
    }
}

// Dynamically creating keyboard and adding event listeners
for (let i = 1; i <= 26; i++) {
    const button = document.createElement("button"); 
    /*  String.fromCharCode is a static method that returns a string created 
        from the specified sequence of UTF-16 code units.
        97 is 'a' and 122 is 'z' on the ASCII table.
    */
    button.innerText = String.fromCharCode(96+i); 
    screenKeyboardDiv.appendChild(button); 
    button.addEventListener("click", function (event) {runGame(event.target, String.fromCharCode(96+i))});
}

getRandomWord();

/**
 * Displays chosen word hint linked via word-list.js
 */
function showHint() {
    var x = document.querySelector(".help-text");
    x.style.display = "block";
    var y = document.querySelector(".help-div");
    y.style.display = "none";
}
