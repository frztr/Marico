import React from 'react'

const DemoComponentSteps = ({className,item}) => {
  return (
    <span className={`flex flex-row text-white text-2xl ${className} items-center mb-3`}>
    <span className={`flex items-center justify-center bg-[#2D2D2D] w-8 h-8 text-white text-lg aspect-square rounded-full mr-3`}>{item.index}</span>
    {item.text}
    </span>
  )
}

export default DemoComponentSteps