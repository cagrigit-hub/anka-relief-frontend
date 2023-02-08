import { classNames } from '@/functions/classnames'
import React, { useEffect } from 'react'
import {Roboto} from '@next/font/google'

const roboto = Roboto({
  weight: ["100", "300", "400",  "500", "700", "900"],
  subsets: ['latin'],
})

// sections for Hero
const sections = [
    {
      name: 'Home',
      path: '#home',
    },
    {
      name: 'Hopes',
      path: '#hopes',
    },
    {
      name: 'Signers',
      path: '#signers',
    },
    {
      name: 'FAQ',
      path: '#qa',
    },
  ]
  
function Hero() {

  useEffect(() => {
    // make sticky top by scroll
    const header = document.getElementById('sticky-top')
    const hddnimg = document.getElementById('hddnimg')
    window.onscroll = function() {myFunction()};
    function myFunction() {
      if (window.pageYOffset > 910){
        header!.classList.add("sticky");
        hddnimg!.classList.add('appeal-img');
      } else {
        header!.classList.remove("sticky");
        hddnimg!.classList.remove('appeal-img');
      }
    }

  } , [])
  return (
    <div id="home" className='bg-[#1F1F1F] flex flex-col justify-center items-center'>
        <div className='mt-[10rem] mb-8'>
            <img className='w-40 md:w-44 aspect-auto' src="/svgs/anka-white.svg" />
        </div>
        <div>
            <h1 className='text-gray-100  text-[50px] md:text-[80px] font-[700] dyhana mb-2'>Anka Relief</h1>
        </div>
        <div className={classNames('text-gray-100 tracking-wider  leading-4 md:leading-[23px]  text-justify   text-[12px] md:text-[20px]  font-[300] w-[300px] md:w-[610px] ', roboto.className)}>
            <p>Crypto relief fund to support the people of Turkiye after disastrous earthquakes struck the region on February 6. Multi-sig operated by industry leaders, funding the best NGOs.</p>
        </div>
        <a href="#donation"><button className='text-gray-100 text-base md:text-xl  border-solid mt-12 mb-24 border-[2px] px-6 pt-1 pb-2 md:px-10 md:pt-2 md:pb-4 rounded-full hover:bg-white  hover:text-black transition ease-in-out duration-300'>Donate</button></a>
        <div id="sticky-top" className='ml-16 mb-12 bg-[#1F1F1F]'>
            <img id="hddnimg" src="/svgs/anka-white.svg" className='w-12 ml-12 mr-6 md:mr-12 hidden'  alt="anka"/>
            {
            sections.map((section, index) => (
            
                <a href={section.path}  key={index}>
                <span className='text-[#d1cfcf] hover:text-white text-lg md:text-xl font-[400]  mr-12 md:mr-20'>{section.name}</span>
                </a>
            ))
            }
        </div>
    </div>
  )
}

export default Hero