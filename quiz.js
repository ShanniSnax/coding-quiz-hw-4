

var questionsArray = [
    {
        title: "Who is the only female fighter to wear UFC gold in two different weight classes?",
        choices: ["Amanda Nunes", "Rose Namajunas", "Holly Holm", "Jessica Andrade"],
        answer: "Amanda Nunes"
    },
    {
        title: "hey",
        choices: ["hey", "hey", "hey", "hey"],
        answer: "hey"
    },
    {
        title: "hey",
        choices: ["hey", "hey", "hey", "hey"],
        answer: "hey"
    },
    {
        title: "hey",
        choices: ["hey", "hey", "hey", "hey"],
        answer: "hey"
    },
    {
        title: "hey",
        choices: ["hey", "hey", "hey", "hey"],
        answer: "hey"
    },
    {
        title: "hey",
        choices: ["hey", "hey", "hey", "hey"],
        answer: "hey"
    }
]

var introEl = document.getElementById("intro");
var quizEl = document.getElementById("quiz");
var currentQ = 0;
var timerId;

$("#start-button").on("click", function() {
    // start timer
    // remove intrustions
    introEl.setAttribute("class", "hide");
    quizEl.removeAttribute("class", "hide");
    timerId = setInterval(countDown, 1000);
    getQ();

});

function getQ() {
    var title = document.getElementById("question");
    var choices = document.getElementById("ans-options");
    var questionable = questionsArray[currentQ];
    title.textContent = questionable.title;
    choices.innerHTML = "";
    questionable.choices.forEach(function (choice, i) {
        var multipleC = document.createElement("button");
        multipleC.setAttribute("class", "choice");
        multipleC.setAttribute("value", choice);
        multipleC.textContent = choice;
        multipleC.onclick = solutionClick;
        choices.appendChild(multipleC);
    }
    )
}

var score = 0;
var currentS = document.getElementById("curScore");

function solutionClick () {
    if (this.value===questionsArray[currentQ].answer) {
        score+=50;
        currentS.textContent = score;
    } 
    currentQ++;
        if (currentQ===questionsArray.length) {
            console.log("game over");
            thisistheend ();
        } else {
            getQ();
        }
    console.log("you clicked a button");
}

// timer

var timer = 100;
var time = document.getElementById("time");

function countDown() {
    timer--;
    time.textContent = timer;
}

function thisistheend() {
    clearInterval(timerId);
    saveScore();
    //create end popup
}

function saveScore() {
    var initials = prompt("Type your initials to save your score");   
    if (initials!=="") {
        var highscoresArray = JSON.parse(window.localStorage.getItem("highscores")) || [];
        var highestScore = {
            score: score,
            initials: initials
        }
        highscoresArray.push(highestScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscoresArray));

    }
}
