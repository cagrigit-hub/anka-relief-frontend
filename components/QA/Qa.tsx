import React from 'react'
import {Roboto} from '@next/font/google'
import { classNames } from '@/functions/classnames'

const roboto = Roboto({
  weight: ["100", "300", "400",  "500", "700", "900"],
  subsets: ['latin'],
  // italic
  style: ["italic", "normal"]
})

const qas = [
  {
    id: 1,
    question : "Lorem ipsum  dolor sit amet",
    answer : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quod consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quod consequuntur."
  },
  {
    id:2,
    question: "Lorem ipsum  dolor sit amet",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quod consequuntu. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quod consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quod consequuntur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quod consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quod consequuntur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quod consequuntur."
  },
  {
    id:3,
    question: "Lorem ipsum  dolor sit amet",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quod consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quod consequuntur."
  },
  {
    id: 4,
    question: "Lorem ipsum  dolor sit amet",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quod consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quod consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quod consequuntur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quod consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quod consequuntur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quod consequuntur."
  },
  {
    id: 5,
    question: "Lorem ipsum  dolor sit amet",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quod consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quod consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quod consequuntur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quod consequuntur."
  }
]

function Qa() {
  return (
    <div className='relative mb-24 text-[#3C3C3C]' id="qa">
      <div className='absolute h-[10rem] w-full' style={{
        background : "linear-gradient(180deg, #D1D1D0 0%, rgba(255, 255, 255, 0) 100%)"
      }} />
        <div className='px-12 xl:px-1  md:max-w-7xl pt-[11rem] mx-auto w-full '>
          <div>
            <h1 className={classNames(roboto.className, "text-[20px] md:text-[38px] font-bold")}>Asked Questions</h1>
            <p className={classNames(roboto.className,"text-[20px] text-[#707070]")}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quod consequuntur.</p>
          </div>
          <div className='flex flex-col md:flex-row relative space-x-0 md:justify-between'>
            <div>
              {
                /* 3 questions on the right, 2 on the left */
                qas.slice(0,3).map((qa) => (
                  <div key={qa.id} className='flex flex-col md:flex-row justify-between items-center mt-[5rem] w-[80%] text-justify'>
                    <div className='flex flex-col'>
                      <h1 className={classNames(roboto.className, " text-[20px] md:text-[28px] font-bold text-[#6B6B6B]")}>Q. {qa.question}</h1>
                      <p className={classNames(roboto.className, " text-[16px] md:text-[18px] text-[#707070] mt-[1rem] italic")}>{qa.answer}</p>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className='!h-[750px] hidden md:block top-20 left-[50%] w-[0.5px] bg-[#000000] absolute'></div>
           <div >
           {
                /* 3 questions on the right, 2 on the left */
                qas.slice(3).map((qa) => (
                  <div key={qa.id} className='flex flex-col md:flex-row justify-between items-center mt-[5rem] md:ml-24 w-[80%] text-justify'>
                    <div className='flex flex-col '>
                      <h1 className={classNames(roboto.className, "text-[20px] md:text-[28px]  font-bold text-[#6B6B6B]")}>Q. {qa.question}</h1>
                      <p className={classNames(roboto.className, "text-[16px] md:text-[18px] text-[#707070] mt-[1rem] italic")}>{qa.answer}</p>
                    </div>
                  </div>
                ))
              }
           </div>
          </div>
        </div>
      </div>
  )
}

export default Qa