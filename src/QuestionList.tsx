import React from "react"
import "./QuestionList.css"

const QuestionList = ({ questionData }) => {
  console.log(questionData)
  return (
    <div className="container">
      <h3>Questions</h3>
      <div className="list">
        {questionData.map((q) => {
          return (
            <div key={q.id}>
              <h6>{q.question}</h6>
              <p>{q.answer}</p>
              <hr />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default QuestionList
