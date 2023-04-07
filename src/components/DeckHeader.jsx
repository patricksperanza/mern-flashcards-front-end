import React from "react"
import { Link } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineHome } from "react-icons/ai"

import "./Header.css"

const DeckHeader = () => {
  return (
    <div className="header">
      <Link to="/">
        <AiOutlineHome className="button" />
      </Link>
      <h1>Flashcards</h1>
      <Link to={"../menu"}>
        <GiHamburgerMenu className="button" />
      </Link>
    </div>
  )
}

export default DeckHeader
