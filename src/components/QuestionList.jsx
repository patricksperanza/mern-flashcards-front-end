import React from "react"
import { useOutletContext } from "react-router-dom"
import "./QuestionList.css"
import { AiOutlinePlus, AiOutlineEdit } from "react-icons/ai"
import { BsTrash3 } from "react-icons/bs"
import { Link } from "react-router-dom"

const QuestionList = () => {
  const [questionData, setQuestionData] = useOutletContext()
  return (
    <div className="container">
      <Link to="/add" className="add-link">
        <button className="button-22 add-btn">
          <p>Add New Question</p>
          <AiOutlinePlus />
        </button>
      </Link>
      <div className="list">
        {questionData.map((q) => {
          return (
            <div key={q.id} className="question">
              <div className="question-text">
                <h6 className="list-question">{q.question}</h6>
                <p className="list-answer">{q.answer}</p>
              </div>
              <div className="edit-btns">
                <AiOutlineEdit className="btn" />
                <BsTrash3 className="btn" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default QuestionList
