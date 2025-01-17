import allQuestions from './allQuestions.json'

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

export default function getQuiz(id: string){
    const fetchedQuiz: QuizDefinition[] = allQuestions
            .filter((item) => item.key === id)
            .map((item) => item);

    if (fetchedQuiz)
    {
        return fetchedQuiz
    }
    return null
}