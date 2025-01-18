
export interface AuditEmail {
    answerSheet: AnswerSheet[];
    score: string;
    finalScore: string;
    firstName: string;
    lastName: string;
    quizName: string
}

export interface AnswerSheet{
    question: string,
    studentAnswer: string,
    studentAnswerText: string
    correctAnswer: string,
    correctAnswerText: string
    isCorrect: boolean
}

export interface StepperProps {
    questions: QuizItem[];
    quizName: string;
}


export interface QuizDefinition {
    name: string,
    key: string,
    quiz: QuizItem[]
}

export interface QuizItem {
    question: string,
    answers: QuizAnswer[],
    correctAnswer: string
}

export interface QuizAnswer {
    key: string,
    item: string
}
