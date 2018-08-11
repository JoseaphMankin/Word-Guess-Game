// Player Instructions on how to begin. Wins start at zero. Guesses start at 8
let Wins = 0;
let Guesses = 8;

// Computer picks a random puzzle & splits them apart

let puzzles =["Dracula", "Mummy", "Wolfman", "Frankenstien",];
let randomPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)];

    console.log(randomPuzzle); 

let splitPuzzle = randomPuzzle.split(""); 

    console.log(splitPuzzle);

//Player presses Start button and puzzle loads

function myFunction() {
    document.getElementById("puzzleDiv").innerHTML = splitPuzzle;
  }

// Player chooses a letter (from keyboard, but possibly from clicking buttons)

document.onkeyup = function() {
    let userguess = String.fromCharCode(event.keyCode).toUpperCase();

    console.log(userguess);
}

// Player selection either causes puzzle letters to reveal, or causes guesses to increment down

// Other keys do nothing. Repeat key pushes of the same letter do nothing (don't count as strikes)

//Win-Loss conditions. If all letters revealed, show a "YOU WIN". Wins bumps by one. If guesses hits Zero, "YOU LOSE"

//Option to play again, staring over, Resetting Guesses to 8, but leaving wins alone.

