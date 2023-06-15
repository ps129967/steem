const result = document.getElementById("result");
const rock = document.getElementById("steen");
const paper = document.getElementById("papier");
const scissors = document.getElementById("schaar");
const reset = document.getElementById("reset");

function convertToWord(word) {
    if (word === "steen") return "Steen";
    if (word === "papier") return "Papier";
    if (word === "schaar") return "Schaar";
}

function getComputerChoice() {
    const choices = ['steen', 'papier', 'schaar'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    result.innerHTML = convertToWord(userChoice) + " slaat " + convertToWord(computerChoice) + ". Jij wint!";
// THE ES6 WAY
//result.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`;
}

function lose(userChoice, computerChoice) {
    result.innerHTML = convertToWord(userChoice) + " slaat " + convertToWord(computerChoice) + "... Jij verliest.";
}

function tie(userChoice, computerChoice) {
    result.innerHTML = convertToWord(userChoice) + " banden " + convertToWord(computerChoice) + ". Het is een tekening.";
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "stenenschaar":
        case "papiersteen":
        case "schaarpapier":
            win(userChoice, computerChoice);
            break;
        case "steenpapier":
        case "papierschaar":
        case "schaarsteen":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "papierpapier":
        case "schaar schaar":
            tie(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock.addEventListener("click", function () {
        game("steen");
    })

    paper.addEventListener("click", function () {
        game("papier");
    })

    scissors.addEventListener("click", function () {
        game("schaar");
    })

    reset.addEventListener("click", function () {
        window.location.reload();
    })
}

main();