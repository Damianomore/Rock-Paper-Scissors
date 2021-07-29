const playerbtns = document.querySelectorAll('.rps-option');
const playerScore = 0;
const cpuScore = 0;

playerbtns.forEach(button => {
    button.addEventListener('click', (e) => {
        let cpuOptions = ["rock","paper","scissors"];
        let playerVal = undefined;
        let cpuVal = cpuOptions[Math.floor(Math.random() * cpuOptions.length)];
        console.log(cpuVal);
        let list = Object.values(e.target.classList);
        if(list.includes("far")) {
            if( list[1].includes("paper") )
            {
                playerVal = "paper";
                console.log(playerVal);
            }
            else if(list[1].includes("rock"))
            {
                playerVal = "rock";
                console.log(playerVal);

            }
            else if(list[1].includes("scissors"))
            {
                playerVal = "scissors";
                console.log(playerVal);

            }
        }
        else {

        }
    })
})