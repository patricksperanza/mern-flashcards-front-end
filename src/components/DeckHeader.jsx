import React from "react"
import { Link } from "react-router-dom"
import { BiMessageSquareAdd } from "react-icons/bi"
import { AiOutlineHome } from "react-icons/ai"

import "./Header.css"

const DeckHeader = () => {
  return (
    <div className="header">
      <Link to="/">
        <AiOutlineHome className="button" />
      </Link>
      <h1>Flashcards</h1>
      <Link to={"../add"}>
        <BiMessageSquareAdd className="button" />
      </Link>
    </div>
  )
}

export default DeckHeader
