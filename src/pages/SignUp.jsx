import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"
import "./Form.css"

const SignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signup, error, isLoading } = useSignup()
  const navigate = useNavigate()
  const { user } = useAuthContext()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(email, password)
  }

  if (user) {
    navigate("/")
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3 className="signup-title">Sign Up</h3>

      <label htmlFor="email">Email:</label>
      <input
        className="signup-input"
        id="email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label htmlFor="password">Password:</label>
      <input
        className="signup-input"
        id="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button disabled={isLoading}>Sign Up</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default SignUp
