import { useAuthContext } from "./useAuthContext"
import { useOutletContext } from "react-router-dom"

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const [questionData, setQuestionData] = useOutletContext()

  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user")

    // dispatch logout action
    dispatch({ type: "LOGOUT" })

    setQuestionData([])
  }

  return { logout }
}
