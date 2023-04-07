import React from "react"
import { useOutletContext } from "react-router-dom"
import "./QuestionList.css"
import { AiOutlinePlus } from "react-icons/ai"
import { Link } from "react-router-dom"

const QuestionList = () => {
  const [questionData, setQuestionData] = useOutletContext()
  return (
    <div className="container">
      <h3>Questions</h3>
      <Link to="/add" className="add-link">
        <button className="button-22 add-btn">
          <p>Add New Question</p>
          <AiOutlinePlus />
        </button>
      </Link>
      <div className="list">
        {questionData.map((q) => {
          return (
            <div key={q.id}>
              <h6 className="list-question">{q.question}</h6>
              <p className="list-answer">{q.answer}</p>
              <hr />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default QuestionList
