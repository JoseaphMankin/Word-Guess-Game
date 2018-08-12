// Player Instructions on how to begin. Wins start at zero. Guesses start at 8
let wins = 0;
let guesses = 8;

// Computer picks a random word, puts that word in an array. & splits them apart

let word =["Dracula", "Mummy", "Wolfman", "Frankenstein",];
let randChoice = word[Math.floor(Math.random() * word.length)];

    console.log(randChoice); 

let wordLength = randChoice.length;
console.log(wordLength);

let display = [wordLength];
console.log=(display);

let win = wordLength;
let letters = randChoice.split('')

let attemptsLeft = 8
let output="";
let userLetter="";

let setup = function(){
    for (let i=0; i < randChoice.length; i++){
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("puzzleDiv").innerHTML = output; 
    output ="";
}

window.onload = function(){
    setup();
}


//Player presses Start button and puzzle loads and scoreboards are set

function start() {

    document.getElementById("lives").innerHTML = guesses;
  
    document.getElementById("wins").innerHTML = wins;
  }

// Player chooses a letter (from keyboard, but possibly from clicking buttons)

document.onkeyup = function() {
    let userguess = String.fromCharCode(event.keyCode).toUpperCase();
}



// Player selection either causes puzzle letters to reveal, or causes guesses to increment down

// Other keys do nothing. Repeat key pushes of the same letter do nothing (don't count as strikes)

//Win-Loss conditions. If all letters revealed, show a "YOU WIN". Wins bumps by one. If guesses hits Zero, "YOU LOSE"

//Option to play again, staring over, Resetting Guesses to 8, but leaving wins alone.

