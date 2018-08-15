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

//Flag Variable to give the game a "state", for recursion.
//Thanks for the heads up on this, Joe!
let isGameOver = false;
console.log(isGameOver);

// Taking the length of the secret word, and pushing placeholder _'s it into the secret array
for (i = 0; i < word.length; i++) {
    secret.push("_ ");
}
console.log(secret);

//Initial load of scoreboard and message to press key coming from initial HTML

document.onkeypress = function initialize() {

    document.querySelector(".puzzleDiv").innerHTML = secret.join("");
    document.querySelector(".lives").innerHTML = strikes;
    document.querySelector(".wins").innerHTML = wins;
    document.querySelector(".instructions").innerHTML = "Please Select A Letter";
    document.querySelector(".availLetters").innerHTML = available.join(" ");
    document.querySelector(".pickedLtrs").innerHTML = pickedLtrs.join(" ");
};

// Reset function to be called after game ends

function reset(){
    let strikes = 8;
    let secret = [];
    let available = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let pickedLtrs = [];
    
    for (i = 0; i < word.length; i++) {
        secret.push("_ ");
    }
    document.querySelector(".puzzleDiv").innerHTML = secret.join("");
    document.querySelector(".lives").innerHTML = strikes;
    document.querySelector(".instructions").innerHTML = "Please Select A Letter";
    document.querySelector(".availLetters").innerHTML = available.join(" ");
    document.querySelector(".pickedLtrs").innerHTML = pickedLtrs.join(" ");

}

    if (isGameOver == false) {

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
                document.querySelector(".availLetters").innerHTML = available.join(" ");
                document.querySelector(".pickedLtrs").innerHTML = pickedLtrs.join(" ");  
            } 

            //if the Guessed letter isn't an index of word, remove 1 from the strike pool. If hits Zero, you lose

            if (word.indexOf(userGuess) < 0) {
                strikes--;
                console.log("Strike!");
                console.log(strikes);
                document.querySelector(".lives").innerHTML = strikes;
                if (strikes == 0) {
                    document.querySelector(".instructions").innerHTML = "YOU LOSE! PLAY AGAIN?";
                    let isGameOver = true;
                    console.log(isGameOver);
                }
            }
            // If the letter exists in the word, add it to the good guesses array. If no more _ in array, you win.
            else {
                for (i = 0; i < word.length; i++) {
                    // Each time the guess letter is found, add it as a good guess in the same spot
                    if (word[i] === userGuess) {
                        secret[i] = userGuess;
                        console.log(secret);
                        document.querySelector(".puzzleDiv").innerHTML = secret.join("");

                        if (secret.indexOf("_ ") === -1) {
                            wins++;
                            document.querySelector(".wins").innerHTML = wins;
                            let playAgain = confirm("The Answer was " + word + "\n Do you want to play again?");
                            if (playAgain == true){
                                let isGameOver = false;
                                reset();
                            } else{
                                alert("No problem. Have a nice day!");
                            }
                            }   
                            
                            console.log(isGameOver);
                            //the game is over "flag". Let Game Over = False. Game over flips to True on end.
                            //run a function in the code if statement. Restarta dn set flag back 
                        }
                        // if (isGameOver == True){
                        //     alert("Game Over!");
                        
                        // }

                    }
                }
            }
        } else {
            alert("We done")
        }


   


// document.querySelector("puzzleDiv").innerHTML = secret; 





// // Other keys do nothing. Repeat key pushes of the same letter do nothing (don't count as strikes)

