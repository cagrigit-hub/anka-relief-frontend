import React from 'react'
import Blob from '../Reusables/Blob'


import {Roboto} from '@next/font/google'
import { classNames } from '@/functions/classnames'

const roboto = Roboto({
  weight: ["100", "300", "400",  "500", "700", "900"],
  subsets: ['latin'],
})

const hopes = [
  {
    id : 1,
    image: '/svgs/hopes/guard.svg',
    content: "Prioritize transparency & on-chain visibility as much as possible, with a trust-signalled multi-signature wallet treasury operated by industry leaders."
  },
  {
    id: 2,
    image: "/svgs/hopes/collobration.svg",
    content: "Collaborate with large organizations and communities to maximize the support available to the heroes & people in need on the ground."
  },
  {
    id: 3,
    image: "/svgs/hopes/together.svg",
    content: "Unify efforts within the crypto community as a support network, assisting as many NGOs and other initiatives with the possibilities of accepting crypto donations.    "
  },
  
]

function Hopes() {
  return (
    <div id="hopes" className='mt-20 relative mb-16 text-[#3C3C3C]' >
      <img src="/projects/transparent.png" className='w-full top-[-80px] h-[14rem] md:h-[28rem] object-cover absolute z-[-1000] '/>
      <Blob shape="rectangle" size={1} color="bg-[#60A325]">
         Our aim is to tap into the solidarity within the web3 ecosystem and coordinate to bring about a trusted, sustainable fund as well as provide support to the wider Turkish disaster fundraising ecosystem.
        <div className='bg-green-700 w-48 lg:w-96 h-[3px] mt-[10px] md:mt-[25px]'></div>
      </Blob>

      <div className='flex flex-col md:flex-row  max-w-7xl mx-auto w-full mt-12'>
        <div className='red-logo flex'>
          <img className='w-[70%] md:w-[80%] mx-auto' src='/svgs/anka-red.svg' alt="anka-red-svg"/>
        </div>
        <div  className='hopes-to text-center md:text-start'>
          <h1 className={classNames("text-[25px] md:text-[32px] font-bold mt-12 md:mt-0 montserrat-700 text-center mx-auto w-[200px] md:w-full" )}>ANKA RELIEF HOPES TO </h1>
          {
            hopes.map((hope) => (
              <div key={hope.id} className='flex flex-col md:flex-row justify-center items-center space-y-4 space-x-0 md:space-x-8 md:space-y-0  mt-8'>
                <div>
                  <img src={hope.image} className="w-[100px] object-contain" alt="hope-image"/>
                </div>
                <div className={classNames("text-[15px]  md:text-[20px] w-[250px] md:w-[410px]  font-[400] leading-[30px] text-[#4F4F4F] red-hat")}>
                  {hope.content}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Hopes