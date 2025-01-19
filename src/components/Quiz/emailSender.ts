import { AuditEmail } from './types';
import quizFunctions from './quizFunctions'

export default async function sendEmail(audit: AuditEmail) {

    const report = quizFunctions.buildHtmlAuditEmail(audit)

    const today = new Date().toISOString().split('T')[0];
    const subject = '"' + audit.quizName + '" Quiz Submission for ' + audit.firstName + ' ' + audit.lastName + " " + today

    const payload = {
        from: audit.lastName + ', ' + audit.firstName + ' <' + import.meta.env.VITE_QUIZ_EMAIL_SENDER + '>',
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

