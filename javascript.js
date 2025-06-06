

// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World 2");


// function handleClick(){
//     alert("Hello World, function");
// }


// const btn2 = document.querySelector("#btn3");

// const btn4 = document.querySelector("#btn4");

// btn4.addEventListener("click", handleClick);

// btn2.addEventListener("click", () => {
//     alert("Hello World 3");
// })

// for (let i = 0; i < 10; i++){
//     console.log(i);
// }

// let fruits = ["apple", "banana", "orange"];

// function toUpper(string){
//     return string.toUpperCase();
// }

// let fruitsUpper = fruits.map(toUpper);


// console.log(fruitsUpper);


// const container = document.querySelector("#container");

// const pContent = document.createElement("p");
// const hBlue = document.createElement("h3");
// const mydiv = document.createElement("div");
// const childp = document.createElement("p");
// const childh = document.createElement("h1");

// childh.textContent = "I'm in a div";
// childp.textContent = "Me Too!";

// mydiv.style.border = "black";
// mydiv.style.background = "pink";

// pContent.textContent = "Hey I'm Red";
// pContent.style.color = "red";
// hBlue.textContent = "Hey I'm a blue h3";
// hBlue.style.color = "blue";

// mydiv.appendChild(childh);
// mydiv.appendChild(childp);

// container.appendChild(pContent);
// container.appendChild(hBlue);
// container.appendChild(mydiv);

let humanScore = 0;
let computerScore = 0;
let humanThrow = "";

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const humanScoreDiv = document.querySelector("#humanScoreID");
const computerScoreDiv = document.querySelector("#computerScoreID");

const humanThrowDiv = document.querySelector("#humanThrow");
const computerThrowDiv = document.querySelector("#computerThrow");


function throwRockPaperScissors(){

    let probability = Math.random();

    if(probability > 0.66){
        return "Scissors";
    } else if(probability > 0.33){
        return "Paper";
    }
    else{
        return "Rock";
    }

}

function playRound(humanThrow){

    let computerThrow = throwRockPaperScissors();
    
    console.log("You Threw: ", humanThrow);
    humanThrowDiv.textContent = `Human Threw : ${humanThrow}`;

    console.log("Computer Threw: ",computerThrow);
    computerThrowDiv.textContent = `Computer Threw : ${computerThrow}`;

    if(humanThrow == computerThrow){
        console.log("draw")
    } else if((humanThrow == "Paper" && computerThrow == "Rock") || (humanThrow == "Scissors" && computerThrow == "Paper") || (humanThrow == "Rock" && computerThrow == "Scissors") ){
        console.log("Human Wins");
        humanScore += 1;
    } else{
        console.log("Computer Wins");
        computerScore += 1;
    }

    console.log(`Human Score : ${humanScore}`);
    console.log(`Computer Score : ${computerScore}`)
    humanScoreDiv.textContent = `Human Score : ${humanScore}`;
    computerScoreDiv.textContent = `Computer Score : ${computerScore}`;

    if (humanScore == 5 || computerScore == 5){
        alert(humanScore == 5 ? "You win!" : "Computer Wins!");
        humanScore = 0;
        computerScore = 0;
        humanScoreDiv.textContent = `Human Score : ${humanScore}`;
        computerScoreDiv.textContent = `Computer Score : ${computerScore}`;
        computerThrowDiv.textContent = `Computer Threw : `;
        humanThrowDiv.textContent = `Human Threw : `;
    }
}



    //let humanThrow = prompt("What do you want to throw");

    //when user selects rock
    rockBtn.addEventListener("click", () => playRound("Rock"));

    //when user selects paper
    paperBtn.addEventListener("click", () => playRound("Paper"));

    //when user selects scissors
    scissorsBtn.addEventListener("click", () => playRound("Scissors"));






