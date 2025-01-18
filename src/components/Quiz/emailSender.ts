import { AuditEmail } from './types';

export default async function sendEmail(audit: AuditEmail) {

    const report = buildHtmlAuditEmail(audit)

    const today = new Date().toISOString().split('T')[0];
    const subject = '"' + audit.quizName + '" Quiz Result: ' + audit.firstName + ' ' + audit.lastName + " " + today

    console.log(report)
    return
    const payload = {
        from: import.meta.env.VITE_QUIZ_EMAIL_SENDER,
        to: import.meta.env.VITE_QUIZ_EMAIL_RECIPIENT,
        subject: subject,
        html: report,
    }

    const result = await fetch('https://morning-silence-eaba.khatiwada-saurabh.workers.dev/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

    if (result.status == 200) {
        return true;
    } else {
        console.log('Error sending email report. Status ' + result.status, result)
        return false;
    }
}


const buildHtmlAuditEmail = (audit: AuditEmail): string => {
    console.log(audit.answerSheet)
    const tableRows = audit.answerSheet.map(({ question, studentAnswer, correctAnswer, isCorrect, correctAnswerText, studentAnswerText}) => `
    <tr>
      <td class="center">${isCorrect === true ? '✅' : '❌'}</td>
      <td>${question}</td>
      <td>${studentAnswer}</td>
      <td>${studentAnswerText}</td>
      <td>${correctAnswer}</td>
      <td>${correctAnswerText}</td>
    </tr>`
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
      
      <table>
        <thead>
          <tr>
            <th>Result</th>
            <th>Question</th>
            <th>Student Answer</th>
            <th>Student Answer Text</th>
            <th>Correct Answer</th>
            <th>Correct Text</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      </table>
      <div class="score">
        <p class="center"><strong>Score:</strong> ${audit.score} &nbsp; <strong>Final Score:</strong> ${audit.finalScore}</p>
      </div>
    </div>
  </body>
  </html>
`;
}


