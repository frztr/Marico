import React from 'react'
import Creator from './Creator';

const items = 
[
    {
        title:"Reduced Anxiety",
        image:"Smile_emoji.png",
        text:"Never worry about losing your audience."
    },
    {
        title:"Lower Workload",
        image:"Happy_emoji.png",
        text:"Just share one link. We'll handle the rest."
    },
    {
        title:"More Time",
        image:"Party_emoji.png",
        text:"Spend less time on marketing tools"
    }
];

const Creators = ({className}) => {
  return (
    <div className={`${className} flex flex-col items-center`}>
        <p className="leading-normal font-semibold text-7xl text-white mb-16">Why Creators Love Marico</p>
        <div className="flex flex-row gap-x-28">
            {items.map((x,i)=>(<Creator key={i} item={x}/>))}
        </div>
    </div>
  )
}

export default Creators