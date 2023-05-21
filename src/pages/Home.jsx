import { useAuthContext } from "../hooks/useAuthContext"
import { useLogout } from "../hooks/useLogout"
import { Link } from "react-router-dom"
import HomeHeader from "../components/HomeHeader"
import "./Home.css"

const Home = () => {
  const { user } = useAuthContext()
  const { logout } = useLogout()

  const handleClick = () => {
    logout()
  }

  return (
    <>
      <HomeHeader />
      <div className="main">
        <h4>Welcome to Front End Flashcards!</h4>
        {user !== null ? (
          <>
            {/* Get Username from email */}
            <h4>
              {user.email.split("@")[0][0].toUpperCase() +
                user.email.split("@")[0].slice(1)}
            </h4>
            <div className="btns">
              <Link to="/deck">
                <h6 className="link">Go to Cards</h6>
              </Link>
              <h6 className="link" onClick={handleClick}>
                Log Out
              </h6>
            </div>
          </>
        ) : (
          <>
            <div className="btns">
              <Link to="/signup">
                <h6 className="link">Sign Up</h6>
              </Link>
              <Link to="/login">
                <h6 className="link">Login</h6>
              </Link>
            </div>
            <div className="guest-info">
              <p>Guest Login: </p>
              <p>username: guest@guest.com </p>
              <p>password: Guest123!</p>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Home
