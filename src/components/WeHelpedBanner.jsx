import React from 'react'

const WeHelpedBanner = ({className}) => {
  return (
    <div className={`${className} flex items-center justify-center`}>
        <p className={`text-center w-2/3 text-7xl text-white font-semibold leading-normal`}>We've helped over 1,000 creators reclaim control of their audience.</p>
    </div>
  )
}

export default WeHelpedBanner