import React, { useState, useEffect } from "react"
import axios from "axios"
import Button from "./Button"

import "./Card.css"

const Card = ({ questionData }) => {
  const [question, setQuestion] = useState({
    question: "Welcome",
    answer: "Click New Question",
  })
  const [displayAnswer, setDisplayAnswer] = useState(true)

  const getNewQuestion = (e) => {
    e.stopPropagation()
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
