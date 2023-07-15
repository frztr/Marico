import React from 'react'
import Button from './Button'
import CreatorsCreated from './CreatorsCreated'

const Demoblock = ({ className }) => {
  return (
    <div className={`${className} flex flex-col items-center`}>
      <p className="text-white leading-normal text-4xl text-center mb-12">Turn your audience into email and
        text message subscribers.</p>
      <div className="grid grid-cols-2 gap-x-6 w-[-webkit-fill-available] mx-5 mb-5">
        <Button className={`py-6 text-xl`} item={{ colored: true, text: "Get Started Now" }} />
        <Button className={`py-6 text-xl`}  item={{ colored: false, text: "View A Demo",bordered:true }} />
      </div>
      <CreatorsCreated size={2} />
    </div>
  )
}

export default Demoblock