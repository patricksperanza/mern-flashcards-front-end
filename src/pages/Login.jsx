import { useState, useContext, useEffect } from "react"
import { useLogin } from "../hooks/useLogin"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import "./Form.css"

const Login = () => {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login, error, isLoading } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(email, password)
  }

  if (user) {
    navigate("/")
  }

  return (
    <>
      <h3 className="login-title">Login</h3>
      <form className="login" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="login-input"
        />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="login-input"
        />

        <button disabled={isLoading}>Login</button>
        {error && <div className="error">{error}</div>}
      </form>
    </>
  )
}

export default Login
