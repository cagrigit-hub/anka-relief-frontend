import { classNames } from '@/functions/classnames'
import React, { useEffect, useState } from 'react'
import { Roboto, Cinzel, Montserrat } from '@next/font/google'
const roboto = Roboto({
  weight: ["100", "300", "400",  "500", "700", "900"],
  subsets: ['latin'],
})


const montserrat = Montserrat({
  weight: ["100", "300", "400",  "500", "700", "900"],
  subsets: ['latin'],
})

const cinzel = Cinzel({
  weight: ["600"],
  subsets: ['latin'],
})

// sections for Hero
const sections = [
    {
      name: 'HOME',
      path: '#home',
    },
    {
      name: 'DONATE',
      path: '#donation',
    },
    {
      name: 'ABOUT',
      path: '#hopes',
    },
    {
      name: 'MULTI-SIGNERS',
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
    <div id="home" className='bg-[#1F1F1F] flex flex-col justify-center items-center relative'>
        <div className='mt-[10rem] mb-8'>
            <img className='w-40 md:w-44 aspect-auto' src="/svgs/anka_white_green.svg" alt='Anka Relief' />
        </div>
        <div>
            <h1 className={classNames('text-gray-100  text-[50px] md:text-[80px] font-[600] mb-2', cinzel.className)}>Anka Relief</h1>
        </div>
        <div className={classNames('text-gray-100 tracking-wider space-y-1 leading-4 md:leading-[23px]  text-center red-hat  text-[12px] md:text-[20px]   w-[300px] md:w-[640px] font-[400] ')}>
            <p>Multi-sig crypto relief fund operated by industry leaders to support the people of Türkiye after the disastrous earthquakes that hit the region. </p>
             
        </div>
        <a href="#donation"><button className='text-gray-100 text-base md:text-xl mb-12 py-2  border-solid mt-12 border-green-700  border-[3px] px-6  md:px-10  rounded-full hover:bg-green-700  transition ease-in-out duration-300 montserrat-700 '>DONATE</button></a>
        <div id="sticky-top" className='w-full pt-12  lg:pl-16 bg-[#1F1F1F]'>
          <div className='mb-12  md:flex items-center justify-center  relative hidden '>
            <img id="hddnimg" src="/svgs/anka_white_green.svg" className='w-16 lg:left-16 absolute hidden'  alt="anka"/>
            {
            sections.map((section, index) => (
            
                <a href={section.path}  key={index}>
                <span className={classNames('text-[#d1cfcf] hover:text-white hover:underline underline-offset-8 decoration-4 decoration-green-700 text-[0.9rem] sm:text-[1.2rem] md:text-xl montserrat-700 mr-3 sm:mr-6 md:mr-12 lg:mr-20')}>{section.name}</span>
                </a>
            ))
            }
        </div>
        <div className='block md:hidden fixed top-0 left-0'>
              <nav>
                <div className="navbar">
                  <div className="container nav-container">
                      <input className="checkbox" type="checkbox" name="" id="" />
                      <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                      </div>  
                    
                    <div className="menu-items pr-6">
                      <li><a href="#">HOME</a></li>
                      <li><a href="#donation">DONATE</a></li>
                      <li><a href="#hopes">ABOUT</a></li>
                      <li><a href="#signers">MULTI-SIGNERS</a></li>
                      <li><a href="#qa">FAQ</a></li>
                    </div>
                  </div>
                </div>
          </nav>
        </div>
        </div>
        
    </div>
  )
}

export default Hero