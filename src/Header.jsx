import React from "react"
import { Link } from "react-router-dom"
import { BiMessageSquareAdd } from "react-icons/bi"

import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <div className="invisible"></div>
      <h1>Flashcards</h1>
      <Link to={"add"}>
        <BiMessageSquareAdd className="add-button" />
      </Link>
    </div>
  )
}

export default Header
