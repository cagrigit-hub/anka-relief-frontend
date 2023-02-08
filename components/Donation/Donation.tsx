import React from 'react'
import {Roboto} from '@next/font/google'
import { classNames } from '@/functions/classnames'

const roboto = Roboto({
  weight: ["100", "300", "400",  "500", "700", "900"],
  subsets: ['latin'],
  // italic
  style: ["italic", "normal"]
})

const accounts = [
  {
    id: 1,
    name: "ETH,USDC,USDT,TRYC:",
    account: "0xbe4cde5eeeed1f0a97a9457f6ef5b71eae108652"
  },
  {
    id: 2,
    name: "BTC:",
    account: "0xbe4cde5eeeed1f0a97a9457f6ef5b71eae108652"
  },
  {
    id: 3,
    name: "TRX:",
    account: "0xbe4cde5eeeed1f0a97a9457f6ef5b71eae108652"
  },
  {
    id: 4,
    name: "AVAX:",
    account: "0xbe4cde5eeeed1f0a97a9457f6ef5b71eae108652"

  },
  {
    id: 5,
    name: "SOL:",
    account: "0xbe4cde5eeeed1f0a97a9457f6ef5b71eae108652"

  },
  {
    id: 6,
    name: "BNB:",
    account: "0xbe4cde5eeeed1f0a97a9457f6ef5b71eae108652"

  }

]
function Donation() {
  return (
    <div id="donation" className='relative mb-36'>
        <div className='absolute h-[10rem] w-full' style={{
        background : "linear-gradient(180deg, #D1D1D0 0%, rgba(255, 255, 255, 0) 100%)"
      }} />
      <div className='px-12 xl:px-1  md:max-w-7xl pt-[11rem] mx-auto w-full'>
            <h1 className={classNames(roboto.className, "text-[20px] text-[#3C3C3C] md:text-[38px] font-bold")}>Donation account details are as follows</h1>
            <p className={classNames(roboto.className,"text-[20px] text-[#707070]")}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quod consequuntur.</p>
        </div>
        
         <div className={classNames(roboto.className,'accounts flex flex-col space-y-6 mt-16')}>
          {
            accounts.map((account) => (
              <>
              <div className='flex flex-col space-y-1 lg:space-y-0 lg:flex-row justify-between max-w-[85rem] mt-4 w-[85%] lg:w-full mx-auto bg-[#F3F3F3]  py-4 px-12 lg:px-8 rounded-full'>
              <div>
                <div className='text-[#7E7E7E] text-sm pt-2 lg:pt-0 lg:text-base'>
                  {account.name}
                </div>
                <div className='font-bold  text-sm lg:text-base text-[#555555]'>
                  {account.account}
                </div>
              </div>
              <div className='w-60 text-xs lg:text-base text-[#848484] text-justify'>
              To view the transfers and the total amount donated click <span className='text-red-400'>here</span>
              </div>
            </div>
            </>

            ))
          }
         
         </div>
        
    </div>
  )
}

export default Donation