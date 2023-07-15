import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'

const navitems = [
    {
        link: "about.html",
        content: "About"
    },
    {
        link: "pricing.html",
        content: "Pricing"
    },
    {
        link: "blog.html",
        content: "Blog"
    },
    {
        link: "signin.html",
        content: "Sign In"
    }
];

const Footer = ({ className }) => {
    return (
        <div className={`${className} flex flex-row justify-between items-center`}>
            <div className="flex flex-col">
                <Logo className={``} />
                <p className={`text-gray text-2xl leading-normal`}>info@marico.co</p>
            </div>
            <Navbar items={navitems} />
        </div>
    )
}

export default Footer