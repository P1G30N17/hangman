const screenKeyboardDiv = document.querySelector(".screen-keyboard");
const attemptsText = document.querySelector(".attempts-text b");
const guessWord = document.querySelector(".guess-word");
const hangmanStockImage = document.querySelector(".stockade-box img");

let chosenWord;
let wrongGuessCount = 6;
let numberOfLetters = [];
const maxGuesses = 6;

const getRandomWord = () => {
    // Selects a random word and corresponding hint from wordList.js
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    chosenWord = word;
    console.log(word);
    /*  Creates list of the words length and inserts the guessWord letters into the list.
        Code taken from  'https://www.codingnepalweb.com/' author: Coding Nepal
    */
    guessWord.innerHTML = word.split("").map(() => `<li class="guess-letter"></li>`).join("");
    document.querySelector(".help-text b").innerText = hint; 
}

const initGame = (button, clickedLetter) => {
    // Checks if the clicked letter is in the chosenWord
    if(chosenWord.includes(clickedLetter)) {
        //Displays the correct guessed letters in the hidden word area.
        [...chosenWord].forEach((letter, index) => {
            if (letter === clickedLetter) {
                guessWord.querySelectorAll("li")[index].innerText = letter;
                guessWord.querySelectorAll("li")[index].classList.add("guessed");
                numberOfLetters.push(letter);
            }
        });
    } else {
        wrongGuessCount --;
        hangmanStockImage.src = `assets/images/hangman-${wrongGuessCount}.png`
    }
    button.disabled = true;
    attemptsText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    if (wrongGuessCount === 0) {
        alert("Unlucky, you were unable to guess the correct word")
    } 
    if (numberOfLetters.length === chosenWord.length) {
        alert("Congratulations, you guessed correctly.");
    }
    console.log(numberOfLetters.length);
    console.log(chosenWord.length);
}

// Dynamically creating keyboard and adding event listeners
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button"); 
    /*  String.fromCharCode is a static method that returns a string created 
        from the specified sequence of UTF-16 code units.
        97 is 'a' and 122 is 'z' on the ASCII table.
    */
    button.innerText = String.fromCharCode(i); 
    screenKeyboardDiv.appendChild(button); 
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)))
}

getRandomWord();

function showHint() {
    var x = document.querySelector(".help-text");
    x.style.display = "block";
    var y = document.querySelector(".help-div");
    y.style.display = "none";
};
