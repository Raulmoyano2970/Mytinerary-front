import React from 'react'

export default function FormCity(props) {
    let { continent, id, refId, fx, valor } = props
  return (
    <div>
        <label>
        <input type="checkbox" name={continent} id={id} value={valor} ref={refId} onClick={fx}/>{continent}
        </label>

    </div>
  )
}