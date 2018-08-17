//Cashing the DOM elements
let puzzle_div = document.querySelector(".puzzleDiv");
let lives_span = document.querySelector(".lives");
let wins_p = document.querySelector(".wins");
let instructions_span = document.querySelector(".instructions");
let availLetters_span = document.querySelector(".availLetters");
let pickedLtrs_span = document.querySelector(".pickedLtrs");
let laugh_audio = document.getElementById('laugh');
let rain_audio = document.getElementById('rain');
let haunting_audio = document.getElementById('haunting');


// Index of puzzles, with the randomizer picking one. 
let puzzles = ["DRACULA", "THE MUMMY", "THE WOLFMAN", "FRANKENSTEIN", "THE BLOB", "JASON VORHEES", "FREDDY KRUEGER",];
let word = puzzles[Math.floor(Math.random() * puzzles.length)];

// An Array to hold the puzzle blanks/letters and one to hold all the available guesses
let secret = [];
let available = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " "];
let pickedLtrs = [];

// Varibles to count the guesses and wins
let strikes = 8;
let wins = 0;

// Taking the length of the secret word, and pushing placeholder _'s it into the secret array
// Also, if the chosen word has a space in it, replacing the space with a " - "
for (i = 0; i < word.length; i++) {
    console.log(word[i]);
    if (word[i] == " ") {
        secret.push(" - ");
        console.log(secret);
    } else {
        secret.push("_ ");
    }
}

//Global "Flag" Variable to give the game a "state", for recursion. Thanks Joe for the heads up on this!!
let isGameOver = false;

//Initial load of scoreboard. "Press any key" coming from initial HTML

document.onkeyup = function initialize() {

    puzzle_div.innerHTML = secret.join(" ");
    lives_span.innerHTML = strikes;
    wins_p.innerHTML = wins;
    instructions_span.innerHTML = ('<input id="resetButton" type="button" value="PLEASE TYPE A LETTER!" onclick="reset();" />');
    availLetters_span.innerHTML = available.join(" ");
    pickedLtrs_span.innerHTML = pickedLtrs.join(" ");
    // despacer();
    play();
    rain_audio.play();
};

// Reset function to be called for every subsequent play later after game ends.
// NOTE that wins is not reset by this, so you can keep track of wins through multiple plays.

function reset() {
    isGameOver = false;
    word = puzzles[Math.floor(Math.random() * puzzles.length)];
    console.log(word);
    strikes = 8;
    secret = [];
    console.log(secret);
    available = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    pickedLtrs = [];

    for (i = 0; i < word.length; i++) {
        console.log(word[i]);
        if (word[i] == " ") {
            secret.push(" - ");
            console.log(secret);
        } else {
            secret.push("_ ");
        }
    }
    puzzle_div.innerHTML = secret.join(" ");
    lives_span.innerHTML = strikes;
    instructions_span.innerHTML = ('<input id="resetButton" type="button" value="PLEASE TYPE A LETTER!" onclick="reset();" />');
    availLetters_span.innerHTML = available.join(" ");
    pickedLtrs_span.innerHTML = pickedLtrs.join(" ");
    // despacer();
    play();
    rain_audio.play();
}
//If Functions for only allowing letters from "Available" Array  


if (pickedLtrs.includes(userGuess)){
    pickedLtrs.push(userGuess);
  }

// function checkPicked(userGuess, pickedLtrs) {
//     return pickedLtrs.indexOf(userGuess) === -1;
// }

//Main Play Sequence

function play() {

    //keyup listener to get letter and convert to uppercase for user error
    document.onkeyup = function () {
        let userGuess = String.fromCharCode(event.keyCode).toUpperCase();
        let pickedLetterSpan = document.getElementsByClassName("pickedLtrs")[0].innerText;
        // wordDisplay = wordDisplay.toUpperCase() + e.key.toUpperCase();


        //removes the key pressed from the available array
        var i = available.indexOf(userGuess);
        if (i != -1) {
            available.splice(i, 1);
            // adds the key pressed to the picked letter array
            pickedLtrs.push(userGuess);
            //then updates HTML page
            availLetters_span.innerHTML = available.join(" ");
            pickedLtrs_span.innerHTML = pickedLtrs.join(" ");
        }


        //if the Guessed letter isn't an index of word, remove 1 from the strike pool. If hits Zero, you lose

        if (word.indexOf(userGuess) < 0 && isGameOver == false) {
            if (pickedLetterSpan.length === 0) {
                strikes--;
            }
            if (pickedLetterSpan.length > 0 && pickedLetterSpan.indexOf(userGuess) === -1) {
                strikes--;
            }
            console.log(pickedLtrs.indexOf(userGuess), pickedLtrs, userGuess)
            // if (!available.indexOf(userGuess) == -1){    
            // strikes--;
            // }
            lives_span.innerHTML = strikes;
            if (strikes == 0) {
                // instructions_span.innerHTML = "YOU LOSE! PLAY AGAIN?";
                instructions_span.innerHTML = ('<input id="resetButton" type="button" value="YOU LOSE! CLICK HERE TO PLAY AGAIN!" onclick="reset();" />');
                puzzle_div.innerHTML = word;
                laugh_audio.play();
                isGameOver = true;
            }
        }

        // If the letter exists in the word, add it to the good guesses array. If no more _ in array, you win.
        else {
            for (i = 0; i < word.length; i++) {
                // Each time the guess letter is found, add it as a good guess in the same spot
                if (word[i] === userGuess) {
                    secret[i] = userGuess;
                    // console.log(secret);
                    puzzle_div.innerHTML = secret.join("");

                    if (secret.indexOf("_ ") == -1 && isGameOver == false) {
                        wins++;
                        wins_p.innerHTML = wins;
                        instructions_span.innerHTML = ('<input id="resetButton" type="button" value="YOU GOT IT! CLICK HERE TO PLAY AGAIN!" onclick="reset();" />');
                        haunting_audio.play();
                        isGameOver = true;

                    }
                }

            }

        }
    }
}


// // Other keys do nothing. Repeat key pushes of the same letter do nothing (don't count as strikes)

//toggler function if I wanna explore trying to have a global state
// function toggler() {
//     isGameOver = !isGameOver;
//     return (isGameOver);
//     console.log(isGameOver);
// }

//function to clear out any spaces the puzzles may have

// function despacer() {
//     let space = " ";
//     for (i = 0; i < word.length; i++) {
//         if (word[i] === space) {
//             secret[i] = space;
//             puzzle_div.innerHTML = secret.join(" ");
//         }
//     }
// }

