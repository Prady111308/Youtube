import React from 'react'

const Button = ({name,handleClick}) => {
  return (
    <button className="bg-gray-100 rounded-lg px-4 py-1 mx-1 text-sm font-semibold cursor-pointer hover:bg-gray-300" onClick={()=>handleClick(name)}>{name}</button>
  )
}

export default Button