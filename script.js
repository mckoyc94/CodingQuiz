// Variables Section
var quizSection = document.querySelector("main")
var currentQuestionNumber = document.querySelector("h1")
var currentQuestion = document.querySelector("p")
var startButton = document.getElementById("start")
var timerEl = document.getElementById("countDown")
var questNum = 1

// Timer
function startTimer(){
    var timer = 5;

    var timeInterval = setInterval(function() {
        timerEl.textContent = timer + " seconds remaining";
        timer--;
    
        if (timer === 0 || questNum === 6) {
          highScoreScreen()
        }
    
      }, 1000);

}

// Start Quiz

startButton.addEventListener("click", function(){
    startButton.remove()
    nextQuestion()
    startTimer()
})

// Quiz Questions
function nextQuestion(){

    currentQuestionNumber.textContent = "Question #" + questNum;
    currentQuestion.textContent = " ";
    
    

}



// High Score
function highScoreScreen(){
    timerEl.textContent = "";
    clearInterval(timeInterval);
    currentQuestionNumber.textContent = "All done!"
    currentQuestion.textContent= "Nice Job! Enter your initials"
          
    var textForm = document.createElement("input")
    textForm.setAttribute("type", "text")
    document.body.append(textForm)

    
}