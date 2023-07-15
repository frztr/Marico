import React from 'react'
import DemoComponentSteps from './DemoComponentSteps'
import Button from './Button'

const DemoComponent = ({ className, data }) => {
    return (
        <div className={`grid grid-cols-2 gap-x-16 ${className}`}>
            <div className='flex flex-col justify-between'>
                <p className="text-white font-medium leading-normal text-3xl">{data.title}</p>
                <div className={`flex flex-col`}>
                    <p className="text-7xl text-white font-semibold leading-normal mb-7">{data.text}</p>
                    {data.steps.map((x, i) => (<DemoComponentSteps item={x} />))}
                </div>
                <div className="flex flex-row gap-x-6">
                    {data.buttons.map((x, i) => (<Button className={`px-6 py-4`} bordered={x.bordered} item={x} />))}
                </div>
            </div>
            <div className={`flex relative`}>
                <span className='absolute w-72 aspect-square bg-[#8B8B8B] bottom-0 right-[22%] translate-y-[50%] z-0'/>
                <img className='h-full object-cover z-20]' style={{ filter: data.image.filter }} src={require(`../images/${data.image.name}`)} alt="" />
            </div>
        </div>
    )
}

export default DemoComponent