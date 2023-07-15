import React from 'react'

const LkButton = ({ item, className,  onclck }) => {
  return (
    <button onclick={handleclick} className={`rounded-xl text-xl font-medium leading-6 ${className} ${item.colored ? 'bg-sky text-white' : 'text-gray border-gray'} ${ item.bordered ? 'border-1' : ''}`} >{item.text}</button>
  )

  function handleclick(e)
  {
    e.preventDefault();
    onclick();
  }
}

export default LkButton