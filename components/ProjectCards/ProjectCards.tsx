import React from 'react'
import { Roboto } from "@next/font/google"
import { classNames } from '@/functions/classnames'
import Link from 'next/link'

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
  img: string
}

function ProjectCards({id, header, title, content, path, img}: IProjectCards ) {
  
  return (
    <div className={classNames(roboto.className, "max-w-7xl w-full mx-auto")}>
      <h1 className='text-[25px] font-bold ml-8 mb-3'>{header}</h1>
      <Link  href={path} className='flex '>

        <div style={{
        background: "rgba(220, 216, 216, 0.24)",
        borderRadius: "47px 1px 1px 47px",
        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
        }} className="left px-12 py-6 text-justify w-[50%] ">
            <h2 className=' font-bold'>{title}</h2>
            <p className='font-[400] mt-4' style={{
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
            }}>
              {content}
            </p>
        </div>
        <div className="right ">
          <img className='h-full'  src={img} alt={img} />
        </div>
      </Link>

    </div>
  )
}

export default ProjectCards