import React from 'react'
import LkButton from './Button'

const LkPanel = ({items,className}) => {
  return (
    <div className={`${className} flex flex-row gap-x-6 items-center`}>
      {items.map((x,i)=>(<LkButton key={i} className={`px-6 py-3`} item={x} />))}
    </div>
  )
}

export default LkPanel