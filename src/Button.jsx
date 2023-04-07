import React from "react"

const Button = ({ text, color, onClick }) => {
  return (
    <button
      onClick={(e) => onClick(e)}
      style={{ backgroundColor: color }}
      className="button-22"
      role="button"
    >
      {text}
    </button>
  )
}

export default Button
