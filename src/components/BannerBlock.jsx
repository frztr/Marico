import React from 'react'
import Button from './Button'
import BannerPart from './BannerPart';

const BannerParts = 
[
    {
        title:"One Link",
        pars:
        [
            {
                color:"gray",
                text:"ALL You Create."
            },
            {
                color:"white",
                text:"One Link"
            }
        ],
        children: <img className='w-[-webkit-fill-available] object-cover' src={require('../images/Mobile_body.png')}></img>
    },
    {
        title:"Collect Subscribers",
        pars:
        [
            {
                color:"gray",
                text:"Emails."
            },
            {
                color:"gray",
                text:"Phone #s."
            },
            {
                color:"white",
                text:"All Yours."
            }
        ]
    }
];

const BannerBlock = ({className}) => {
    return (
        <div className={`flex flex-col gap-y-12 ${className} items-center`}>
            <div className='grid grid-cols-2 gap-x-6'>
                {BannerParts.map((x)=>(<BannerPart item={x} />))}
            </div>
            <Button className={` py-5 px-20 text-5 leading-normal`} item={{colored:true,text:"Get Started"}}/>
        </div>
    )
}

export default BannerBlock