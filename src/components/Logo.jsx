import React from 'react'
import image from '../images/logo.svg'

const Logo = () => {
  return (
    <div className={`flex flex-row gap-x-4 items-center`} > 
      <img src={image} alt="" srcSet="" className={`w-11 aspect-square object-cover`} />
      <p className="text-white font-extrabold text-4xl">Marico</p>
    </div>
  )
}

export default Logo