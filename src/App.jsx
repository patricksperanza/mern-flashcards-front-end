import { useState, useEffect } from "react"
import { Outlet } from "react-router-dom"
import "./App.css"
import { useAuthContext } from "./hooks/useAuthContext"

const App = () => {
  const [questionData, setQuestionData] = useState([])
  const { user } = useAuthContext()

  // heroku link: "https://mern-flashcards-app.herokuapp.com/flashcards"

  useEffect(() => {
    const fetchFlashcards = async () => {
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

    if (user) {
      fetchFlashcards()
    }
  }, [user])

  return (
    <div>
      <Outlet context={[questionData, setQuestionData]} />
    </div>
  )
}

export default App
