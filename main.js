const playerbtns = document.querySelectorAll('.rps-option');
let resultDisplay = document.querySelector('#score-title');
let plrScoreDisplay = document.querySelector('#player-score');
let cpuScoreDisplay = document.querySelector('#cpu-score');
let popup = document.querySelector('.round-end-popup');
let popupbtn = document.querySelector('#popup-choice-button');
let popuptxt = document.querySelector('#popup-participant-text');
let playerScore = 0;
let cpuScore = 0;


function callpopup() {
    popup.setAttribute("id", "popup-active")
    popupbtn.addEventListener('click', (e) => {
        popup.removeAttribute("id");
        playerScore = 0;
        cpuScore = 0;
        plrScoreDisplay.innerHTML = `Player: ${playerScore}`;
        cpuScoreDisplay.innerHTML = `Computer: ${cpuScore}`;
    })
}
function roundCheck(result) {
    switch (result) {
        case "tie":
            resultDisplay.innerHTML = "It's a tie!"
        break;

        case "win":
            resultDisplay.innerHTML = "You win!"
            playerScore = playerScore + 1;
            plrScoreDisplay.innerHTML = `Player: ${playerScore}`;
        break;

        case "loss":
            resultDisplay.innerHTML = "You lose!"
            cpuScore = cpuScore + 1;
            cpuScoreDisplay.innerHTML = `Computer: ${cpuScore}`;
        break;
    
        default:
            break;
    }

    if(cpuScore === 5)
    {
        popuptxt.innerHTML = "You lost :(."
        callpopup();

    }
    else if(playerScore === 5)
    {
        popuptxt.innerHTML = "You won :)!";
        callpopup();
    }
}

function playRound(player, cpu) {
    let roundBool = undefined;
    if(player === "rock")
    {
        switch (cpu) {
            case "rock":
                roundCheck("tie");
                break;

            case "paper":
                roundCheck("loss");
                break;

            case "scissors":
                roundCheck("win");
                break;
            
            
            default:
                break;
        }
    }
    else if(player === "paper")
    {
        switch (cpu) {
            case "rock":
                roundCheck("win");
                break;

            case "paper":
                roundCheck("tie");
                break;

            case "scissors":
                roundCheck("loss");
                break;
            
            
            default:
                break;
        }
    }
    else if(player === "scissors")
    {
        switch (cpu) {
            case "rock":
                roundCheck("loss");
                break;

            case "paper":
                roundCheck("win");
                break;

            case "scissors":
                roundCheck("tie");
                break;
            
            
            default:
                break;
        }
    }
}
playerbtns.forEach(button => {
    button.addEventListener('click', (e) => {
        let cpuOptions = ["rock","paper","scissors"];
        let playerVal = undefined;
        let cpuVal = cpuOptions[Math.floor(Math.random() * cpuOptions.length)];
        let list = Object.values(e.target.classList);
        if(list.includes("far")) {
            if( list[1].includes("paper") )
            {
                playerVal = "paper";
            }
            else if(list[1].includes("rock"))
            {
                playerVal = "rock";

            }
            else if(list[1].includes("scissors"))
            {
                playerVal = "scissors";

            }
        }

        playRound(playerVal, cpuVal);

    })
})
