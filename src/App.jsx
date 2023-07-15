import React from 'react'
import Header from './components/Header'
import MainBlock from './components/MainBlock'
import Creators from './components/Creators'
import StepTitleComponent from './components/StepTitleComponent'
import DemoComponent from './components/DemoComponent'
import BannerBlock from './components/BannerBlock'
import ExpertAgree from './components/ExpertAgree'
import WeHelpedBanner from './components/WeHelpedBanner'
import GetStartNow from './components/GetStartNow'
import Footer from './components/Footer'

const homepage =
{
  title: "Your Homepage",
  text: <span> Your Content. <br /> All in <span className={`text-blue`}>One Spot</span></span>,
  steps: [
    {
      index: 1,
      text: "Embed content or create something new to share."
    },
    {
      index: 2,
      text: "Share content over email, text message or your homepage."
    }
  ],
  buttons: [
    {
      colored: true,
      text:"Get Started Now",
      onclick:()=>{}
    },
    {
      colored: false,
      text:"View A Demo",
      bordered:true,
      onclick:()=>{}
    }],
    image:
    {
      name:"charlieputh.png",
      filter: "drop-shadow(0px 40px 40px #00000080)"
    }
};

const stepOne=
{
  index:1,
  title:"Connect Your Content",
  text:"Bring all of your content together and get a Homepage that automatically updates whenever you create anywhere online.",
  button:
  {
    colored:false,
    text: "View Avaliable Sources",
    bordered : true
  }
};

const stepTwo=
{
  index:2,
  title:"Share Your Homepage",
  text:"Share your Wavium homepage link with your followers, and we'll handle the rest."
};

const stepThree=
{
  index:3,
  title:"Send Emails & Text Messages",
  text:"No more going through a social platform. Reach and engage your audience directly over email and text massage."
};

const createnshare =
{
  title: "Create & Share",
  text: <span> Reach Your<br /> Audience <span className={`text-blue`}>Directly.</span></span>,
  steps: [
    {
      index: 1,
      text: "Embed content or create something new to share."
    },
    {
      index: 2,
      text: "Share content over email, text message or your homepage."
    }
  ],
  buttons: [
    {
      colored: true,
      text:"Get Started Now",
      onclick:()=>{}
    },
    {
      colored: false,
      text:"View A Demo",
      bordered:true,
      onclick:()=>{}
    }],
    image:
    {
      name:"blackpink.png",
      filter: "drop-shadow(-20px 40px 20px #0D0D0D80)"
    }
};

const App = () => {
  return (
    <div className='bg-[#000000] flex flex-col items-center'>
      <Header className={` py-12 px-32 w-[-webkit-fill-available]`} />
      <MainBlock className={` py-20 px-32`} />
      <Creators className={` py-24`} />
      <StepTitleComponent className={`py-40 w-[51%]`} item={stepOne} />
      <DemoComponent data={homepage} className={`ml-12`} />
      <StepTitleComponent className={` py-48 w-[51%]`} item={stepTwo} />
      <BannerBlock className={`px-24`}/>
      <StepTitleComponent className={` py-48 w-[60%]`} item={stepThree} />
      <DemoComponent data={createnshare} className={`ml-12`} />
      <ExpertAgree className={`py-48 px-12`} />
      <WeHelpedBanner className={` w-full bg-cover aspect-[19/8] bg-[url('images/Wehelped.png')]`}/>
      <GetStartNow className={`py-48 w-[55%]`}/>
      <Footer className={` mx-36 mb-24 w-[-webkit-fill-available]`}/>
    </div>
  )
}

export default App