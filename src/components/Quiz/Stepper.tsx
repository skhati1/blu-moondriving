import React, { useRef, useState } from 'react';
import Content from '../layout/Content/Content';
import './stepper.css'
import { AnswerSheet, AuditEmail, StepperProps } from './types';
import FinishScreen from './components/FinishScreen';
import BasicInfoScreen from './components/BasicInfoScreen';

interface StudentResponse {
    questionIndex: number,
    answerKey: string
}

//https://onlinehashtools.com/generate-random-md5-hash

const Stepper: React.FC<StepperProps> = ({ questions, quizName }) => {
    const [basicInfo, setBasicInfo] = useState({ firstName: '', lastName: ''})
    const auditAnswerSheet: AnswerSheet[] = []
    let initialAnswers: AnswerSheet[] = []

    const [isSaveEnabled, setIsSaveEnabled] = useState(false)
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [answers, setAnswers] = useState(initialAnswers);
    const [validatedAnswers, setValidatedAnswers] = useState<Record<number, boolean>>({});
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
        if (studentSelectedAnswer === null) {
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

    const buildAuditReport = (): AuditEmail => {
        let audit: AuditEmail = {
            'firstName': basicInfo.firstName,
            'lastName': basicInfo.lastName,
            'answerSheet': answers,
            'score': calculateScore() + ' out of ' + questions.length,
            'finalScore': ((calculateScore() / questions.length) * 100).toFixed(2) + '%',
            'quizName': quizName
        }
        return audit
    }

    const onBasicInfoSubmit = (firstName: string, lastName: string): void => {
        setBasicInfo({firstName, lastName})
        handleNext()
    }

    return (
        <Content>
            {currentStep === 0 && (
                <BasicInfoScreen onBasicInfoSubmit={onBasicInfoSubmit} />
            )}

            {currentStep > 0 && currentStep <= questions.length && (
                <div>
                    <span>Choose the best answer:</span>
                    <h2>Question {currentStep}: </h2>
                    <h4 className="center">{questions[currentStep - 1].question}</h4>
                    <div className="centerMargins">
                        {questions[currentStep - 1].image !== undefined && 
                        <>
                            <img className="centerMargins" 
                                src={questions[currentStep - 1].image} 
                                width={questions[currentStep - 1].imageWidth}
                                height={questions[currentStep - 1].imageHeight} 
                            />
                        </>}
                    </div>
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
                                                        ? 'white'
                                                        : answers[currentStep - 1].studentAnswer === answer.key
                                                            ? 'white'
                                                            : 'white',
                                            backgroundColor:
                                                validatedAnswers[currentStep - 1] === undefined
                                                    ? 'transparent'
                                                    : answer.key === questions[currentStep - 1].correctAnswer
                                                        ? ' #1d8348 '
                                                        : answers[currentStep - 1].studentAnswer === answer.key
                                                            ? '#CD5C5C'
                                                            : 'transparent',
                                        }}>&nbsp;{answer.item}&nbsp;</span></label>
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
                <FinishScreen 
                    calculateScore={calculateScore} 
                    totalQuestions={questions.length} 
                    auditReport={buildAuditReport()} 
                />
            )}
        </Content>
    );
};

export default Stepper;