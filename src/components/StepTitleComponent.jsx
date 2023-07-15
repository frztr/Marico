import React from 'react'
import Button from './Button'

const StepTitleComponent = ({className,item}) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
        <p className={`text-sky text-2xl leading-normal text-center font-semibold`}>STEP {item.index}</p>
        <p className={`text-white font-semibold text-7xl leading-normal text-center`}>{item.title}</p>
        <p className="text-3xl leading-normal text-gray text-center mb-8">{item.text}</p>
        {item.button!=null? <Button className={`py-6 px-12`}  item={item.button} />:''}
    </div>
  )
}

export default StepTitleComponent