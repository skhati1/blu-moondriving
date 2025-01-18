import React, { useState } from 'react';
import Content from '../layout/Content/Content';
import './stepper.css'
import sendEmail from './emailSender';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { AnswerSheet, AuditEmail, StepperProps } from './types';


interface StudentResponse {
    questionIndex: number,
    answerKey: string
}

//https://onlinehashtools.com/generate-random-md5-hash

const Stepper: React.FC<StepperProps> = ({ questions, quizName }) => {
    const auditAnswerSheet: AnswerSheet[] = []

    const [submitButtonText, setSubmitButtonText] = useState('Submit')
    const [isSubmitEnabled, setIsSubmitEnabled] = useState(true)

    const [isSaveEnabled, setIsSaveEnabled] = useState(false)

    const [firstNameHasError, setFirstNameHasError] = useState(false)
    const [lastNameHasError, setLastNameHasError] = useState(false)

    const [currentStep, setCurrentStep] = useState<number>(0);
    const [formData, setFormData] = useState<{ firstName: string; lastName: string; }>({
        firstName: '',
        lastName: ''
    });

    let initialAnswers: AnswerSheet[] = []
    const [answers, setAnswers] = useState(initialAnswers);
    const [validatedAnswers, setValidatedAnswers] = useState<Record<number, boolean>>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const [studentSelectedAnswer, setStudentSelectedAnswer] = useState({} as StudentResponse | null)

    const handleAnswerSelect = (questionIndex: number, answerKey: string): void => {
        let objItem: StudentResponse = {
            questionIndex: questionIndex,
            answerKey: answerKey
        }
        setStudentSelectedAnswer(objItem)
        setIsSaveEnabled(true)
    };

    const handleSave = (questionIndex: number): void => {
        if (studentSelectedAnswer === null){
            console.log('this shouldn\'t happen')
            return
        }
        const currentSet = questions[questionIndex]
        const correctAnswerResponse = currentSet.answers.filter(set => set.key === currentSet.correctAnswer)[0].item
        const studentAnswerResponse = currentSet.answers.filter(set => set.key === studentSelectedAnswer.answerKey)[0].item

        let res: AnswerSheet = {
            question: questions[questionIndex].question,
            correctAnswer: questions[questionIndex].correctAnswer,
            correctAnswerText: correctAnswerResponse,
            studentAnswer: studentSelectedAnswer.answerKey,
            studentAnswerText: studentAnswerResponse,
            isCorrect: questions[questionIndex].correctAnswer === studentSelectedAnswer.answerKey
        }
        auditAnswerSheet.push(res)
        setAnswers([...answers, res])
        setValidatedAnswers((prev) => ({ ...prev, [questionIndex]: res.isCorrect }));
        setIsSaveEnabled(false)
    };

    const handleNext = (): void => {
        if (currentStep <= questions.length) {
            setCurrentStep((prev) => prev + 1);
            setStudentSelectedAnswer(null)
            setIsSaveEnabled(false)
        }
    };

    const calculateScore = (): number => {
        return questions.reduce((score, question, index) => {
            return question.correctAnswer === answers[index].studentAnswer ? score + 1 : score;
        }, 0);
    };

    const handleSubmitQuiz = () => {
        let audit: AuditEmail = {
            ...formData,
            'answerSheet': answers,
            'score': calculateScore() + ' out of ' + questions.length,
            'finalScore': ((calculateScore() / questions.length) * 100).toFixed(2) + '%',
            'quizName': quizName
        }
        let response = sendEmail(audit)
        if (!response) {
            alert('Failed to submit! Please try to submit again!')
            setSubmitButtonText('Retry')
            setIsSaveEnabled(true)
        } else {
            setSubmitButtonText('Done!')
            setIsSubmitEnabled(true)//TODO change this to false
        }
    }

    const handleBasicInfo = () => {
        setFirstNameHasError(false)
        setLastNameHasError(false)
        let hasError = false

        //Validate form, show errors, only when good go next
        if (!formData.firstName || formData.firstName.trim().length < 1) {
            setFirstNameHasError(true)
            hasError = true
        }
        if (!formData.lastName || formData.lastName.trim().length < 1) {
            setLastNameHasError(true)
            hasError = true
        }
        if (!hasError) {
            handleNext()
        }
    }

    return (
        <Content>
            {currentStep === 0 && (
                <div className="basicForm">
                    <h2>Basic Information</h2>
                    <div className="labelWithError">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleInputChange}
                        />
                        <span className={firstNameHasError ? 'visible small-font' : 'hidden'}>Invalid first name!</span>
                    </div>
                    <div className="labelWithError">
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleInputChange}
                        />
                        <span className={lastNameHasError ? 'visible small-font' : 'hidden'}>Invalid last name!</span>
                    </div>
                    <button type="button" onClick={handleBasicInfo}>Register</button>
                </div>
            )}

            {currentStep > 0 && currentStep <= questions.length && (
                <div>
                    <span>Choose the best answer:</span>
                    <h2>Question {currentStep}: </h2>
                    <h4 className="center">{questions[currentStep - 1].question}</h4>
                    {questions[currentStep - 1].answers.map((answer) => (
                        <div key={answer.key}>
                            <form style={{ margin: '0 0 0 0' }}>
                                <div>
                                    <input type="radio"
                                        id={answer.key}
                                        name={`question-${currentStep - 1}`}
                                        value={answer.key}
                                        checked={studentSelectedAnswer?.answerKey === answer.key}
                                        onChange={() => handleAnswerSelect(currentStep - 1, answer.key)}
                                        disabled={validatedAnswers[currentStep - 1] !== undefined} />
                                    <label htmlFor={answer.key}>
                                        <span style={{
                                        color:
                                            validatedAnswers[currentStep - 1] === undefined
                                                ? 'white'
                                                : answer.key === questions[currentStep - 1].correctAnswer
                                                    ? 'black'
                                                    : answers[currentStep - 1].studentAnswer === answer.key
                                                        ? 'white'
                                                        : 'white',
                                        backgroundColor:
                                            validatedAnswers[currentStep - 1] === undefined
                                                ? 'transparent'
                                                : answer.key === questions[currentStep - 1].correctAnswer
                                                    ? 'lightgreen'
                                                    : answers[currentStep - 1].studentAnswer === answer.key
                                                        ? 'lightcoral'
                                                        : 'transparent',
                                    }}>{answer.item}</span></label>
                                </div>
                            </form>
                        </div>
                    ))}
                    <div className="flexButtons">
                        <button onClick={() => handleSave(currentStep - 1)} disabled={!isSaveEnabled}>Save</button>
                        <button onClick={handleNext} disabled={validatedAnswers[currentStep - 1] === undefined}>
                            {currentStep >= questions.length ? `Finish` : `Next`}
                        </button>
                    </div>
                </div>
            )}

            {currentStep > questions.length && (
                <div className="center">
                    <h2>Your Score</h2>
                    <h3>{calculateScore()} out of {questions.length}</h3>
                    <h2> {((calculateScore() / questions.length) * 100).toFixed(2)} %</h2>
                    <button onClick={handleSubmitQuiz} disabled={!isSubmitEnabled}>{submitButtonText}</button>
                </div>
            )}
        </Content>
    );
};

export default Stepper;