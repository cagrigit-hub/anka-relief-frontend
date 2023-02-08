import { classNames } from '@/functions/classnames'
import React, { useEffect, useState } from 'react'
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
const [sidebarWidth, setSidebarWidth] = useState<number | undefined>(undefined);
const [sidebarTop, setSidebarTop] = useState<number | undefined>(undefined);
 
useEffect(() => {
  const sidebarEl = document.getElementById('sticky-top')?.getBoundingClientRect();
  setSidebarWidth(sidebarEl?.width);
  setSidebarTop(sidebarEl?.top);
}, []);
 
useEffect(() => {
  if (!sidebarTop) return;
 
  window.addEventListener('scroll', isSticky);
  return () => {
    window.removeEventListener('scroll', isSticky);
  };
}, [sidebarTop]);
 
const isSticky = (e : any) => {
  const sidebarEl = document.getElementById('sticky-top');
  const hddnimg = document.getElementById('hddnimg');
  const dntn = document.getElementById('dntn');
  const scrollTop = window.scrollY;
  if (scrollTop >= sidebarTop!) {
    sidebarEl?.classList.add('is-sticky');
    sidebarEl?.classList.add('pl-24');
    hddnimg?.classList.add('appeal-img');
    dntn?.classList.add('appeal');
  } else {
    sidebarEl?.classList.remove('is-sticky');
    sidebarEl?.classList.remove('pl-24');
    hddnimg?.classList.remove('appeal-img');
    dntn?.classList.remove('appeal');

  }
}
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
        <a href="#donation"><button className='text-gray-100 text-base md:text-xl mb-12  border-solid mt-12  border-[2px] px-6 pt-1 pb-2 md:px-10 md:pt-2 md:pb-4 rounded-full hover:bg-white  hover:text-black transition ease-in-out duration-300'>Donate</button></a>
        <div id="sticky-top" className='w-full pt-12  lg:pl-16 bg-[#1F1F1F]'>
          <div className='mb-12  flex items-center justify-center  relative '>
            <img id="hddnimg" src="/svgs/anka-white.svg" className='w-12 lg:left-16 absolute hidden'  alt="anka"/>
            {
            sections.map((section, index) => (
            
                <a href={section.path}  key={index}>
                <span className='text-[#d1cfcf] hover:text-white text-[1.2rem] md:text-xl font-[400] mr-6 md:mr-12 lg:mr-20'>{section.name}</span>
                </a>
            ))
            }
            <a id="dntn" className=" hidden " href={"#donation"}>
            <span className='text-[#d1cfcf] hover:text-white text-[1.2rem] md:text-xl font-[400]  mr-12 md:mr-20'>Donate</span>

            </a>
        </div>
        </div>
        
    </div>
  )
}

export default Hero