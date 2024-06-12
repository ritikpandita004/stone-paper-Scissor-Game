let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice")
const msg= document.querySelector("#msg")
const userscoreCard=document.querySelector("#user-score")
const CompscoreCard=document.querySelector("#comp-score")



const generateComputerChoice=()=>{
    const options =["Rock", "Paper", "Scissor"]
    const randomIndex=Math.floor(Math.random()*3);
    return options[randomIndex];
}


const drawgame=(userChoice,compChoice)=>{
console.log("the game is draw");
msg.innerHTML = "Game is draw.Play again!";
msg.style.backgroundColor="orange";

}
const userWin=(userChoice,compChoice)=>{
console.log("userWin");
msg.innerHTML = `You Win! ${userChoice} beats ${compChoice}`;
msg.style.backgroundColor="green";
userScore++;
userscoreCard.innerHTML=userScore;
}

const compWin=(userChoice,compChoice)=>{
    msg.innerHTML = `You loose!  ${compChoice} beats ${userChoice}  `;
    msg.style.backgroundColor="red";
    compScore++;
    CompscoreCard.innerHTML=compScore;
console.log("compWin");
}


const playGame=(userChoice)=>{
    console.log("userChoice =", userChoice);
    //generate compiuter choice
    const compChoice=generateComputerChoice();
    console.log("compChoice =", compChoice);

    if (userChoice===compChoice)
        {
            drawgame(userChoice,compChoice);
        }
        else if (userChoice==="Rock" && compChoice==="Scissor" || userChoice==="Paper" && compChoice==="Rock" || userChoice==="Scissor" && compChoice==="Paper"){
            userWin(userChoice,compChoice);
        }
        else{
            compWin(userChoice,compChoice);
        }

}
choices.forEach((choice) => {
    console.log (choice);
    choice.addEventListener("click", () =>{
    const userChoice=choice.getAttribute("id")
    playGame(userChoice)
   }); 
});