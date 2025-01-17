import { ReactElement, useEffect, useState } from "react";
import AnimatedPage from "../components/AnimatedPage";
import Content from "../components/layout/Content/Content";
import { useLocation } from 'react-router'
import getQuiz from "../components/Quiz/quizFunctions";
import MultiStepForm from "../components/Quiz/MultiStepForm";

export default function Quiz(){

    let location = useLocation()
    const queryParameters = new URLSearchParams(location.search)

    let [quizId, setQuizId] = useState(queryParameters.get("id"))
    let [quiz, setQuiz] = useState({})
    let [quizName, setQuizName] = useState('')
    const [content, setContent] = useState(<p>Loading Quiz ...</p>);

    useEffect(() => {
        if (quizId){
            let res = getQuiz(quizId)
            if (res != null && res.length != 0){
                let definition = res[0]
                setQuiz(definition.quiz)
                setQuizName(definition.name)
                setContent(<MultiStepForm quiz={definition.quiz} />)
            } 
            else 
            {
                setContent(<span>Invalid quiz! Please check the URL!</span>)
            }
        } else {
            setContent(<span>No quiz specified! Please check the URL and try again!</span>)
        }
    }, [])

    return(
        <AnimatedPage>
            <Content>
                <h1 className="major">Student Quiz{quizName && ': ' + quizName}</h1>
                {content}
            </Content>
        </AnimatedPage>
    )
}