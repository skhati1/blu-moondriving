import { useEffect, useState } from "react";
import AnimatedPage from "../components/AnimatedPage";
import Content from "../components/layout/Content/Content";
import { useLocation } from 'react-router'
import quizFunctions from "../components/Quiz/quizFunctions";
import Stepper from "../components/Quiz/Stepper";

export default function Quiz() {

    let location = useLocation()
    const queryParameters = new URLSearchParams(location.search)

    let quizId = queryParameters.get("id")

    let [quizName, setQuizName] = useState('')
    const [content, setContent] = useState(<p>Loading Quiz ...</p>);

    useEffect(() => {
        if (quizId) {
            let res = quizFunctions.getQuiz(quizId)
            if (res != null && res.length != 0) {
                let definition = res[0]
                setQuizName(definition.name)
                setContent(() => {
                    return (
                        <>
                            <Stepper questions={definition.quiz} quizName={definition.name} />
                        </>
                    )
                })
            }
            else {
                setContent(<span>Invalid quiz! Please check the URL!</span>)
            }
        } else {
            setContent(<span>No quiz specified! Please check the URL and try again!</span>)
        }
    }, [])

    return (
        <AnimatedPage>
            <Content>
                <h1 className="major">Student Quiz{quizName && ': ' + quizName}</h1>
                {content}
            </Content>
        </AnimatedPage>
    )
}