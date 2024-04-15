const screenKeyboardDiv = document.querySelector(".screen-keyboard");
const guessWord = document.querySelector(".guess-word");

const getRandomWord = () => {
    // Selects a random word and corresponding hint from wordList.js
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(word);
    guessWord.innerHTML = word.split("").map(() => `<li class="guess-letter"></li>`).join("");
    document.querySelector(".help-text b").innerText = hint; 
}

// Dynamically creating keyboard
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button"); 
    /*  String.fromCharCode is a static method that returns a string created 
        from the specified sequence of UTF-16 code units.
        97 is 'a' and 122 is 'z' on the ASCII table.
    */
    button.innerText = String.fromCharCode(i); 
    screenKeyboardDiv.appendChild(button); 
}

getRandomWord();