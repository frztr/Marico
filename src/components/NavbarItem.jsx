import React from 'react'

const NavbarItem = ({link,children,className}) => {
  return (
    <a className={`${className} text-gray font-medium hover:text-blue transition-all`} href={`/${link}`}>{children}</a>
  )
}

export default NavbarItem