import React from 'react'

const ExpertAgree = ({className}) => {
  return (
    <div className={`${className} flex flex-col gap-y-12`}>
        <p className="text-7xl text-white font-semibold leading-normal text-center">Experts Agree</p>
        <img src={require(`../images/experts.png`)} alt="" srcset="" />
    </div>
  )
}

export default ExpertAgree