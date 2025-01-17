import { Resend } from 'resend'
import { AuditEmail } from './Stepper';

export default async function sendEmail(audit: AuditEmail) {
    const resend = new Resend(import.meta.env.VITE_RESEND_KEY);

    const report = buildHtmlAuditEmail(audit)

    const today = new Date().toISOString().split('T')[0];
    const subject = '"' + audit.quizName + '" Quiz Result: ' + audit.firstName + ' ' + audit.lastName + " " + today

    const payload = {
        from: import.meta.env.VITE_QUIZ_EMAIL_SENDER,
        to: import.meta.env.VITE_QUIZ_EMAIL_RECIPIENT + ";" + audit.email,
        subject: subject,
        html: report,
    }

    let result = await resend.emails.send(payload);
    if (!result.error) {
        return true;
    } else {
        console.log('Error sending email report: ' + result.error.message)
        return false;
    }
}


const buildHtmlAuditEmail = (audit: AuditEmail): string => {
    const tableRows = Object.entries(audit.answerSheet)
        .map(
            ([questionNumber, answer]) => `
    <tr>
      <td>${questionNumber}</td>
      <td>${answer}</td>
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
      <h1>${audit.quizName} - Audit Report</h1>
      <p><strong>First Name:</strong> ${audit.firstName}</p>
      <p><strong>Last Name:</strong> ${audit.lastName}</p>
      <p><strong>Email:</strong> ${audit.email}</p>
      <div class="score">
        <p><strong>Score:</strong> ${audit.score}</p>
        <p><strong>Final Score:</strong> ${audit.finalScore}</p>
      </div>
      <h2>Answer Sheet</h2>
      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Answer</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      </table>
    </div>
  </body>
  </html>
`;
}


