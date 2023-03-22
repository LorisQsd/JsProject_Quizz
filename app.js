const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];

const form = document.querySelector("form");
const inputs = form.querySelectorAll("input");
const radioButton = document.querySelector("form .container")
const displayScore = document.querySelector("#score");
let addScore = 0;

form.addEventListener("submit", handleForm);
radioButton.addEventListener("click", resetBg);

function handleForm(e) {
    e.preventDefault();
    checkQ1();
    checkQ2();
    checkQ3();
    checkQ4();
    checkQ5();
    console.log(addScore);

    scoreCommentary();
    advice();
    displayScore.innerHTML = `Score : <span>${addScore} / 5</span>`;
    addScore = 0;
}

function resetBg() {
    const bg = document.querySelectorAll(".container");

    console.log(radioButton);
    for (let i = 0; i < bg.length; i++) {
        const str = bg[i].style.background = "white";
        bg[i].style.backgroundColor = str
    }
}

function checkQ1() {
    const bg1 = document.querySelector(".container:nth-child(1)")

    if (inputs[2].checked) {
        addScore++;
        console.log("Q1 : True");
        bg1.style.background = 'linear-gradient(to right, rgb(168, 255, 120), rgb(120, 255, 214)';
    } else {
        console.log("Q1 : False");
        bg1.style.background = 'linear-gradient(to right,rgb(245, 86, 123), rgb(253, 103, 76)';
    }
}

function checkQ2() {
    const bg2 = document.querySelector(".container:nth-child(2)")

    if (inputs[3].checked) {
        addScore++;
        console.log("Q2 : True");
        bg2.style.background = 'linear-gradient(to right, rgb(168, 255, 120), rgb(120, 255, 214)';
    } else {
        console.log("Q2 : False");
        bg2.style.background = 'linear-gradient(to right,rgb(245, 86, 123), rgb(253, 103, 76)';
    }
}

function checkQ3() {
    const bg3 = document.querySelector(".container:nth-child(3)")

    if (inputs[7].checked) {
        addScore++;
        console.log("Q3 : True")
        bg3.style.background = 'linear-gradient(to right, rgb(168, 255, 120), rgb(120, 255, 214)';
    } else {
        console.log("Q3 : False")
        bg3.style.background = 'linear-gradient(to right,rgb(245, 86, 123), rgb(253, 103, 76)';
    }
}

function checkQ4() {
    const bg4 = document.querySelector(".container:nth-child(4)")

    if (inputs[9].checked) {
        addScore++;
        console.log("Q4 : True")
        bg4.style.background = 'linear-gradient(to right, rgb(168, 255, 120), rgb(120, 255, 214)';
    } else {
        console.log("Q4 : False")
        bg4.style.background = 'linear-gradient(to right,rgb(245, 86, 123), rgb(253, 103, 76)';
    }
}

function checkQ5() {
    const bg5 = document.querySelector(".container:nth-child(5)")

    if (inputs[14].checked) {
        addScore++;
        console.log("Q5 : True")
        bg5.style.background = 'linear-gradient(to right, rgb(168, 255, 120), rgb(120, 255, 214)';
    } else {
        console.log("Q5 : False")
        bg5.style.background = 'linear-gradient(to right,rgb(245, 86, 123), rgb(253, 103, 76)';
    }
}

function scoreCommentary() {
    const comment = document.querySelector("#result");

    if (addScore === 0) {
        comment.textContent = emojis[4] + " Gros naze "+ emojis[4]
    } else if (addScore === 1) {
        comment.textContent = emojis[4] + " C'est pas fou " + emojis[4]
    } else if (addScore === 2) {
        comment.textContent = emojis[3] + " C'est pas trop mal " + emojis[3]
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