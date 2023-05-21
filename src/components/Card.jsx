import React, { useState, useEffect } from "react"
import { useOutletContext } from "react-router-dom"

import Button from "./Button"

import "./Card.css"

const Card = () => {
  const [questionData, setQuestionData] = useOutletContext()
  const [question, setQuestion] = useState({
    question: "Welcome",
    answer: "Click New Question",
  })
  const [displayAnswer, setDisplayAnswer] = useState(true)

  const getNewQuestion = (e) => {
    e.stopPropagation()
    if (questionData.length === 0) {
      setQuestion({
        question: "Welcome",
        answer: "You must add new cards first!",
      })
      return
    }
    if (!displayAnswer) return
    const i = Math.floor(Math.random() * questionData.length)
    setQuestion(questionData[i])
    setDisplayAnswer(false)
  }

  return (
    <div
      className="card"
      onClick={() => {
        setDisplayAnswer(true)
      }}
    >
      <div className="card-question">
        <h3>{question.question}</h3>
      </div>
      <div className="card-answer">
        {displayAnswer && <p>{question.answer}</p>}
      </div>
      <div className="card-btns">
        <Button onClick={getNewQuestion} text="New Question" />
      </div>
    </div>
  )
}

export default Card

// {
//   /* <Button onClick={getNewQuestion} text="Easy" color="#14CC60" /> */
// }
// {
//   /* <Button onClick={getNewQuestion} text="Medium" color="#E2DE84" />
//         <Button onClick={getNewQuestion} text="Hard" color="#D91E36" /> */
// }
