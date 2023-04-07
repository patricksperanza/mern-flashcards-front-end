import Header from "./Header"
import Card from "./Card"
import { useState, useEffect } from "react"
import axios from "axios"
import "./App.css"
import QuestionList from "./QuestionList"

const App = () => {
  const [questionData, setQuestionData] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:5000/flashcards")
      .then((res) => setQuestionData(res.data))
  }, [])

  return (
    <div>
      <Header />
      <Card questionData={questionData} />
      <QuestionList questionData={questionData} />
    </div>
  )
}

export default App