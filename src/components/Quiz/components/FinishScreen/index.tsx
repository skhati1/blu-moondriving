import { useState } from "react";
import sendEmail from "../../businessLogic/emailSender";
import { AuditEmail } from "../../types";

interface FinishScreenProps {
    calculateScore(): number ;
    totalQuestions: number;
    auditReport: AuditEmail;
}

export default function FinishScreen(props: FinishScreenProps) {

    const [submitButtonText, setSubmitButtonText] = useState('Submit')
    const [isSubmitEnabled, setIsSubmitEnabled] = useState(true)


    const handleSubmitQuiz = () => {
        if (window.confirm("Are you sure you wish to submit?")){
            let response = sendEmail(props.auditReport)
            if (!response) {
                alert('Failed to submit! Please try to submit again!')
                setSubmitButtonText('Retry')
                setIsSubmitEnabled(true)
            } else {
                setSubmitButtonText('Done!')
                setIsSubmitEnabled(false)
            }
        } else {
            console.log("user cancelled submission")
        }
    }

    return (
        <div className="center">
            <h2>Assessment Complete!</h2>
            <h3>You scored {props.calculateScore()} out of {props.totalQuestions}!</h3>
            <h2>{((props.calculateScore() / props.totalQuestions) * 100).toFixed(2)}%</h2>
            <button onClick={handleSubmitQuiz} disabled={!isSubmitEnabled}>{submitButtonText}</button>
        </div>
    )
}