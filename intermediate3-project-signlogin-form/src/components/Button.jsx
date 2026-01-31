import React from 'react'

const Button = (props) => {
  return (
    <button className={`w-full cursor-pointer text-richblack-900 px-4 py-2 bg-yellow-50 text-base rounded-lg ${props.className}`}>{props.children}</button>
  )
}

export default Button