import React from 'react'
import Demoblock from './Demoblock'

const MainBlock = ({className}) => {
    return (
        <div className={`flex flex-col items-center ${className}`}>
            <p className='text-white font-bold mainblock_text leading-relaxed text-center'>Own your audience.</p>
            <p className='mainblock_gradient_text font-bold mainblock_text leading-relaxed -mt-10 text-center'>So you don't lose them.</p>
            <Demoblock className={` max-w-2xl mt-32`}/>
        </div>
    )
}

export default MainBlock