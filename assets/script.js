
var timer = document.getElementById("countdown");
var startButton = document.querySelector("#button");
var startContainer = document.getElementById("start");
var hiddenQuestion1 = document.getElementById("hidden-question-card1");
var hiddenQuestion2 = document.getElementById("hidden-question-card2");
var hiddenQuestion3 = document.getElementById("hidden-question-card3");
var hiddenQuestion4 = document.getElementById("hidden-question-card4");
var questionElems = [hiddenQuestion1, hiddenQuestion2, hiddenQuestion3, hiddenQuestion4]
var questionIndex = 0;
var quizRunning = false;
var answerbtns = document.querySelectorAll(".answer-btns")

for (let i = 0; i < answerbtns.length; i++) {
    const answerBtn = answerbtns[i];
    answerBtn.addEventListener("click", answerBtnClick);

}
function answerBtnClick(event) {
    console.log("answer button clicked", event.target.textContent);

}

function hidden() {
    hiddenQuestion1.style.display = "none";
    hiddenQuestion2.style.display = "none";
    hiddenQuestion3.style.display = "none";
    hiddenQuestion4.style.display = "none";


}

var questions = [
    {
        question: "What is the language for documents designed to be displayed in a web browser?",
        choices: [
            "A: HTML",
            "B: CSS",
            "C: JavaScript",
            "D: Python"],
        answer: "A: HTML",
    },
    {
        question: "What is the style sheet language used for describing the presentation of a document",
        choices: [
            "A: HTML",
            "B: CSS",
            "C: JavaScript",
            "D: C#"],
        answer: "B: CSS",
    },
    {
        question: "What is the language commonly used to create interactive effects within web browsers?",
        choices: [
            "A: HTML",
            "B: CSS",
            "C: JavaScript",
            "D: HTTP"],
        answer: "C: JavaScript",
    },
    {
        question: "Which is the library designed to simplify HTML DOM tree traversal and manipulation?",
        choices: [
            "A: Public",
            "B: Jquery",
            "C: JSON",
            "D: Java"],
        answer: "B: Jquery",
    },
]


function displayQuestion() {
    var questionOBJ = questions[questionIndex];
    var questionElem = questionElems[questionIndex]
    questionElem.style.display = "block"

};


startButton.addEventListener("click",

    function startQuiz() {

        startContainer.style.visibility = "hidden"
        let timeLeft = 30;

        var timeInterval = setInterval(function () {
            if (timeLeft > 1) {
                timer.textContent = timeLeft + ' seconds remaining';
                timeLeft--;
            } else if (timeLeft === 1) {
                timer.textContent = timeLeft + ' second remaining';
                timeLeft--;
            }
            else {
                timer.textContent = '';
            }
        }, 1000);
        quizRunning = true;
        questionIndex = 0;
        displayQuestion();
    });


hidden();




