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
    <div >
        {
            shape === "rectangle" ? (
                <div className={classNames("xs:w-[250px] sm:w-[450px] ml-32  mb-48 md:w-[600px] lg:w-[1000px]  tracking-wide sm:ml-auto  rounded-[20px] md:rounded-[50px] font-[500] leading-[15px] md:leading-[20px] lg:leading-[40px] py-0 sm:py-4 md:py-8  px-3 sn:px-12 md:px-24  text-sm md:text-[20px] lg:text-[30px]", roboto.className)}>
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