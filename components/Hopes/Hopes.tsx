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
    content: "Unify efforts within the crypto community as an informational research center, assisting as many NGOs and other initiatives as possible with legal and the possibilities of accepting crypto donations."
  },
  {
    id: 4,
    image: "/svgs/hopes/box.svg",
    content: "Explore the viability of a volunteer-led direct aid model as pioneered by Unchain Fund to increase transparency and accountability."
  }
]

function Hopes() {
  return (
    <div id="hopes" className='mt-20 relative mb-16 text-[#3C3C3C]' >
      <img src="/projects/transparent.png" className='w-full top-[-80px] h-[14rem] md:h-[28rem] object-cover absolute z-[-1000] '/>
      <Blob shape="rectangle" size={1} color="bg-[#60A325]">
         Our aim is to tap into the solidarity within the web3 ecosystem and coordinate to bring about a trusted, sustainable fund as well as provide support to the wider Turkish disaster fundraising ecosystem in terms of legal and public informational support / research.
      </Blob>

      <div className='flex flex-col md:flex-row  max-w-7xl mx-auto w-full mt-12'>
        <div className='red-logo flex'>
          <img className='w-[70%] md:w-[80%] mx-auto' src='/svgs/anka-red.svg' alt="anka-red-svg"/>
        </div>
        <div  className='hopes-to text-center md:text-start'>
          <h1 className={classNames(roboto.className,"text-[25px] md:text-[32px] font-bold mt-2 md:mt-0" )}>ANKA RELIEF HOPES TO </h1>
          {
            hopes.map((hope) => (
              <div key={hope.id} className='flex justify-center items-center space-x-8  mt-8'>
                <div>
                  <img src={hope.image} className="w-[100px] object-contain" alt="hope-image"/>
                </div>
                <div className={classNames(roboto.className,"text-[15px]  md:text-[20px] w-[250px] md:w-[410px]  font-[400] leading-[30px] text-[#4F4F4F]")}>
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