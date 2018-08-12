// Index of puzzles, with the randomizer picking one. 
let puzzles = ["DRACULA", "MUMMY", "WOLFMAN", "FRANKENSTEIN",];
let word = puzzles[Math.floor(Math.random() * puzzles.length)];

// An Array to hold the puzzle blanks/letters
let secret = [];
// A varible to count the guesses
let strikes = 8;

// Taking the length of the secret word, and pushing placeholder _'s it into the secret array
for (i = 0; i < word.length; i++) {
    secret.push("_");
}

console.log(secret);


//keyup listener to get letter and convert to uppercase

document.onkeyup = function () {
    let userGuess = String.fromCharCode(event.keyCode).toUpperCase();
    console.log(userGuess);

    //if the Guessed letter isn't an index of word, remove from the strike pool

    if (word.indexOf(userGuess) < 0) {
        strikes--;
        console.log("Strike!");
        console.log(strikes);
        if (strikes == 0) {
            alert("Sorry, please play again!");
        }
    }
    // If the letter exists in the word, we need to add it to the good guesses array
    else {
        for (i = 0; i < word.length; i++) {
            // Each time the guess letter is found, we add it as a good guess in the same spot
            if (word[i] === userGuess) {
                secret[i] = userGuess;
                console.log(secret);
                if (secret.indexOf("_") <= 0) {
                    alert("Congratulations on your win!");
                    alert("The secret word was " + word);
                }

            }
        }
    }
}

    // while (strikes < 3 && secret.indexOf("_") >= 0) {
        // } else {
        // alert("Congratulations on your win!");
        // }
        // alert("The secret word was " + word);

// document.getElementById("puzzleDiv").innerHTML = secret; 



// // Defining it as an array anways.
// let wins = 0;
// let guesses = 8;
// let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
// "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// let guessedLtrs = [];

// // Computer picks a random word, puts that word in an array. & splits them apart

// let word =["Dracula", "Mummy", "Wolfman", "Frankenstein",];
// let randChoice = word[Math.floor(Math.random() * word.length)];

//     console.log(randChoice); 

// let wordLength = randChoice.length;
// console.log(wordLength);

// let display = [wordLength];
// console.log=(display);

// let win = wordLength;
// let letters = randChoice.split('');

// let output = "";
// let userLetter = "";

// // Player chooses a letter (from keyboard, but possibly from clicking buttons)


// document.onkeyup = function() {
//     let userGuess = String.fromCharCode(event.keyCode).toUpperCase();

//     // console.log(userGuess);

//     if (userGuess == "A"){

//     }

// }


// // Setup of parameters on initial load

//     // let setup = function(){
//     // }

//     // window.onload = function(){
//     //     setup();
//     // }


// //Player presses Start button and puzzle loads and scoreboards are set

// function start() {

//     for (let i=0; i < randChoice.length; i++){
//         display[i] = "_ ";
//         output = output + display[i];
//     }
//     document.getElementById("puzzleDiv").innerHTML = output; 
//     output ="";

//     document.getElementById("lives").innerHTML = guesses;

//     document.getElementById("wins").innerHTML = wins;

//     document.getElementById("instructions").innerHTML = "Please Select A Letter";

//     document.getElementById("availLetters").innerHTML = alphabet;
//   }


// // Player selection either causes puzzle letters to reveal, or causes guesses to increment down

// // Other keys do nothing. Repeat key pushes of the same letter do nothing (don't count as strikes)

// //Win-Loss conditions. If all letters revealed, show a "YOU WIN". Wins bumps by one. If guesses hits Zero, "YOU LOSE"

// //Option to play again, staring over, Resetting Guesses to 8, but leaving wins alone.

