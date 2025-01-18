import allQuestions from './allQuestions.json'
import { QuizDefinition } from './types';

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