import React from 'react'

const Creator = ({className,item}) => {
  return (
    <div className={` flex flex-col gap-y-3 items-center ${className}`}>
        <span className={`font-semibold text-white text-4xl flex flex-row items-center gap-x-2`}><img className='w-8 h-8 object-cover' src={`${require(`../images/${item.image}`)}`} alt="" srcSet="" />{item.title}</span>
        <span className={`text-2xl text-gray text-center`}>{item.text}</span>
    </div>
  )
}

export default Creator