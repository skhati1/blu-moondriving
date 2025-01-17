import { QuizItem } from "../quizFunctions"
import Stepper from "../Stepper"

export interface MultiStepFormProps{
    quiz: QuizItem[]
}

export default function MultiStepForm(props: MultiStepFormProps){
    //const cards = props.quiz.map((item: QuizItem) => <QuestionCard key={item.id} item={item}/>)
    return (
        <div>
            <Stepper questions={props.quiz} />
        </div>
    )
}