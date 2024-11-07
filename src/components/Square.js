import React from 'react'

const Square = ({value,onClick}) => {
  // console.log(props.onClick)
 
  return (
    <div onClick={onClick} className='cursor-pointer h-20 w-20 border border-black flex justify-center items-center'>
      <h1>{value}</h1>
    </div>
  )
}

export default Square
