import { useState } from "react"
import Button from "../components/Button"
import "./Add.css"
import AddHeader from "../components/AddHeader"
import { useOutletContext } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"

const Add = () => {
  const [questionData, setQuestionData] = useOutletContext()
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
  })
  const { user } = useAuthContext()

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
          onClick={async (e) => {
            e.preventDefault()
            // verify auth
            if (!user) {
              throw Error("You must be logged in")
              return
            }

            // post the new flashcard
            await fetch(
              "https://mern-flashcards-app.herokuapp.com/flashcards",
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
            setFormData({ question: "", answer: "" })
          }}
          text="Submit"
        />
      </form>
    </>
  )
}

export default Add
