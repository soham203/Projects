let userScore = 1;
let comScore = 1;

const optionsClick = document.querySelectorAll(".option");
const msgPara = document.querySelector("#msg");
const user_Score = document.querySelector("#user-score");
const com_Score = document.querySelector("#com-score");

const genComChoice = () => {
      const options = ["rock", "paper", "scissors"];
      const ranIndx = Math.floor(Math.random() * 3);
      return options[ranIndx];
}

const drawGame = (userOption) => {
    msgPara.innerText = `Game is draw both you and computer choose ${userOption}, Play again!!`;
    msgPara.style.backgroundColor = "#081b31"
}

const showWiner = (userWin, userOption, comChoice) => {
    if (userWin) {
       msgPara.innerText = `You Win! Your ${userOption} beat computer's ${comChoice}`;
       msgPara.style.backgroundColor = "green";
       user_Score.innerText = userScore++;

    }
    else {
        msgPara.innerText = `Computer Win! Computer's ${comChoice} beats your ${userOption}`;
        msgPara.style.backgroundColor = "red";
        com_Score.innerText = comScore++;
    }
}

const playGame = (userOption) => {
       const comChoice = genComChoice();
       if (userOption === comChoice) {
             drawGame(userOption);
       }
       else {
        let userWin = true;
        if (userOption === "rock") {
            userWin =  comChoice === "paper" ? false : true;
        }
        else if (userOption === "paper") {
            userWin = comChoice === "scissors" ? false : true;
        }
        else {
            userWin = comChoice === "rock" ? false : true;
        }
        showWiner(userWin, userOption, comChoice);
       }
}

optionsClick.forEach((option) => {
    option.addEventListener("click", () => {
        const userOption = option.getAttribute("id");
        playGame(userOption);
    })
});