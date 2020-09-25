// Variables Section
var quizSection = document.querySelector("main")
var currentQuestion = document.querySelector("h1")
var startButton = document.getElementById("start")
var timerEl = document.getElementById("countDown")


// Start Quiz
    // Click button
startButton.addEventListener("click", function(){
    // Change page elements
    nextQuestion()
    // Add timer element
    startTimer()

})

// Quiz Questions
function nextQuestion(){
    console.log("This is the next question")

}


// Timer
function startTimer(){
    var timer = 60;

    var timeInterval = setInterval(function() {
        timerEl.textContent = timer + " seconds remaining";
        timer--;
    
        if (timer === 0) {
          timerEl.textContent = "";
          clearInterval(timeInterval);
        }
    
      }, 1000);

}


// High Score