export default function QuestionAnswerScreen(){
    return(
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
    )
}