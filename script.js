var contentEl = document.querySelector("#page-content");
var questionsEl = document.querySelector("#questions");


var content = {
    "start": {
        "size": 1,
        "text": [
            "START"
        ]
    },
    "questions": [
        {
         "question": "Which is NOT a primitive data type?",
         "answers": [
             "Boolean",
             "String",
             "Number",
             "Function"
         ],
         "correctIndex": 3 
        },
        {
            "question": "What should you end each line statement with?",
            "answers": [
                "A period (.)",
                "A question mark (?)",
                "A semicolon (;)",
                "An asterisk (*)"
            ],
            "correctIndex": 2
        }
    ]
    
}
function createBtnDiv (){
    // creates a div element to group the input buttons
    var divInputGroupEl = document.createElement("div");
    divInputGroupEl.className = "input-group";
    divInputGroupEl.setAttribute("id", "buttons");
    questionsEl.appendChild(divInputGroupEl);

}

function createStartEl() {
    // creates h1 element to promt the user to start the quiz
    var startH1El = document.createElement("h1");
    startH1El.className = "start-header";
    startH1El.textContent = "Select START to begin the quiz";
    questionsEl.appendChild(startH1El);
    
    createBtnDiv()

    // selects the newly created div for addition of the start button
    var buttonsEl = document.querySelector("#buttons");

    // creates the start button
    var startButtonEl = document.createElement("button");
    startButtonEl.className = "start-btn btn";
    startButtonEl.textContent = content.start.text;
    buttonsEl.appendChild(startButtonEl);
}

function createQuestion(questionItteration) {
    debugger;
    var i = questionItteration;
    if (i === undefined) {
        i = 0;
    }

    loop();

    function loop (){
        debugger
        if (i === 0){
            document.querySelector(".start-header").remove();
            document.querySelector("#buttons").remove();
        } else{
            document.querySelector(".question-header").remove();
            document.querySelector("#buttons").remove();
        }
        var questionH1El = document.createElement("h1");
        questionH1El.className = "question-header";
        questionH1El.textContent = content.questions[i].question;
        questionsEl.appendChild(questionH1El);
    
        createBtnDiv();
    
        var buttonsEl = document.querySelector("#buttons");
    
        for (let j = 0; j < content.questions[i].answers.length; j++) {
            var questionButtonEl = document.createElement("button");
            questionButtonEl.className = "btn";
            questionButtonEl.setAttribute("name", j);
            questionButtonEl.setAttribute("id", "btn-id-" + j);
            questionButtonEl.textContent = content.questions[i].answers[j];
            buttonsEl.appendChild(questionButtonEl);
        }

        answerHandler(i);
    }
    
}

function answerHandler(itteration){
    for (let i = 0; i < 3; i++) {
        document.querySelector("#btn-id-" + i).addEventListener("click", answerHandler);
    }
    

}
    
createStartEl();

var startBtnClick = document.querySelector(".start-btn");

startBtnClick.addEventListener("click", createQuestion());