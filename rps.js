// Declare global variables
let computerScore = 0;
let humanScore = 0;

// Show round status in the status container
const roundStatus = document.querySelector(".round-status > p");

function getComputerChoice(){
    let computerChoice = "";
    let randomNum = Math.floor(Math.random() * 3); // Generates whole random number between 0 and 2 inclusive 
    
    // Select Rock, Paper or Scissor based on random number generated in the previous step
    if (randomNum === 0){
        computerChoice = "rock";
    }
    else if (randomNum === 1){
        computerChoice = "paper";
    }
    else{
        computerChoice = "scissors";
    };

    return computerChoice;
};

function playRound(humanChoice, computerChoice){
    // Abort if user hits cancel
    if (humanChoice == null){
        console.log("User aborted");
        return;
    };

    let isATie = false;

    // Compare human choice to computer choice to determine winner, log a useful message and increment corresponding winner's score. Return isAtie as true if round is a tie.
    if ((humanChoice === "rock") && (computerChoice === "scissors")){
        roundStatus.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore += 1;
        return isATie;
    }
    else if ((humanChoice === "rock") && (computerChoice === "paper")){
        roundStatus.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore += 1;
        return isATie;
    }
    else if ((humanChoice === "paper") && (computerChoice === "rock")){
        roundStatus.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore += 1;
        return isATie;
    }
    else if ((humanChoice === "paper") && (computerChoice === "scissors")){
        roundStatus.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore += 1;
        return isATie;
    }
    else if ((humanChoice === "scissors") && (computerChoice === "paper")){
        roundStatus.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore += 1;
        return isATie;
    }
    else if ((humanChoice === "scissors") && (computerChoice === "rock")){
        roundStatus.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore += 1;
        return isATie;
    }
    else{
        isATie = true;
        roundStatus.textContent = `Both players chose ${humanChoice}.`;
        return isATie;
    };
};


// Add event listener to the RPS buttons to capture human choice and pass to playRound()
const buttonsDiv = document.querySelector(".human-choice-buttons");

buttonsDiv.addEventListener('click', function(event){
    const target = event.target;
    const humanChoice = target.className;
    // Only call playRound if user clicks one of the buttons and not anywhere around / outside it
    if (humanChoice !== buttonsDiv.className){
        playRound(humanChoice,getComputerChoice());
    };
    // Display updates to the score board
    const computerScoreElement = document.querySelector(".computer-score");
    const humanScoreElement = document.querySelector(".human-score");
    computerScoreElement.textContent = computerScore;
    humanScoreElement.textContent = humanScore;

    // Reset the game if any one of the players reaches 3 points first.
    if (computerScore === 3 || humanScore === 3){
        if (computerScore > humanScore){
            roundStatus.textContent = 'Game Over, you lost 😭. Make a choice to start a new game.';
        }
        else {
            roundStatus.textContent = 'Game Over, you won! 🎉. Make a choice to start a new game.';
        };
        computerScore = 0;
        humanScore = 0; 
    };
});