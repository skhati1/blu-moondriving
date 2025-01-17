import { QuizItem } from "../../quizFunctions";

interface QuestionCardProps {
    item: QuizItem;
}

export default function QuestionCard(props: QuestionCardProps){
    return(
        <div>
            <br />
            <p>Question: {props.item.question}</p>
            <form>
                {props.item.answers.map((item) => 
                    <div key={item.key}>
                        <input type="radio" id={item.key} name={props.item.question} value={item.item}/>
                        <label htmlFor={item.key}>{item.item}</label>
                        <br />
                    </div>
                )}
            </form>
        </div>
    )
}