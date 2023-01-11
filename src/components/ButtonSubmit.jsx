import React from 'react'
import "../sign.css"

export default function ButtonSubmit(props) {
    let { type , text , fx} = props
  return (
    <button type={type} className="submit2" onClick={fx}>{text}</button>
  )
}