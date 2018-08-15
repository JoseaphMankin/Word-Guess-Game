//Cashing the DOM elements
let puzzle_div = document.querySelector(".puzzleDiv");
let lives_span = document.querySelector(".lives");
let wins_p = document.querySelector(".wins");
let instructions_span = document.querySelector(".instructions");
let availLetters_span = document.querySelector(".availLetters");
let pickedLtrs_span = document.querySelector(".pickedLtrs");


// Index of puzzles, with the randomizer picking one. 
let puzzles = ["DRACULA", "MUMMY", "WOLFMAN", "FRANKENSTEIN",];
let word = puzzles[Math.floor(Math.random() * puzzles.length)];

// An Array to hold the puzzle blanks/letters and one to hold all the available guesses
let secret = [];
let available = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let pickedLtrs = [];

// Varibles to count the guesses and wins
let strikes = 8;
let wins = 0;

// Taking the length of the secret word, and pushing placeholder _'s it into the secret array
for (i = 0; i < word.length; i++) {
    secret.push("_ ");
}
console.log(secret);

//Flag Variable to give the game a "state", for recursion.
let isGameOver = false;

//toggler function if I wanna explore trying to have a global state
function toggler() {
    isGameOver = !isGameOver;
    return (isGameOver);
    console.log(isGameOver);
}

//Initial load of scoreboard and message to press key coming from initial HTML

document.onkeyup = function initialize() {

    puzzle_div.innerHTML = secret.join(" ");
    lives_span.innerHTML = strikes;
    wins_p.innerHTML = wins;
    instructions_span.innerHTML = "Please Select A Letter";
    availLetters_span.innerHTML = available.join(" ");
    pickedLtrs_span.innerHTML = pickedLtrs.join(" ");
    play();
};

// Reset function to be called later after game ends

function reset() {
    word = puzzles[Math.floor(Math.random() * puzzles.length)];
    console.log(word);
    strikes = 8;
    secret = [];
    console.log(secret);
    available = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    pickedLtrs = [];

    for (j = 0; j < word.length; j++) {
        secret.push("_ ");
    }
    console.log(j);

    puzzle_div.innerHTML = secret.join(" ");
    lives_span.innerHTML = strikes;
    instructions_span.innerHTML = "Please Select A Letter";
    availLetters_span.innerHTML = available.join(" ");
    pickedLtrs_span.innerHTML = pickedLtrs.join(" ");
    play();
}

// //Function for building Picked Letters field
// function guessedLtrs() {
//     if ( userGuess == pickedLtrs.indexOf() ){
//         alert("Please Pick a Letter"); 
//     } else {
//         pickedLtrs.push(userGuess);
//     }    
// }

//Main Play Sequence

function play() {

    //keyup listener to get letter and convert to uppercase for user error
    document.onkeyup = function () {
        let userGuess = String.fromCharCode(event.keyCode).toUpperCase();
        console.log(userGuess);
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

        if (word.indexOf(userGuess) < 0) {
            strikes--;
            lives_span.innerHTML = strikes;
            if (strikes == 0) {
                instructions_span.innerHTML = "YOU LOSE! PLAY AGAIN?";
                let playAgain = confirm("YOU LOSE. The Answer was " + word + "\n Do you want to play again?");
                if (playAgain == true) {
                    reset();
                } else {
                    alert("No problem. Have a nice day!");
                    toggler();
                }
            }
        }
        // If the letter exists in the word, add it to the good guesses array. If no more _ in array, you win.
        else {
            for (i = 0; i < word.length; i++) {
                // Each time the guess letter is found, add it as a good guess in the same spot
                if (word[i] === userGuess) {
                    secret[i] = userGuess;
                    console.log(secret);
                    puzzle_div.innerHTML = secret.join("");
                    

                    if (secret.indexOf("_ ") == -1) {
                        wins++;
                        wins_p.innerHTML = wins;
                        let playAgain = confirm("YOU WIN. The Answer was " + word + "\n Do you want to play again?");
                        if (playAgain == true) {
                            reset();
                        } else {
                            alert("No problem. Have a nice day!");
                            toggler();
                        }
                    }

                }

            }
        }
    }
}


console.log(isGameOver);
//Joe's Thought - the game is over "flag". Let Game Over = False. Game over flips to True on end.
//run a function in the code if statement. Restarta dn set flag back 


// // Other keys do nothing. Repeat key pushes of the same letter do nothing (don't count as strikes)

