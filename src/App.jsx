import { useState, useEffect } from "react"
import axios from "axios"
import { Outlet } from "react-router-dom"
import "./App.css"

const App = () => {
  const [questionData, setQuestionData] = useState([])

  useEffect(() => {
    axios
      .get("https://mern-flashcards-app.herokuapp.com/flashcards")
      .then((res) => setQuestionData(res.data))
  }, [])

  return (
    <div>
      <Outlet context={[questionData, setQuestionData]} />
    </div>
  )
}

export default App
