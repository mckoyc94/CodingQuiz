// Variables Section
var quizSection = document.querySelector("main")
var currentQuestionNumber = document.querySelector("h1")
var currentQuestion = document.querySelector("p")
var startButton = document.getElementById("start")
var timerEl = document.getElementById("countDown")
var questNum = 0

// Quiz Questions
var questArray = [
    {
            "text": "blank"
    },
    // Question 1
    {
        "text" : "Inside which HTML element do we put the JavaScript?",
        "answer1" : "<java>",
        "answer2" : "<script>",
        "answer3" : "<javascript>",
        "answer4" : "<js>"
    },
    // Question 2
    {
        "text" : "Which built-in method returns the character at the specified index?",
        "answer1" : "getCharacterAt()",
        "answer2" : "getChar()",
        "answer3" : "charAt()",
        "answer4" : "characterAt()"   
    },
    // Question 3
    {
        "text" : "Which tag would you use to make something bold in HTML?",
        "answer1" : "<bold>",
        "answer2" : "<thick>",
        "answer3" : "<big>",
        "answer4" : "<strong>"
    },
    // Question 4
    {
        "text" : "How do you attach an external file to a HTML file in HTML?",
        "answer1" : "<link>",
        "answer2" : "<merge>",
        "answer3" : "<attach>",
        "answer4" : "<bound>"
    },
    // Question 5
    {
        "text" : "Which of the following function of String object returns a string representing the specified object?",
        "answer1" : "string()",
        "answer2" : "stringMaker()",
        "answer3" : "toString()",
        "answer4" : "subString()"
    }

]

//Answer Key
questArray[1].answer2 = true;
questArray[2].answer3 = true;
questArray[3].answer4 = true;
questArray[4].answer1 = true;
questArray[5].answer3 = true;


// Timer
function startTimer(){
    var timer = 5;

    var timeInterval = setInterval(function() {
        timerEl.textContent = timer + " seconds remaining";
        timer--;
    
        if (timer === 0 || questNum === 6) {
            timerEl.textContent = "";
            clearInterval(timeInterval);
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

// Generating with Next Question
function nextQuestion(){
    questNum++
    currentQuestionNumber.textContent = "Question #" + questNum;
    currentQuestion.textContent = questArray[questNum].text;
    
    

}



// High Score
function highScoreScreen(){
    currentQuestionNumber.textContent = "All done!"
    currentQuestion.textContent= "Nice Job! Enter your initials"
          
    var textForm = document.createElement("input")
    textForm.setAttribute("type", "text")
    document.body.append(textForm)


}