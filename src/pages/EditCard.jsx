import { useState } from "react"
import Button from "../components/Button"
import "./Add.css"
import EditHeader from "../components/EditHeader"
import { Link, useOutletContext, useLocation } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"

const Edit = () => {
  const { user } = useAuthContext()
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
          onClick={async (e) => {
            e.preventDefault()
            console.log(formData)
            // verify auth
            if (!user) {
              throw Error("You must be logged in")
              return
            }

            // post the new flashcard
            await fetch(
              "http://localhost:5000/flashcards/update/" + location.state.id,
              {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer: ${user.token}`,
                },
              }
            )

            // get flashcards
            const response = await fetch("http://localhost:5000/flashcards", {
              headers: {
                Authorization: `Bearer: ${user.token}`,
              },
            })
            const data = await response.json()
            console.log(data)
            setQuestionData(data)
            // setFormData({ question: "", answer: "" })
          }}
          text="Save"
        />
      </form>
    </>
  )
}

export default Edit
