import React from 'react'

const CreatorsCreated = ({className,size}) => {
    return (
        <p className={`text-gray flex items-center ${className}`} style={{fontSize:size*0.75+'rem'}}>
            <span className={`bg-[#0FC65C] rounded-full border-${size*2} border-[#070e0a40]`} style={{padding:size/4+'rem', borderWidth:size/8+'rem',marginRight:size/4+'rem'}}></span>
            <span><span className='text-white font-bold mr-2'>1000+</span> creators have already started</span>
        </p>
    )
}

export default CreatorsCreated