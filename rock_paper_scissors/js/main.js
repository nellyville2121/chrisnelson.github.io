// Create a variable humanScore. Give it a value of the number 0.
   var humanScore = 0;
// Create a variable computerScore. Give it a value of the number 0.
   var computerScore = 0;

// Create a function play. It should accept two parameters: humanPlay and computerPlay.
// Write all the code below INSIDE the function curly braces!!
   function play(humanPlay, computerPlay){
     console.log("You played rock. The bot played scissors")
   }
   play();
  // Log "You played {humanPlay}. The bot played {computerPlay}" to the console.
  // For example: "You played rock. The bot played scissors."

  // If the human play is equal to the computer play
    // Log "You tied. :|" to the console.

    function play(humanPlay, computerPlay){
      console.log("You tied")
    }
    play();
  // Else if the humanPlay is 'paper' and the computerPlay is 'rock' OR
  // humanPlay is 'rock' and the computerPlay is 'scissors' OR
  // humanPlay is 'scissors' and the computerPlay is 'paper'
    // Log "You win! :)" to the console

    function play(humanPlay, computerPlay){
      console.log("You win!")
    }
    play();
    // Add one to the humanScore variable (be sure to use += )
  // Otherwise log "You lose! :(" to the console
    // Add one to the computerScore variable (be sure to use += )

    function play(humanPlay, computerPlay){
      console.log("You lose!")
    }
    play();
  // Log "You have {humanScore} points" to the console
  // For example: "You have 0 points"
  // Log "The bot has {computerScore} points" to the console.
  // For example: "The bot has 3 points"

  function play(humanScore){
    console.log("You have 0 points")
}


// END OF FUNCTION (Place the closing curly brace here!)

// After defining the function, call the function 5 - 6 times,
// Providing a different play for the computer and human each time.
// Hint: You'll need to use two arguments
// each time you call the play function.

var userChoice = prompt("Choose rock, paper or scissors!");
var computerChoice = Math.random();

if (computerChoice < 0.33){
    computerChoice = "rock";
}

else if (computerChoice <= 0.67){
    computerChoice = "paper";
}

else {
    computerChoice = "scissors";
} console.log("Computer;  " + computerChoice)

var compare = function(choice1, choice2){
if (choice1 === choice2){
    return "The result is a tie!";
  }


else if(choice1 === "rock"){
    if (choice2 === "scissors"){
        return "rock wins";
    }

        else {
        return "paper wins";
    }


else if (choice2 === "paper"){
    if (choice2 === "rock"){
        return "paper wins";
    }

        else {
        return "scissors wins";
    }


if (choice1 === "scissors")
    if (choice2 === "rock"){
        return "rock wins";
    } else
        if (choice2 === "paper"){
            return "scissors wins";
        }
  }
}


compare(userChoice1 computerChoice);


// BONUS:
// Create a "best of 3" version

// SUPER CHALLENGE:
// Google and implement a random choice for the computer each time.
