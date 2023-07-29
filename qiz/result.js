document.addEventListener("DOMContentLoaded", () => {
    // Retrieve quizArray and user answers from localStorage
    const quizArray = JSON.parse(localStorage.getItem("quizArray"));
    const userAnswers = {};
    for (let i = 0; i < quizArray.length; i++) {
        const userAnswer = localStorage.getItem(`userAnswer${i}`);
        userAnswers[i] = userAnswer;
    }
    
    
    

    // Display the questions and user answers
      
        let table = document.querySelector("#tableresult")
        quizArray.forEach(function(question , index) {
            table.innerHTML += `
               
                <td>${question.question}</td>
                <td> ${userAnswers[index] || "not answerd"} </td>
                <td> $${question.correct}</td>
            `
        });
        `;
        resultContainer.appendChild(questionElement);
    });


let score = JSON.parse(localStorage.getItem("scoreCount"));
if(score >= 5 ){
    document.body.classList.add("paas")
}
else{
    document.body.classList.add("faild")
}
