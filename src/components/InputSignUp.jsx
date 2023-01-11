import React from 'react'

export default function InputSignUp(props) {
    let { type , placeholder ,refId} = props
  return (
    <input className='form__input' type={type} placeholder={placeholder} ref={refId} />
  )
}