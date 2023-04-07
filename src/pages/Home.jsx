import React from "react"
import { Link } from "react-router-dom"
import HomeHeader from "../components/HomeHeader"
import "./Home.css"

const Home = () => {
  return (
    <>
      <HomeHeader />
      <div className="main">
        <h4>Welcome to Front End Flashcards!</h4>
        <p>Select your deck below to begin</p>
        <Link to="/deck">
          <h6 className="link">Front End</h6>
        </Link>
      </div>
    </>
  )
}

export default Home
