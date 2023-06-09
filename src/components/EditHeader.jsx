import React from "react"
import { Link } from "react-router-dom"
import { AiOutlineClose } from "react-icons/ai"

import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <div className="invisible"></div>
      <h1>Edit Card</h1>
      <Link to={"../menu"}>
        <AiOutlineClose className="button" />
      </Link>
    </div>
  )
}

export default Header
