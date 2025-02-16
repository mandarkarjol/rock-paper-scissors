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

function getHumanChoice(){
    let humanChoice = "";
    let userInput = "";
    let isInputValid = false;
    
    userInput = prompt("Enter your choice: rock, paper or scissors");

    // Abort if user hits cancel
    if (userInput === null){
        return;
    };

    // Clean up user input
    userInput = userInput.trim();
    userInput = userInput.toLowerCase();
    
    // Check if input is valid
    if ((userInput === "rock") || (userInput === "paper") || (userInput === "scissors")){
        isInputValid = true;
    };

    // Keep prompting if input is not valid
    while(isInputValid === false){
        userInput = prompt(`Invalid input: You entered "${userInput}". Please enter either rock, paper or scissors exactly without extra spaces, quotes or spelling errors`);
        
        // Abort if user hits cancel
        if (userInput == null){
            return;
        };

        // Clean up user input
        userInput = userInput.trim();
        userInput = userInput.toLowerCase();

        // Check if input is valid
        if ((userInput === "rock") || (userInput === "paper") || (userInput === "scissors")){
            isInputValid = true;
        }; 
    };
    humanChoice = userInput;
    return humanChoice;    
};


// Declare global variables
let computerScore = 0;
let humanScore = 0;



// Play a game with max. five rounds and declare winner in the end
function playGame(){
    function playRound(humanChoice, computerChoice){
        // Abort if user hits cancel
        if (humanChoice == null){
            console.log("User aborted");
            return;
        };

        let isATie = false;

        // Compare human choice to computer choice to determine winner, log a useful message and increment corresponding winner's score. Return isAtie as true if round is a tie.
        if ((humanChoice === "rock") && (computerChoice === "scissors")){
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
            humanScore += 1;
            return isATie;
        }
        else if ((humanChoice === "rock") && (computerChoice === "paper")){
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
            computerScore += 1;
            return isATie;
        }
        else if ((humanChoice === "paper") && (computerChoice === "rock")){
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
            humanScore += 1;
            return isATie;
        }
        else if ((humanChoice === "paper") && (computerChoice === "scissors")){
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
            computerScore += 1;
            return isATie;
        }
        else if ((humanChoice === "scissors") && (computerChoice === "paper")){
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
            humanScore += 1;
            return isATie;
        }
        else if ((humanChoice === "scissors") && (computerChoice === "rock")){
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
            computerScore += 1;
            return isATie;
        }
        else{
            isATie = true;
            console.log(`Both players chose ${humanChoice}.`)
            return isATie;
        };
    };
    let roundCount = 0;

    // Play a round needs to be called until round counter reaches 5 or either player reaches 3 wins
    while (roundCount < 5){
        const isATie = playRound(getHumanChoice(),getComputerChoice());
        // End game if user hits cancel on a prompt
        if (isATie == null){
            return
        };
        if (!isATie){
            roundCount += 1;
        };
        if (humanScore === 3 || computerScore === 3){
            break;
        };
    };

    // Log the end of game
    console.log("\n\nGame Over")

    // Declare the winner
    if (humanScore > computerScore){
        console.log("Yay, you won!")
    }
    else {
        console.log("Alas, the computer has won.")
    };
    // Show scores
    console.log(`You: ${humanScore} | Computer: ${computerScore}`);
};

playGame();