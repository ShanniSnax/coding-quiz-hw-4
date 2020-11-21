// array of questions

var questionsArray = [
    {
        title: "Who is the only female fighter defend the belt in two different weight classes?",
        choices: ["Amanda Nunes", "Rose Namajunas", "Holly Holm", "Jessica Andrade"],
        answer: "Amanda Nunes"
    },
    {
        title: "What belt was created for a fight between Jorge Masvidal and Nate Diaz?",
        choices: ["BMP", "TKO", "BMF", "ONE"],
        answer: "BMF"
    },
    {
        title: "Who did Daniel Cormier beat in his UFC debut?",
        choices: ["Dan Henderson", "Alexander Gustafsson", "Roy Nelson", "Frank Mir"],
        answer: "Frank Mir"
    },
    {
        title: "What is the shape of a regulation UFC ring?",
        choices: ["Square", "Octogan", "Circle", "Hexagon"],
        answer: "Octogan"
    },
    {
        title: "During Ronda Rousey’s historic 12-fight win streak, who was the only fighter to get past round one?",
        choices: ["Miesha Tate", "Cat Zingano", "Alexis Davis", "Bethe Correia"],
        answer: "Miesha Tate"
    },
    {
        title: "What season of the Ultimate Fighter did Nate Diaz win?",
        choices: ["Season 2", "Season 5", "Season 8", "Season 4"],
        answer: "Season 5"
    },
    {
        title: "Who did Tito fight at UFC 66?",
        choices: ["Ken Shamrock", "Chuck Liddell", "Lyoto Machida", "Forrest Griffin"],
        answer: "Chuck Liddell"
    },
    {
        title: "What fighter is known as The Count?",
        choices: ["Michael Bisping", "Chael Sonnen", "Vitor Belfort", "Thales Leites"],
        answer: "Michael Bisping"
    },
    {
        title: "Jessica Eye was knocked out by a head kick from which of her opponents?",
        choices: ["Cynthia Calvillo", "Julianna Pena", "Sara McMann", "Valentina Shevchenko"],
        answer: "Valentina Shevchenko"
    },
    {
        title: "At what UFC event did 'Big' John McCarthy start as referee?",
        choices: ["UFC 7", "UFC 23", "UFC 2", "UFC 18"],
        answer: "UFC 2"
    },
    {
        title: "Who was the first Polish UFC champion?",
        choices: ["Karolina Kowalkiewicz", "Jan Błachowicz", "Joanna Jędrzejczyk", "Marcin Held"],
        answer: "Joanna Jędrzejczyk"
    },
    {
        title: "Who is the President of the Ultimate Fighting Championship?",
        choices: ["Lorenzo Fertitta", "Dana White", "Sean Shelby", "Art Davie"],
        answer: "Dana White"
    }

]

var introEl = document.getElementById("intro");
var quizEl = document.getElementById("quiz");
var currentQ = 0;
var timerId;

// execute on start button
$("#start-button").on("click", function() {
    // start timer
    introEl.setAttribute("class", "hide");
    // remove intrustions
    quizEl.removeAttribute("class", "hide");
    // set interval countdown for timer
    timerId = setInterval(countDown, 1000);
    // start getting questions
    getQ();

});

// retrieving questions
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

// answer selection and scoring
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

// timer variables
var timer = 100;
var time = document.getElementById("time");

// timer countdown 
function countDown() {
    timer--;
    time.textContent = timer;
}

// game over
function thisistheend() {
    clearInterval(timerId);
    saveScore();
    //end popup
}

// saving score to leaderboard
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
