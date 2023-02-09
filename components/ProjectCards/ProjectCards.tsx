import React, { useEffect, useState } from 'react'
import { Roboto } from "@next/font/google"
import { classNames } from '@/functions/classnames'
import Link from 'next/link'
//@ts-ignore
import useMatchMedia from 'react-use-match-media';
const roboto = Roboto({
  weight: ["100", "300", "400",  "500", "700", "900"],
  subsets: ['latin'],
  // italic
  style: ["italic", "normal"]
})

interface IProjectCards {
  id: number,
  header: string,
  title: string,
  content: string,
  path: string,
  img: string,
  imgMobile: string,
}

function ProjectCards({id, header, title, content, path, img, imgMobile}: IProjectCards ) {
  const isTablet = useMatchMedia('(max-width: 1024px)');
  return (
    <div className={classNames(roboto.className, "max-w-7xl w-full mx-auto")}>
      <h1 className='text-[25px] font-bold ml-8 mb-3'>{header}</h1>
      <Link  href={path} target="_blank" className='flex flex-col lg:flex-row '>

        <div style={{
        background: "rgba(220, 216, 216, 0.24)",
        borderRadius: "47px 1px 1px 47px",
          
        }} className="left px-12  py-12 text-justify w-full hidden lg:block md:w-[50%] ">
            <h2 className='font-bold'>{title}</h2>
            <p className='font-[400] mt-4 '>
              {content}
            </p>
        </div>
        <div className="right ">
          <img className='h-full mx-auto w-[90%] lg:w-full object-contain'  src={isTablet ? imgMobile : img} alt={img} />
        </div>
        <div style={{
        background: "rgba(220, 216, 216, 0.24)",
        borderRadius: "1px 1px 47px 47px",
       
        }} className="left px-12 py-6 text-justify mx-auto w-[90%] block lg:hidden ">
            <h2 className=' font-bold'>{title}</h2>
            <p >
              {content}
            </p>
        </div>
      </Link>

    </div>
  )
}

export default ProjectCards