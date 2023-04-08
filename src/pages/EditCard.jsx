import { useState } from "react"
import axios from "axios"
import Button from "../components/Button"
import "./Add.css"
import EditHeader from "../components/EditHeader"
import { Link, useOutletContext, useLocation } from "react-router-dom"

const Edit = () => {
  const [questionData, setQuestionData] = useOutletContext()
  const location = useLocation()
  const [formData, setFormData] = useState({
    question: location.state.question,
    answer: location.state.answer,
  })

  return (
    <>
      <EditHeader />
      <form className="form">
        <div className="form-field">
          <label htmlFor="question">Question</label>
          <textarea
            className="question-area"
            onChange={(e) => {
              setFormData({ ...formData, question: e.target.value })
            }}
            value={formData.question}
            id="question"
            type="text"
          />
        </div>
        <div className="form-field">
          <label htmlFor="answer">Answer</label>
          <textarea
            className="answer-area"
            onChange={(e) => {
              setFormData({ ...formData, answer: e.target.value })
            }}
            value={formData.answer}
            id="answer"
            type="text"
          />
        </div>
        <Button
          onClick={(e) => {
            e.preventDefault()
            console.log(formData)
            axios
              .post(
                "https://mern-flashcards-app.herokuapp.com/flashcards/update/" +
                  location.state.id,
                formData
              )
              .then((res) => {
                console.log(res.data)

                axios
                  .get("https://mern-flashcards-app.herokuapp.com/flashcards")
                  .then((res) => setQuestionData(res.data))
              })
          }}
          text="Save"
        />
      </form>
    </>
  )
}

export default Edit
