const questions = [
    {
        question:" What is HTML?",
        answers:[
            { text:"HyperText Markup Language", correct: true},
            { text:"HyperText Marketup Language", correct: false},
            { text:"HyperText Mockup Language", correct: false},
            { text:"HyperTest Markup Language", correct: false},
        ]  
    },
    //quiz1
    {
        question:" What are HTML tags?",
        answers:[
            { text:"HyperText Markup Language", correct: false},
            { text:"in an HTML file by using indents", correct: false},
            { text:"for placing the elements in the proper and appropriate format. ", correct: true},
            { text:" are the properties that can be added to an HTML tag.", correct: false},
        ]  
    },
    {
        question:"What are HTML Attributes?",
        answers:[
            { text:"HyperText Markup Language", correct: false},
            { text:" are the properties that can be added to an HTML tag.", correct: true},
            { text:"for placing the elements in the proper and appropriate format. ", correct:false},
            { text:"in an HTML file by using indents", correct: false},
        ]  
    },
    {
        question:" How do you align list elements in an HTML file?",
        answers:[
            { text:"HyperText Markup Language", correct: false},
            { text:" are the properties that can be added to an HTML tag.", correct: false},
            { text:"for placing the elements in the proper and appropriate format. ", correct:false},
            { text:"in an HTML file by using indents", correct: true},
        ]  
    },//quiz5
    {
        question:"What is an element in HTML?",
        answers:[
            { text:"HTML is used to create the structure and content of a web page, while CSS is used to define the appearance and layout of the page.", 
              correct: false},
            { text:"  is a set of tags that define a specific part of a web page.", correct: true},
            { text:"are tags that do not require a closing tag", correct:false},
            { text:"We use the anchor tag <a> t", correct: false},
        ]  
    },
    {
        question:" What is the difference between HTML and CSS?",
        answers:[
            { text:"HTML is used to create the structure and content of a web page,while CSS is used to define the appearance and layout of the page",
             correct: true},
            { text:" is a set of tags that define a specific part of a web page.", correct: false},
            { text:"are tags that do not require a closing tag. ", correct:false},
            { text:"We use the anchor tag <a> t", correct: false},
        ]  
    },
    {
        question:" What are void elements in HTML?",
        answers:[
            { text:"HTML is used to create the structure and content of a web page,while CSS is used to define the appearance and layout of the page", 
               correct: false},
            { text:"is a set of tags that define a specific part of a web page.", correct: false},
            { text:" are tags that do not require a closing tag", correct:true},
            { text:"We use the anchor tag <a> t", correct: false},
        ]  
    },
    {
        question:"How do you create a hyperlink in HTML?",
        answers:[
            { text:"are tags that do not require a closing tag", correct: false},
            { text:"We use the anchor tag <a> t .", correct: true},
            { text:"is a set of tags that define a specific part of a web page. ", correct: false},
            { text:"helps in linking with the different kinds of web pages using a single image.", correct: false},
        ]  
    },
    {
        question:" Define an image map?",
        answers:[
            { text:"We use the anchor tag <a> t", correct: false},
            { text:"helps in linking with the different kinds of web pages using a single image.", correct: true},
            { text:" is a coding style. ", correct: false},
            { text:" is used to describe the vector or raster graphics", correct: false},
        ]  
    },
    {
        question:"What is a form in HTML?",
        answers:[
            { text:"We use the anchor tag <a> t", correct: false},
            { text:" is a set of input fields and other elements to collect user data.", correct: true},
            { text:" is a coding style. ", correct: false},
            { text:" is used to describe the vector or raster graphics", correct: false},
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0; 
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function  showQuestion(){
     resetState();
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " ." + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);

});
    
}
function resetState(){
       nextButton.style.display = "none" ;
       while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
       }
    }
    function selectAnswer(e){
            const selectedBtn = e.target;
            const isCorrect = selectedBtn.dataset.correct === "true";
            if(isCorrect){
               selectedBtn.classList.add("correct");
               score++;
            }else{
                selectedBtn.classList.add("incorrect");
            }
            Array.from(answerButtons.children).forEach(button =>{
                        if(button.dataset.correct === "true"){
                            button.classList.add("correct");
                        }
                        button.disabled = true;
                    });
      nextButton.style.display = "block";
 }
 function showScore(){
            resetState();
            questionElement.innerHTML =`You scored ${score} out of ${questions.length}!`;
            nextButton.innerHTML = "play Again";
            nextButton.style.display = "block";
        }
 function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            showQuestion();
        }else{
            showScore();
        }
    }
  
 nextButton.addEventListener("click" , ()=>{
        if(currentQuestionIndex < questions.length){
           handleNextButton() ;
        }else{
                    startQuiz();
                }
            });
            
startQuiz();

