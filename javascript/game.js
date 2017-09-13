// Declaring alphabet array that will be used to generate random computer key
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Declaring variables
var wins = 0;
var losses = 0;
var guesses = 9;
var numGuesses = 9;
var keyHistory = [];
var computerKey = null;


// Generates a new random key from the alphabet for the user to guess
var newComputerKey = function() {
  this.computerKey = this.alphabet[Math.floor(Math.random() * this.alphabet.length)];
  // For testing and debugging
  console.log(this.computerKey);
};

// Resets variables after each round
var reset = function() {
  numGuesses = 9;
  keyHistory = [];

  newComputerKey();
  document.querySelector('#numGuesses').innerHTML = "Guesses left: " + numGuesses;
  document.querySelector('#guesses').innerHTML = "Your Guesses so far: " + keyHistory.join(', ');
}

// Generate initial newComputerKey and update guesses left
newComputerKey();
document.querySelector('#numGuesses').innerHTML = "Guesses left: " + numGuesses;

// Activates when key is pressed
document.onkeyup = function(event) {
	// Decrements numGuesses
	numGuesses -= 1;
	// Extracts character typed on keyboard by user
  	var key = String.fromCharCode(event.keyCode).toLowerCase();

  	// Adds key to keyHistory and updates guesses and guesses left
  	keyHistory.push(key);
  	document.querySelector('#numGuesses').innerHTML = "Guesses left: " + numGuesses;
  	document.querySelector('#guesses').innerHTML = "Your Guesses so far: " + keyHistory.join(', ');

  	if (numGuesses > 0){
        if (key == computerKey){
	        // Increment and upadate wins, then reset
	        wins += 1;
	        document.querySelector('#wins').innerHTML = "Wins: " + wins;
	        reset();
        }
    }else if(numGuesses == 0){
        // Increment and update losses, then reset 
        losses += 1;
        document.querySelector('#losses').innerHTML = "Losses: " + losses;
        reset();
    }
};









