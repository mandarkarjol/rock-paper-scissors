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
    let humanChoice = ""; // Initiate variable to store choice
    let randomNum = Math.floor(Math.random() * 3) // Generates whole random number between 0 and 2 inclusive 
    
    // Select Rock, Paper or Scissor based on random number generated in the previous step
    if (randomNum === 0){
        humanChoice = "rock";
    }
    else if (randomNum === 1){
        humanChoice = "paper";
    }
    else{
        humanChoice = "scissors"
    }
    
    return humanChoice;
}

// Declare variables to store Computer and Human scores


// Define a game's round: Compare Computer's choice with Human's Choice and increment winner's score by 1

// Play a game with five rounds and declare winner in the end

