
    function checkAnswers() {
      const quizForm = document.getElementById('quizForm');
      const resultsTable = document.getElementById('resultsTable');

      // Clear previous results
      resultsTable.innerHTML = `
        <tr>
          <th>Question</th>
          <th>Your Answer</th>
          <th>Correct Answer</th>
        </tr>
      `;

      const correctAnswers = {
        q1: 'Paris',
        q2: 'Mercury',
        q3: '4'
      };

      let correctCount = 0;

      for (const question in correctAnswers) {
        const selectedOption = quizForm.elements[question].value;
        const correctAnswer = correctAnswers[question];
        const isCorrect = selectedOption === correctAnswer;

        const row = resultsTable.insertRow();
        row.insertCell().textContent = question;
        row.insertCell().textContent = selectedOption;
        row.insertCell().textContent = correctAnswer;

        if (isCorrect) {
          row.classList.add('correct');
          correctCount++;
        } else {
          row.classList.add('incorrect');
        }
      }

      const resultRow = resultsTable.insertRow();
      resultRow.insertCell().textContent = 'Total Correct';
      resultRow.insertCell().textContent = correctCount;
      resultRow.insertCell(); // Empty cell for formatting

      window.scrollTo(0, document.body.scrollHeight);
    }