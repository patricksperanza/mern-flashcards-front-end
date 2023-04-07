import { useState } from "react"
import axios from "axios"
import Button from "./Button"
import "./Add.css"
import AddHeader from "./AddHeader"

const Add = () => {
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
  })

  return (
    <>
      <AddHeader />
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
                "https://mern-flashcards-app.herokuapp.com/flashcards",
                formData
              )
              .then((res) => console.log(res.data))

            setFormData({ question: "", answer: "" })
          }}
          text="Submit"
        />
      </form>
    </>
  )
}

export default Add
