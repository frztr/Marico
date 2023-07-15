import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import LkPanel from './LkPanel'

const navitems=[
  {
    link:"usecases.html",
    content:"Use Cases"
  },
  {
    link:"about.html",
    content:"About"
  },
  {
    link:"pricing.html",
    content:"Pricing"
  },
  {
    link:"blog.html",
    content:"Blog"
  }
];
const lkpanelitems =
[
  {
    colored:false,
    text:"Login"
  },
  {
    colored:true,
    text:"Sign Up"
  }
];

const Header = ({className}) => {
  return (
    <div className={`${className} flex flex-row justify-between items-center`}>
        <Logo/>
        <Navbar items={navitems} ></Navbar>
        <LkPanel items={lkpanelitems} />
    </div>
  )
}

export default Header