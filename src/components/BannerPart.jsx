import React from 'react'

const BannerPart = ({className,item}) => {
  return (
    <div className={`${className} flex flex-col bg-[#0D0D0D] pl-11 pt-8`}>
        <p className="leading-normal text-[4rem] text-[#0FC65C]">{item.title}</p>
        <div className={`flex flex-col my-auto`}>
        {item.pars.map((x)=>(<p className={`text-${x.color} text-7xl leading-tight font-semibold`}>{x.text}</p>))}
        </div>
        {item.children}
    </div>
  )
}

export default BannerPart