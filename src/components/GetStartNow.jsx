import React from 'react'
import logo from '../images/logo.svg'
import Button from './Button'
import CreatorsCreated from './CreatorsCreated'

const GetStartNow = ({className}) => {
  return (
    <div className={`${className} flex flex-col items-center`}>
        <img className='object-cover w-40' src={logo} alt="" srcset="" />
        <p className='font-bold text-white text-8xl leading-snug text-center mt-5'>Get Started Now</p>
        <p className=' text-white text-5xl leading-snug text-center'>Setup is easy and takes under 5 minutes.</p>
        <Button className={`mt-4 py-7 px-28`} item={{colored:true,text:"Get Started Now"}}/>
        <CreatorsCreated className={`mt-6`} size={3} />
    </div>
  )
}

export default GetStartNow