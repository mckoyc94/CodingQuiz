// Variables Section
var quizSection = document.querySelector("main")
var currentQuestionNumber = document.querySelector("h1")
var currentQuestion = document.querySelector("p")
var startButton = document.getElementById("start")
var timerEl = document.getElementById("countDown")
var questNum = 0
var timer = 60
var textForm = document.createElement("input")
    textForm.setAttribute("type", "text")

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
        "answer4" : "<js>",
        "correctAnswer" : "<script>"
    },
    // Question 2
    {
        "text" : "Which built-in method returns the character at the specified index?",
        "answer1" : "getCharacterAt()",
        "answer2" : "getChar()",
        "answer3" : "charAt()",
        "answer4" : "characterAt()",
        "correctAnswer" : "charAt()"
    },
    // Question 3
    {
        "text" : "Which tag would you use to make something bold in HTML?",
        "answer1" : "<bold>",
        "answer2" : "<thick>",
        "answer3" : "<big>",
        "answer4" : "<strong>",
        "correctAnswer" : "<strong>"
    },
    // Question 4
    {
        "text" : "How do you attach an external file to a HTML file in HTML?",
        "answer1" : "<link>",
        "answer2" : "<merge>",
        "answer3" : "<attach>",
        "answer4" : "<bound>",
        "correctAnswer" : "<link>"
    },
    // Question 5
    {
        "text" : "Which of the following function of String object returns a string representing the specified object?",
        "answer1" : "string()",
        "answer2" : "stringMaker()",
        "answer3" : "toString()",
        "answer4" : "subString()",
        "correctAnswer" : "toString()"
    }

]
 
//Button Variables
var buttonSection = document.createElement("div")
    var buttonA = document.createElement("button")
    buttonA.setAttribute("id","button-A")
    var buttonB = document.createElement("button")
    buttonB.setAttribute("id", "button-B")
    var buttonC = document.createElement("button")
    buttonC.setAttribute("id", "button-C")
    var buttonD = document.createElement("button")
    buttonD.setAttribute("id", "button-D")

// Timer
function startTimer(){
    
    var timeInterval = setInterval(function() {
        timerEl.textContent = timer + " seconds remaining";
        timer--;
    
        if (questNum === 6) {
            var score = localStorage.setItem("score", timer)
            timerEl.textContent = "";
            clearInterval(timeInterval);
            document.body.append(textForm)
            highScoreScreen()
        } else if (timer === 0){
            var score = localStorage.setItem("score", timer)
            timerEl.textContent = "";
            clearInterval(timeInterval);
            document.body.append(textForm)
            highScoreScreen()
        }
    
      }, 1000);

}

// Start Quiz

startButton.addEventListener("click", function(){
    
    startButton.remove()
    document.body.appendChild(buttonSection)
    buttonSection.appendChild(buttonA)
    buttonSection.appendChild(buttonB)
    buttonSection.appendChild(buttonC)
    buttonSection.appendChild(buttonD)


    nextQuestion()
    startTimer()
})


// Generating with Next Question
function nextQuestion(){
    
    questNum++
    
    if (questNum < 6){
    currentQuestionNumber.textContent = "Question #" + questNum;
    
    //Buttons
    currentQuestion.textContent = questArray[questNum].text;
    buttonA.textContent = questArray[questNum].answer1
    document.getElementById("button-A").setAttribute('value', questArray[questNum].answer1)
    buttonB.textContent = questArray[questNum].answer2
    document.getElementById("button-B").setAttribute('value', questArray[questNum].answer2)
    buttonC.textContent = questArray[questNum].answer3
    document.getElementById("button-C").setAttribute('value', questArray[questNum].answer3)
    buttonD.textContent = questArray[questNum].answer4
    document.getElementById("button-D").setAttribute('value', questArray[questNum].answer4)
    }
    
}

// Button Presses
buttonA.addEventListener('click', function(event){
        if (event.target.value === questArray[questNum].correctAnswer){
        timerEl.textContent = "Correct!"
        nextQuestion()
    } else {
        timerEl.textContent = "Incorrect :("
        timer = timer - 10
        nextQuestion()
    }
})
buttonB.addEventListener('click', function(event){
    if (event.target.value === questArray[questNum].correctAnswer){
        timerEl.textContent = "Correct!"
        nextQuestion()
    } else {
        timerEl.textContent = "Incorrect :("
        timer = timer - 10
        nextQuestion()
    }
})
buttonC.addEventListener('click', function(event){
    if (event.target.value === questArray[questNum].correctAnswer){
        timerEl.textContent = "Correct!"
        nextQuestion()
    } else {
        timerEl.textContent = "Incorrect :("
        timer = timer - 10
        nextQuestion()
    }
})
buttonD.addEventListener('click', function(event){
    if (event.target.value === questArray[questNum].correctAnswer){
        timerEl.textContent = "Correct!"
        nextQuestion()
    } else {
        timerEl.textContent = "Incorrect :("
        timer = timer - 10
        nextQuestion()
    }
})


// High Score
function highScoreScreen(){
    currentQuestionNumber.textContent = "All done!"
    currentQuestion.textContent= "Nice Job! Enter your initials"
    buttonSection.remove()

    timerEl.textContent = "Your Score is " + localStorage.getItem("score")
    
    textForm.addEventListener("keydown", function(event){
        var player = textForm.value
        if (event.keyCode === 13){
            event.preventDefault()
            var initials = localStorage.setItem("player", player)
            console.log(localStorage.getItem("player"))
        }
    })


}