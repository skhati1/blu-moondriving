import allQuestions from './allQuestions'
import { QuizDefinition } from './types';

export default function getQuiz(id: string){
    const questions = allQuestions()
    const fetchedQuiz: QuizDefinition[] = questions
            .filter((item) => item.key === id)
            .map((item) => item);

    if (fetchedQuiz)
    {
        return fetchedQuiz
    }
    return null
}