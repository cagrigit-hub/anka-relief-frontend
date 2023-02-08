import React from 'react'
import { classNames } from '@/functions/classnames';

interface IBlob {
    shape: "circle" | "rectangle";
    color: string;
    size: 1 | 2 | 3 | 4;
    children: React.ReactNode;
}
import {Roboto} from '@next/font/google'

const roboto = Roboto({
  weight: ["100", "300", "400",  "500", "700", "900"],
  subsets: ['latin'],
})
function Blob({ shape, color, size, children}: IBlob) {
  return (
    <div>
        {
            shape === "rectangle" ? (
                <div className={classNames(color,"w-[450px] md:w-[600px] lg:w-[1000px]  text-justify tracking-wide mx-auto text-white rounded-[20px] md:rounded-[50px] font-[500] leading-[15px] md:leading-[20px] lg:leading-[40px] py-4 md:py-8  px-12 md:px-24  text-sm md:text-[20px] lg:text-[30px]", roboto.className)}>
                    {children}
                </div>
            ) : (
                // Can be added later
                <div>
                    {children}
                </div>
            )
        }
    </div>
  )
}

export default Blob