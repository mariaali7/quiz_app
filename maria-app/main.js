const questions = [
{
    question : "What is CSS?",
    answers : [
        {text: " CSS is a style sheet language"  , correct: "false"},
        {text: " CSS is designed to separate the presentation and content, including layout, colors, and fonts"  , correct: "false"},
        {text: " CSS is the language used to style the HTML documents"  , correct: "false"},
        {text: " All of the mentioned"  , correct: "true"}
    ]
},
{
    question : "Which of the following tag is used to embed css in html page?",
    answers : [
        {text: " <css>"  , correct: "false"},
        {text: " <!DOCTYPE html>"  , correct: "false"},
        {text: " <script>"  , correct: "false"},
        {text: "<style>"  , correct: "true"}
    ]
},
{
    question : "Which of the following CSS selectors are used to specify a group of elements?",
    answers : [
        {text: " tag"  , correct: "false"},
        {text: " id"  , correct: "false"},
        {text: " class"  , correct: "true"},
        {text: "both class and tag"  , correct: "false"}
    ]
},
{
    question : "Which of the following has introduced text, list, box, margin, border, color, and background properties?",
    answers : [
        {text: " HTML"  , correct: "false"},
        {text: " PHP"  , correct: "false"},
        {text: " CSS"  , correct: "true"},
        {text: " Ajax"  , correct: "false"}
    ]
},
{
    question : " Which of the following CSS framework is used to create a responsive design?",
    answers : [
        {text: " django"  , correct: "false"},
        {text: " rails"  , correct: "false"},
        {text: " larawell"  , correct: "false"},
        {text: " bootstrap"  , correct: "true"}
    ]
},
{
    question : "Which of the following CSS selector is used to specify a rule to bind a particular unique element?",
    answers : [
        {text: " tag"  , correct: "false"},
        {text: " id"  , correct: "true"},
        {text: " class"  , correct: "false"},
        {text: " both class and tag"  , correct: "false"}
    ]
},
{
    question : "Which of the following type of HTML tag is used to define an internal style sheet?",
    answers : [
        {text: " <script>"  , correct: "false"},
        {text: " <link>"  , correct: "false"},
        {text: " <class>"  , correct: "false"},
        {text: " <style>"  , correct: "true"}
    ]
},
{
    question : "Which of the following CSS property is used to make the text bold?",
    answers : [
        {text: " text-decoration: bold"  , correct: "false"},
        {text: " font-weight: bold"  , correct: "true"},
        {text: " font-style: bold"  , correct: "false"},
        {text: " text-align: bold"  , correct: "false"}
    ]
},
{
    question : "Which of the following CSS style property is used to specify an italic text?",
    answers : [
        {text: " style"  , correct: "false"},
        {text: " font"  , correct: "false"},
        {text: " font-style"  , correct: "true"},
        {text: " @font-face"  , correct: "false"}
    ]
},
{
    question : "Which of the following are the CSS Extension Prefixes for Webkit?",
    answers : [
        {text: " -chrome"  , correct: "false"},
        {text: " -web"  , correct: "false"},
        {text: " -o-"  , correct: "false"},
        {text: " -webkit"  , correct: "true"}
    ]
}


];



const questionElement = document.getElementById("question");
const assswerElement = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "next";
  showQuestion();
}


function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    
}