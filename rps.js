// Function to get Computer's choice
function getComputerChoice(){
    let computerChoice = ""; // Initiate variable to store choice
    let randomNum = Math.floor(Math.random() * 3) // Generates whole random number between 0 and 2 inclusive 
    
    // Select Rock, Paper or Scissor based on random number generated in the previous step
    if (randomNum === 0){
        computerChoice = "rock";
    }
    else if (randomNum === 1){
        computerChoice = "paper";
    }
    else{
        computerChoice = "scissors"
    }

    return computerChoice;
}

// Function to get Human's choice
function getHumanChoice(){
    // Initiate important variables
    let humanChoice = "";
    let userInput = "";
    let isInputValid = false;
    
    userInput = prompt("Enter your choice: rock, paper or scissors") // Prompts user for input

    // Abort if user hits cancel
    if (userInput === null){
        return
    }

    // Trim white space at the front or back of the input text if any
    userInput = userInput.trim();

    // Convert all input to lower case
    userInput = userInput.toLowerCase();
    
    // Check if input is valid
    if ((userInput === "rock") || (userInput === "paper") || (userInput === "scissors")){
        isInputValid = true; // Sets boolean to true
    }

    // Keep prompting if input is not valid
    while(isInputValid === false){
        userInput = prompt(`Invalid input: You entered "${userInput}". Please enter either rock, paper or scissors exactly without extra spaces, quotes or spelling errors`)
        
        // Abort if user hits cancel
        if (userInput == null){
            return
        }

        // Trim white space at the front or back of the input text if any
        userInput = userInput.trim();
        // Convert all input to lower case
        userInput = userInput.toLowerCase();

        // Check if input is valid
        if ((userInput === "rock") || (userInput === "paper") || (userInput === "scissors")){
            isInputValid = true; // Sets boolean to true
        } 
    }
    humanChoice = userInput; // Store validated input in variable to return
    return humanChoice    
}


// Declare global variables to store Computer and Human scores
let computerScore = 0;
let humanScore = 0;



// Play a game with five rounds and declare winner in the end
function playGame(){
    // Function to play one round
    function playRound(humanChoice, computerChoice){
        // Abort if user hits cancel
        if (humanChoice == null){
            console.log("User aborted");
            return
        }

        // Initialize important variable
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
        }
    }
    // Declare important variables
    let roundCount = 0; // Counter to track # of rounds

    // Play a round needs to be called until round counter reaches 5
    while (roundCount < 5){
        // Call playRound and store returned boolean in a variable
        const isATie = playRound(getHumanChoice(),getComputerChoice());
        // End game if user hits cancel on a prompt
        if (isATie == null){
            return
        }
        // Increment roundCount only if it is not a tie
        if (!isATie){
            roundCount += 1;
        }
    }

    // Log the end of game
    console.log("\n\nGame Over")

    // Declare the winner
    if (humanScore > computerScore){
        console.log("Yay, you won!")
    }
    else {
        console.log("Alas, the computer has won.")
    }
    // Show scores
    console.log(`You: ${humanScore} | Computer: ${computerScore}`);
}

playGame();