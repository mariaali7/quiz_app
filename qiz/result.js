document.addEventListener("DOMContentLoaded", () => {
    // Retrieve quizArray and user answers from localStorage
    const quizArray = JSON.parse(localStorage.getItem("quizArray"));
    const userAnswers = {};
    for (let i = 0; i < quizArray.length; i++) {
        const userAnswer = localStorage.getItem(`userAnswer${i}`);
        userAnswers[i] = userAnswer;
    }

    // Display the questions and user answers
    const resultContainer = document.querySelector(".result-container");
    quizArray.forEach((question, index) => {
        const questionElement = document.createElement("div");
        questionElement.innerHTML = `
            <h3>Question ${index + 1}:</h3>
            <p>Question : ${question.question}</p>
            <p>Your Answer: ${userAnswers[index] || "Not answered"}</p>
            <p>Correct Answer: ${question.correct}</p>
            <hr>
        `;
        resultContainer.appendChild(questionElement);
    });
});

let score = JSON.parse(localStorage.getItem("scoreCount"));
if(score >= 5 ){
    document.body.classList.add("paas")
}
else{
    document.body.classList.add("faild")
}