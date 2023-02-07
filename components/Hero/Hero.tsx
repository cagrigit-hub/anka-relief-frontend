import { classNames } from '@/functions/classnames'
import React from 'react'
import {Roboto} from '@next/font/google'

import Link from 'next/link'
const roboto = Roboto({
  weight: ["100", "300", "400",  "500", "700", "900"],
  subsets: ['latin'],
})

// sections for Hero
const sections = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Hopes',
      path: '#hopes',
    },
    {
      name: 'Services',
      path: '#services',
    },
    {
      name: 'Q/A',
      path: '#qa',
    },
  ]
  
function Hero() {
  return (
    <div className='bg-[#1F1F1F] flex flex-col justify-center items-center'>
        <div className='mt-[10rem] mb-8'>
            <img className='w-40 md:w-44 aspect-auto' src="/svgs/anka-white.svg" />
        </div>
        <div>
            <h1 className='text-white  text-[50px] md:text-[80px] font-[700] dyhana mb-2'>Anka Relief</h1>
        </div>
        <div className={classNames('text-white tracking-wider  leading-4 md:leading-[23px]  text-justify   text-[12px] md:text-[20px]  font-[300] w-[300px] md:w-[610px] ', roboto.className)}>
            <p>Anka Relief is a crypto relief fund & research network with the mission of enabling the international crypto community to support the people of Türkiye. </p>
            <p> Emergency need-based intervention and longer term reconstruction efforts are desperately needed since the disastrous earthquakes that shocked the region on February 6.</p>
        </div>
        <button className='text-white text-base md:text-xl  border-solid mt-12 mb-24 border-[2px] px-6 pt-1 pb-2 md:px-10 md:pt-2 md:pb-4 rounded-full hover:bg-white  hover:text-black transition ease-in-out duration-300'>Lorem Ipsum</button>
        <div className='ml-16 mb-12'>
            {/* Home, Hopes, Services, Q/A: with next link*/}
            {
            sections.map((section, index) => (
                <Link href={section.path} key={index}>
                <span className='text-[#d1cfcf] hover:text-white text-lg md:text-xl font-[400]  mr-12 md:mr-20'>{section.name}</span>
                </Link>
            ))
            }
        </div>
    </div>
  )
}

export default Hero