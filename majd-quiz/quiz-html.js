// const questions = [
//     {
//         question:" What is HTML?",
//         answers:[
//             { text:"HyperText Markup Language", correct: true},
//             { text:"HyperText Marketup Language", correct: false},
//             { text:"HyperText Mockup Language", correct: false},
//             { text:"HyperTest Markup Language", correct: false},
//         ]  
//     },
//     //quiz1
//     {
//         question:" What are HTML tags?",
//         answers:[
//             { text:"HyperText Markup Language", correct: false},
//             { text:"in an HTML file by using indents", correct: false},
//             { text:"for placing the elements in the proper and appropriate format. ", correct: true},
//             { text:" are the properties that can be added to an HTML tag.", correct: false},
//         ]  
//     },
//     {
//         question:"What are HTML Attributes?",
//         answers:[
//             { text:"HyperText Markup Language", correct: false},
//             { text:" are the properties that can be added to an HTML tag.", correct: true},
//             { text:"for placing the elements in the proper and appropriate format. ", correct:false},
//             { text:"in an HTML file by using indents", correct: false},
//         ]  
//     },
//     {
//         question:" How do you align list elements in an HTML file?",
//         answers:[
//             { text:"HyperText Markup Language", correct: false},
//             { text:" are the properties that can be added to an HTML tag.", correct: false},
//             { text:"for placing the elements in the proper and appropriate format. ", correct:false},
//             { text:"in an HTML file by using indents", correct: true},
//         ]  
//     },//quiz5
//     {
//         question:"What is an element in HTML?",
//         answers:[
//             { text:"HTML is used to create the structure and content of a web page, while CSS is used to define the appearance and layout of the page.", 
//               correct: false},
//             { text:"  is a set of tags that define a specific part of a web page.", correct: true},
//             { text:"are tags that do not require a closing tag", correct:false},
//             { text:"We use the anchor tag <a> t", correct: false},
//         ]  
//     },
//     {
//         question:" What is the difference between HTML and CSS?",
//         answers:[
//             { text:"HTML is used to create the structure and content of a web page,while CSS is used to define the appearance and layout of the page",
//              correct: true},
//             { text:" is a set of tags that define a specific part of a web page.", correct: false},
//             { text:"are tags that do not require a closing tag. ", correct:false},
//             { text:"We use the anchor tag <a> t", correct: false},
//         ]  
//     },
//     {
//         question:" What are void elements in HTML?",
//         answers:[
//             { text:"HTML is used to create the structure and content of a web page,while CSS is used to define the appearance and layout of the page", 
//                correct: false},
//             { text:"is a set of tags that define a specific part of a web page.", correct: false},
//             { text:" are tags that do not require a closing tag", correct:true},
//             { text:"We use the anchor tag <a> t", correct: false},
//         ]  
//     },
//     {
//         question:"How do you create a hyperlink in HTML?",
//         answers:[
//             { text:"are tags that do not require a closing tag", correct: false},
//             { text:"We use the anchor tag <a> t .", correct: true},
//             { text:"is a set of tags that define a specific part of a web page. ", correct: false},
//             { text:"helps in linking with the different kinds of web pages using a single image.", correct: false},
//         ]  
//     },
//     {
//         question:" Define an image map?",
//         answers:[
//             { text:"We use the anchor tag <a> t", correct: false},
//             { text:"helps in linking with the different kinds of web pages using a single image.", correct: true},
//             { text:" is a coding style. ", correct: false},
//             { text:" is used to describe the vector or raster graphics", correct: false},
//         ]  
//     },
//     {
//         question:"What is a form in HTML?",
//         answers:[
//             { text:"We use the anchor tag <a> t", correct: false},
//             { text:" is a set of input fields and other elements to collect user data.", correct: true},
//             { text:" is a coding style. ", correct: false},
//             { text:" is used to describe the vector or raster graphics", correct: false},
//         ]
//     }
// ];

let quizArray = [];
let Data = JSON.parse(localStorage.getItem("userData"));

if (Data.quiztype == "Js") {
  quizArray = [
    {
      id: "0",
      question: "What is JavaScript primarily used for??",
      options: [
        " Styling web pages",
        "Adding interactivity and dynamic content to web pages",
        "Creating database management systems",
        "Building operating systems",
      ],
      correct: "Adding interactivity and dynamic content to web pages",
    },
    {
      id: "1",
      question: "How do you check the data type of a variable in JavaScript?",
      options: [
        "typeof variableName",
        "checkType(variableName)",
        "typeOf(variableName)",
        "dataType(variableName)",
      ],
      correct: "typeof variableName",
    },
    {
      id: "2",
      question:
        "Which keyword is used to declare a constant variable in JavaScript?",
      options: ["let", "var", "const", "set"],
      correct: "const",
    },
    {
      id: "3",
      question: "How can you create an object in JavaScript?",
      options: [
        "var obj = new Object();",
        "var obj = {};",
        "var obj = Object.create({})",
        "All of the above",
      ],
      correct: "All of the above",
    },
    {
      id: "4",
      question: "What type of language is JavaScript?",
      options: [
        "Compiled language",
        "Interpreted language",
        "Assembly language",
        "Machine language",
      ],
      correct: "Interpreted language",
    },
    {
      id: "5",
      question: "Which of the following is NOT a JavaScript data type?",
      options: [" String", " Float", "Boolean", "Array"],
      correct: "Float",
    },
    {
      id: "6",
      question:
        "Which function is used to print content to the browser's developer console?",
      options: ["console.log()", "print()", "log())", "debug()"],
      correct: "console.log()",
    },

    {
      id: "7",
      question: "The '===' operator in JavaScript checks for:",
      options: [
        "Value equality only",
        "Type equality only",
        "Value and type equality",
        "None of the above",
      ],
      correct: "Value and type equality",
    },

    {
      id: "8",
      question: "What is the purpose of the 'this' keyword in JavaScript?",
      options: [
        "It refers to the current HTML element.",
        "It refers to the previous function in the call stack.",
        "It refers to the current object in the context.",
        "It refers to the global window object.",
      ],
      correct: "It refers to the current object in the context.",
    },

    {
      id: "9",
      question:
        " Which built-in method is used to convert a string to all lowercase letters?",
      options: [
        "toLowerCase()",
        "lowerCase()",
        "changeCase('lower')",
        "allLowerCase()",
      ],
      correct: "toLowerCase",
    },
  ];
} else if (Data.quiztype == "Css") {
  quizArray = [
    {
      id: "0",
      question: "What is CSS?",
      options: [
        " CSS is a style sheet language",
        "CSS is designed to separate the presentation and content, including layout, colors, and fonts",
        "CSS is the language used to style the HTML documents",
        "All of the mentioned",
      ],
      correct: "All of the mentioned",
    },
    {
      id: "1",
      question: "Which of the following tag is used to embed css in html page?",
      options: ["<css>", "<!DOCTYPE html>", "<script>", "<style>"],
      correct: "<style>",
    },
    {
      id: "2",
      question:"Which of the following CSS selectors are used to specify a group of elements?",
        
      options: ["tag", "id", "class", "++both class and tag"],
      correct: "class",
    },
    {
      id: "3",
      question:
        "Which of the following has introduced text, list, box, margin, border, color, and background properties?",
      options: ["HTML", "PHP", "CSS", "Ajax"],
      correct: "CSS",
    },
    {
      id: "4",
      question:
        "Which of the following CSS framework is used to create a responsive design?",
      options: ["django", "rails", "larawell", "bootstrap"],
      correct: "bootstrap",
    },
    {
      id: "5",
      question:
        "Which of the following CSS selector is used to specify a rule to bind a particular unique element?",
      options: [" tag", " id", "class", "both class and tag"],
      correct: "id",
    },
    {
      id: "6",
      question:
        "Which of the following type of HTML tag is used to define an internal style sheet?",
      options: ["<script>", "<link>", "<class>", "<style>"],
      correct: "<style>",
    },

    {
      id: "7",
      question:
        "Which of the following CSS property is used to make the text bold?",
      options: [
        "text-decoration: bold",
        "font-weight: bold",
        "font-style: bold",
        "text-align: bold",
      ],
      correct: "font-weight: bold",
    },

    {
      id: "8",
      question:
        "Which of the following CSS style property is used to specify an italic text?",
      options: ["style", "font", "font-style", "@font-face"],
      correct: "font-style",
    },

    {
      id: "9",
      question:
        "Which of the following are the CSS Extension Prefixes for Webkit?",
      options: ["-chrome", "-web", "-o-", "-webkit"],
      correct: "-webkit",
    },
  ];
} else if (Data.quiztype == "Html") {
  quizArray = [
    {
      id: "0",
      question: "What is HTML?",
      options: [
        " HyperText Marketup Language",
        "HyperText Mockup Language",
        "HyperTest Markup Language",
        "HyperText Markup Language",
      ],
      correct: "HyperText Markup Language",
    },
    {
      id: "1",
      question: "What are HTML tags?",
      options: [
        "for placing the elements in the proper and appropriate format.",
        "in an HTML file by using indents",
        "are the properties that can be added to an HTML tag.",
        "is a coding style.",
      ],
      correct: "for placing the elements in the proper and appropriate format.",
    },
    {
      id: "2",
      question: "What are HTML Attributes?",
      options: [
        "is a coding style.",
        "We use the anchor tag <a> ",
        " are the properties that can be added to an HTML tag.",
        "in an HTML file by using indents",
      ],
      correct: " are the properties that can be added to an HTML tag.",
    },
    {
      id: "3",
      question: " How do you align list elements in an HTML file?",
      options: [
        "is a coding style",
        "is used to describe the vector or raster graphics",
        "HyperText Markup Language",
        "in an HTML file by using indents",
      ],
      correct: "in an HTML file by using indents",
    },
    {
      id: "4",
      question: "What is an element in HTML?",
      options: [
        "is a set of tags that define a specific part of a web page.",
        "is a coding style",
        "We use the anchor tag <a>",
        "is used to describe the vector or raster graphics",
      ],
      correct: "is a set of tags that define a specific part of a web page.",
    },
    {
      id: "5",
      question: " What is the difference between HTML and CSS?",
      options: [
        " is used to describe the vector or raster graphics",
        " HTML is used to create the structure and content of a web page,while CSS is used to define the appearance and layout of the page",
        "is a coding style",
        "HyperText Markup Language",
      ],
      correct:
        "HTML is used to create the structure and content of a web page,while CSS is used to define the appearance and layout of the page",
    },
    {
      id: "6",
      question: "What are void elements in HTML?",
      options: [
        "We use the anchor tag <a>",
        "is a coding style.",
        "is used to describe the vector or raster graphics",
        " is a set of tags that define a specific part of a web page.",
      ],
      correct: "We use the anchor tag <a>",
    },

    {
      id: "7",
      question: "What is a form in HTML?",
      options: [
        " is a set of input fields and other elements to collect user data.",
        "We use the anchor tag <a>",
        "helps in linking with the different kinds of web pages using a single image.",
        "is a coding style.",
      ],
      correct:
        " is a set of input fields and other elements to collect user data.",
    },

    {
      id: "8",
      question: "How do you create a hyperlink in HTML?",
      options: [
        "is used to describe the vector or raster graphics.",
        "HyperText Markup Language.",
        "is a set of input fields and other elements to collect user data.",
        "is a set of tags that define a specific part of a web page.",
      ],
      correct:
        "is a set of input fields and other elements to collect user data.",
    },

    {
      id: "9",
      question: " Define an image map?",
      options: [
        "is used to describe the vector or raster graphics",
        "is a coding style.",
        "helps in linking with the different kinds of web pages using a single image",
        "is a set of tags that define a specific part of a web page.",
      ],
      correct:
        "helps in linking with the different kinds of web pages using a single image",
    },
  ];
}


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const timerElement = document.getElementById("timer");
const scoreContainer = document.getElementById("score-container");
const userScore = document.getElementById("user-score");

let currentQuestionIndex = 0;
let scoreCount = 0;
let questionCount = 0;
let timeLeft = 300; // 5 minutes in seconds
let timerInterval;
let quizArrayCopy = [...quizArray]; // A copy of the quizArray for shuffling

// Display the next question
function quizDisplay(index) {
  // Implement the logic to display the quiz questions here
  // Use the quizArrayCopy to shuffle the questions
  if (index < quizArrayCopy.length) {
    const currentQuestion = quizArrayCopy[index];
    questionElement.textContent = `${index + 1}. ${currentQuestion.question}`;

    // Clear previous answer buttons
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }

    // Create new answer buttons
    currentQuestion.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.classList.add("btn");
      answerButtons.appendChild(button);

      if (option === currentQuestion.correct) {
        button.dataset.correct = "true";
      }

      button.addEventListener("click", selectAnswer);
    });
  }
}

function startQuiz() {
  currentQuestionIndex = 0;
  scoreCount = 0;
  questionCount = 0;
  nextButton.textContent = "Next";
  quizArrayCopy = [...quizArray]; // Reset the shuffled quiz array
  quizDisplay(0);
  startTimer();
}

function startTimer() {
  updateTimer();
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimer();

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      showScore();
    }
  }, 1000);
}

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  selectedBtn.classList.add("clicked");
  if (isCorrect) {
    scoreCount++;
  }
  questionCount++;
  nextButton.style.display = "block";
}

// function showScore() {
//   questionElement.textContent = `You scored ${scoreCount} out of ${questionCount}!`;
//   nextButton.textContent = "Play Again";
//   scoreContainer.style.display = "block";
// }

function displayNext() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizArrayCopy.length) {
    quizDisplay(currentQuestionIndex);
    nextButton.style.display = "none";
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < quizArrayCopy.length) {
    displayNext();
  } else {
    startQuiz();
    scoreContainer.style.display = "none";
    timeLeft = 300;
    startTimer();
  }
});

startQuiz();
