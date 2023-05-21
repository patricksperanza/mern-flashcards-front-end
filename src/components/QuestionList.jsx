import React from "react"
import { useOutletContext } from "react-router-dom"
import "./QuestionList.css"
import { AiOutlinePlus, AiOutlineEdit } from "react-icons/ai"
import { BsTrash3 } from "react-icons/bs"
import { Link } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"

const QuestionList = () => {
  const { user } = useAuthContext()
  const [questionData, setQuestionData] = useOutletContext()

  const deleteQuestion = async (id) => {
    // verify auth
    if (!user) {
      throw Error("You must be logged in")
      return
    }

    // post the new flashcard
    await fetch("https://mern-flashcards-app.herokuapp.com/flashcards/" + id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer: ${user.token}`,
      },
    })

    // get flashcards
    const response = await fetch(
      "https://mern-flashcards-app.herokuapp.com/flashcards",
      {
        headers: {
          Authorization: `Bearer: ${user.token}`,
        },
      }
    )
    const data = await response.json()
    console.log(data)
    setQuestionData(data)
  }
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
            <div key={q._id} className="question">
              <div className="question-text">
                <h6 className="list-question">{q.question}</h6>
                <p className="list-answer">{q.answer}</p>
              </div>
              <div className="edit-btns">
                <Link
                  to="/update"
                  className="btn"
                  state={{ question: q.question, answer: q.answer, id: q._id }}
                >
                  <AiOutlineEdit />
                </Link>
                <BsTrash3
                  className="btn"
                  onClick={() => deleteQuestion(q._id)}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default QuestionList
