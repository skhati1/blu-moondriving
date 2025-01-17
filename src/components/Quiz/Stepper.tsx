import React, { useState } from 'react';
import { QuizItem } from './quizFunctions';
import Content from '../layout/Content/Content';
import './stepper.css'

interface StepperProps {
    questions: QuizItem[];
}

const Stepper: React.FC<StepperProps> = ({ questions }) => {

    const [submitButtonText, setSubmitButtonText] = useState('Submit')
    const [isSubmitEnabled, setIsSubmitEnabled] = useState(true)
    const [isSaveEnabled, setIsSaveEnabled] = useState(false)

    const [firstNameHasError, setFirstNameHasError] = useState(false)
    const [lastNameHasError, setLastNameHasError] = useState(false)
    const [emailHasError, setEmailHasError] = useState(false)


    const [currentStep, setCurrentStep] = useState<number>(0);
    const [formData, setFormData] = useState<{ firstName: string; lastName: string; email: string }>({
        firstName: '',
        lastName: '',
        email: '',
    });
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [validatedAnswers, setValidatedAnswers] = useState<Record<number, boolean>>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleAnswerSelect = (questionIndex: number, answerKey: string): void => {
        setAnswers((prev) => ({ ...prev, [questionIndex]: answerKey }));
        setIsSaveEnabled(true)
    };

    const handleSave = (questionIndex: number): void => {
        const isCorrect = answers[questionIndex] === questions[questionIndex].correctAnswer;
        setValidatedAnswers((prev) => ({ ...prev, [questionIndex]: isCorrect }));
        setIsSaveEnabled(false)
    };

    const handleNext = (): void => {
        if (currentStep <= questions.length) {
            setCurrentStep((prev) => prev + 1);
            setIsSaveEnabled(false)
        }
    };

    const calculateScore = (): number => {
        return questions.reduce((score, question, index) => {
            return question.correctAnswer === answers[index] ? score + 1 : score;
        }, 0);
    };



    const handleSubmitQuiz = () => {
        let audit = {
            ...formData,
            'answerSheet': { ...answers },
            'score': calculateScore() + '/' + questions.length,
            'finalScore': ((calculateScore() / questions.length) * 100).toFixed(2) + '%'
        }
        console.log(audit)
        setSubmitButtonText('Done!')
        setIsSubmitEnabled(false)
    }
    const isEmailValid = (val: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(val);
    }

    const handleBasicInfo = () => {
        setFirstNameHasError(false)
        setLastNameHasError(false)
        setEmailHasError(false)
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
        if (!formData.email || formData.email.trim().length < 1) {
            setEmailHasError(true)
            hasError = true
        }
        if (!isEmailValid(formData.email)) {
            setEmailHasError(true)
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
                    <div className="labelWithError">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}s
                        />
                        <span className={emailHasError ? 'visible small-font' : 'hidden'}>Invalid email address!</span>
                    </div>
                    <button type="button" onClick={handleBasicInfo}>Next</button>
                </div>
            )}

            {currentStep > 0 && currentStep <= questions.length && (
                <div>
                    <h2>Question {currentStep}: </h2>
                    <h4 className="center">{questions[currentStep - 1].question}</h4>
                    {questions[currentStep - 1].answers.map((answer) => (
                        <>
                            <form style={{ margin: '0 0 0 0' }}>
                                <div key={answer.key}>
                                    <input type="radio"
                                        id={answer.key}
                                        name={`question-${currentStep - 1}`}
                                        value={answer.key}
                                        checked={answers[currentStep - 1] === answer.key}
                                        onChange={() => handleAnswerSelect(currentStep - 1, answer.key)}
                                        disabled={validatedAnswers[currentStep - 1] !== undefined} />
                                    <label
                                        htmlFor={answer.key}
                                        style={{
                                            color:
                                                validatedAnswers[currentStep - 1] === undefined
                                                    ? 'white'
                                                    : answer.key === questions[currentStep - 1].correctAnswer
                                                        ? 'black'
                                                        : answers[currentStep - 1] === answer.key
                                                            ? 'black'
                                                            : 'white',
                                            backgroundColor:
                                                validatedAnswers[currentStep - 1] === undefined
                                                    ? 'transparent'
                                                    : answer.key === questions[currentStep - 1].correctAnswer
                                                        ? 'lightgreen'
                                                        : answers[currentStep - 1] === answer.key
                                                            ? 'lightcoral'
                                                            : 'transparent',
                                        }}
                                    >{answer.item}</label>
                                </div>
                            </form>
                        </>
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