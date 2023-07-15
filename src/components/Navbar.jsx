import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = ({items,className}) => {
  return (
    <div className={`${className} flex flex-row gap-x-10`}>
      {items.map((x,i) => (<NavbarItem key={i} link={x.link}>{x.content}</NavbarItem>))}
    </div>
  )
}

export default Navbar