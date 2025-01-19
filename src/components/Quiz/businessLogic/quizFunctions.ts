import allQuestions from './allQuestions'
import { AuditEmail, QuizDefinition } from '../types';

const getQuiz = (id: string) => {
  const questions = allQuestions()
  const fetchedQuiz: QuizDefinition[] = questions
    .filter((item) => item.key === id)
    .map((item) => item);

  if (fetchedQuiz) {
    return fetchedQuiz
  }
  return null
}


const buildHtmlAuditEmail = (audit: AuditEmail): string => {
  const questionAnswers = audit.answerSheet.map(({ question, studentAnswer, correctAnswer, isCorrect, correctAnswerText, studentAnswerText }) => `
    <p><b>Question:</b> ${question} <br /></p>
    <ul>
      <li><b>Student Answer:</b> ${studentAnswer} ${studentAnswerText}</li>
      <li><b>Correct Answer:</b> ${correctAnswer} ${correctAnswerText}</li>
      <li>Result: ${isCorrect === true ? '✅' : '❌'}</li>
    </ul>`
  )
    .join('');

  return `
  <!DOCTYPE html>
  <html>
  <head>
    <style>
      body {
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
        padding: 0;
        line-height: 1.6;
      }
      .container {
        padding: 20px;
        color: #333;
      }
      h1, h2 {
        color: #0056b3;
      }
      .score {
        font-size: 1.5em;
        font-weight: bold;
        margin-bottom: 20px;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
      }
      th, td {
        border: 1px solid #ccc;
        padding: 8px;
        text-align: left;
      }
      .center {
        text-align: center;
      }
      th {
        background-color: #f4f4f4;
      }
      tr:nth-child(even) {
        background-color: #f9f9f9;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>${audit.quizName} - Result</h1>
      <p><strong>First Name:</strong> ${audit.firstName}</p>
      <p><strong>Last Name:</strong> ${audit.lastName}</p>
      <div class="score">
        <p><strong>Score:</strong> ${audit.score} &nbsp; <strong>Final Score:</strong> ${audit.finalScore}</p>
      </div>
      ${questionAnswers}
    </div>
  </body>
  </html>
`;
}



export default { getQuiz, buildHtmlAuditEmail }