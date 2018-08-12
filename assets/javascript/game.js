// Index of puzzles, with the randomizer picking one. 
let puzzles = ["DRACULA", "MUMMY", "WOLFMAN", "FRANKENSTEIN",];
let word = puzzles[Math.floor(Math.random() * puzzles.length)];

// An Array to hold the puzzle blanks/letters and one to hold all the available guesses
let secret = [];
let available =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// A varible to count the guesses and wins
let strikes = 8;
let wins = 0;

// Taking the length of the secret word, and pushing placeholder _'s it into the secret array
for (i = 0; i < word.length; i++) {
    secret.push("_ ");
}

console.log(secret);


//keyup listener to get letter and convert to uppercase for user error

document.onkeyup = function () {
    let userGuess = String.fromCharCode(event.keyCode).toUpperCase();
    console.log(userGuess);
    //removes the key pressed from the available array
    var i = available.indexOf(userGuess);
    if(i != -1) {
        available.splice(i, 1);
    }
    console.log(available);
    document.getElementById("availLetters").innerHTML = available.join(" ");


    //if the Guessed letter isn't an index of word, remove 1 from the strike pool. If hits Zero, you lose

    if (word.indexOf(userGuess) < 0) {
        strikes--;
        console.log("Strike!");
        console.log(strikes);
        document.getElementById("lives").innerHTML = strikes;
        if (strikes == 0) {
            alert("Sorry, please play again!");
        }
    }
    // If the letter exists in the word, add it to the good guesses array. If no more _ in array, you win.
    else {
        for (i = 0; i < word.length; i++) {
            // Each time the guess letter is found, add it as a good guess in the same spot
            if (word[i] === userGuess) {
                secret[i] = userGuess;
                console.log(secret);
                document.getElementById("puzzleDiv").innerHTML = secret.join(""); 
                if (secret.indexOf("_") == 0) {
                    wins++;
                    document.getElementById("wins").innerHTML = wins;
                    console.log("Congratulations on your win!");
                  
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


//Player presses Start button and puzzle loads and scoreboards are set

function start() {

    document.getElementById("puzzleDiv").innerHTML = secret.join("");  

    document.getElementById("lives").innerHTML = strikes;

    document.getElementById("wins").innerHTML = wins;

    document.getElementById("instructions").innerHTML = "Please Select A Letter";

    document.getElementById("availLetters").innerHTML = available.join(" ");
  }


// // Other keys do nothing. Repeat key pushes of the same letter do nothing (don't count as strikes)

// //Option to play again, staring over, Resetting Guesses to 8, but leaving wins alone.

