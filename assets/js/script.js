const getRandomWord = () => {
    // Selects a random word and corresponding hint from wordList.js
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(word, hint);
}
const screenKeyboardDiv = document.querySelector(".screen-keyboard");

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