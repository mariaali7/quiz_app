document.addEventListener("DOMContentLoaded", () => {
    // Retrieve quizArray and user answers from localStorage
    const quizArray = JSON.parse(localStorage.getItem("quizArray"));
    const userAnswers = {};
    for (let i = 0; i < quizArray.length; i++) {
        const userAnswer = localStorage.getItem(`userAnswer${i}`);
        userAnswers[i] = userAnswer;
    }



    // Display the questions and user answers in a table
    
})

let score = JSON.parse(localStorage.getItem("scoreCount"));
if (score >= 5) {
    document.body.classList.add("paas");
} else {
    document.body.classList.add("failed");
}
