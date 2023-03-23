const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];

const form = document.querySelector("form");
const inputs = form.querySelectorAll("input");
const radioButton = document.querySelector(".container")
const displayScore = document.querySelector("#score");
let addScore = 0;

form.addEventListener("submit", handleForm);


function handleForm(e) {
    e.preventDefault();

    checkQ1();
    checkQ2();
    checkQ3();
    checkQ4();
    checkQ5();

    scoreCommentary();
    advice();
    displayScore.innerHTML = `Score : <span>${addScore} / 5</span>`;
    addScore = 0;

}
//
inputs.forEach(radioInput => radioInput.addEventListener('input', resetColor))

function resetColor(e) {
    const index = e.target.getAttribute("name").slice(1)  - 1; 
    const radioButtons = document.querySelectorAll(".container")
    
    radioButtons.forEach(radioBut => radioBut.style.background = "white")
}
//
const greenBg = 'linear-gradient(to right, rgb(168, 255, 120), rgb(120, 255, 214)'
const redBg = 'linear-gradient(to right,rgb(245, 86, 123), rgb(253, 103, 76)'

function checkQ1() {
    const bg1 = document.querySelector(".container:nth-child(1)")

    if (inputs[2].checked) {
        addScore++;
        bg1.style.background = greenBg;
    } else {
        bg1.style.background = redBg;
    }
}

function checkQ2() {
    const bg2 = document.querySelector(".container:nth-child(2)")

    if (inputs[3].checked) {
        addScore++;
        bg2.style.background = greenBg;
    } else {
        bg2.style.background = redBg;
    }
}

function checkQ3() {
    const bg3 = document.querySelector(".container:nth-child(3)")

    if (inputs[7].checked) {
        addScore++;
        bg3.style.background = greenBg;
    } else {
        bg3.style.background = redBg;
    }
}

function checkQ4() {
    const bg4 = document.querySelector(".container:nth-child(4)")

    if (inputs[9].checked) {
        addScore++;
        bg4.style.background = greenBg;
    } else {
        bg4.style.background = redBg;
    }
}

function checkQ5() {
    const bg5 = document.querySelector(".container:nth-child(5)")

    if (inputs[14].checked) {
        addScore++;
        bg5.style.background = greenBg;
    } else {
        bg5.style.background = redBg;
    }
}

function scoreCommentary() {
    const comment = document.querySelector("#result");

    if (addScore === 0) {
        comment.textContent = emojis[4] + " Aïe ! Ce n'est pas du tout ça ! "+ emojis[4]
    } else if (addScore === 1) {
        comment.textContent = emojis[4] + " Tu peux largement mieux faire... " + emojis[4]
    } else if (addScore === 2) {
        comment.textContent = emojis[3] + " C'est pas trop mal... " + emojis[3]
    } else if (addScore === 3) {
        comment.textContent = emojis[2] + " Tout juste la moyenne " + emojis[2]
    } else if (addScore === 4) {
        comment.textContent = emojis[1] + " Encore un petit effort ! " + emojis[1]
    } else if (addScore === 5) {
        comment.textContent = emojis[0] + " Parfait ! Tu as une très bonne culture générale ! " + emojis[0]
    }
}

function advice() {
    const adviceCom = document.querySelector("#advice");

    if (addScore === 5) {
        adviceCom.textContent = "Quelle Culture !!"
    } else {
        adviceCom.textContent = "Retentez une autre réponse dans les cases rouges, puis re-validez !"
    }
}