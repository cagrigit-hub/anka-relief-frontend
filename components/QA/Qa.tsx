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
    question : "What currencies and networks are supported?",
    answer : "We currently support all tokens available on the following networks and are working with industry stakeholders to add more: Ethereum, Avalanche, Binance Smart Chain, Celo & Gnosis Chain."
  },
  {
    id:2,
    question: "Several NGOs already have crypto accounts opened. Why donate here instead of directly to those NGOs?",
    answer: "For potential donors outside of Turkiye, deciding which NGOs to donate can be a difficult & confusing task, slowing support. With this model, we are able to pool funds from the international crypto community. Additionally, we are committed to onboarding as many impactful NGOs as possible to accept crypto donations."
  },
  {
    id:3,
    question: "Why should we trust this initiative?",
    answer: "Anka Relief is a web3 native initiative with a secure multi-signature wallet operated by industry leaders, a history of successful impact projects including  <a href='https://unchain.fund/' target='_blank'>Unchain Fund</a> and <a href='https://savepakistan.org/' target='_blank'>Save Pakistan</a> Relief NFT Fundraising, and a supportive community on the ground. <br/> We believe it is important to disperse funds to a wide array of NGOs to meet various short and long-term needs that are emerging in every moment. Thanks to help from people on the ground and entities like Paribu and BTC Türk, more NGOs are accepting cryptocurrency donations."
  },
  {
    id: 4,
    question: "What is a multi-signature wallet and how is this relevant?",
    answer: "To move funds from an Anka Relief multi-signature wallet, at least 5 industry leaders must approve the transaction. This increases security and transparency, building trust and providing visibility. For more information, visit <a href='https://safe.global/' target='_blank'>Safe</a>."
  },
  {
    id: 5,
    question: "How can we track your transparency?",
    answer: "Every transaction will have supporting documents and financial reports to ensure that funds are allocated with accuracy and transparency, aiding disaster relief in Türkiye."
  },
  {
    id: 6,
    question: "Where does the collected money go? Who are these NGOs you fund?",
    answer: "We will direct all the funds raised to legitimate and trusted NGOs that address multiple humanitarian needs. Several members of the <a href='http://afetplatformu.org.tr/' target='_blank'>Disaster Platform</a>, a non-governmental network formed by 19 NGOs and stakeholders operating during major disasters in Turkey, has started to collect crypto donations. The list includes NGOs such as <a href='https://www.ihtiyacharitasi.org/' target='_blank'>Needs Map</a>, <a href='https://www.tog.org.tr/en/' target='_blank'>Community Volunteers Foundation</a>, <a href='https://ahbap.org/' target='_blank'>Ahbap</a>, <a href='https://www.supporttolife.org/' target='_blank'>Support to Life</a>, <a href='https://www.tider.org/eng' target='_blank'>Basic Needs Association</a>, and <a href='https://www.nefvakfi.org/' target='_blank'>Nef Vakfı</a>."
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
            <h1 className={classNames(roboto.className, "text-[20px] md:text-[38px] font-bold")}>Frequently Asked Questions</h1>
            {/* <p className={classNames(roboto.className,"text-[20px] text-[#707070]")}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quod consequuntur.</p> */}
          </div>
          <div className='flex flex-col w-full md:flex-row relative space-x-0 md:justify-between'>
            <div className='md:w-full lg:w-[85%]'>
              {
                /* 3 questions on the right, 2 on the left */
                qas.slice(0,3).map((qa) => (
                  <div key={qa.id} className='flex flex-col md:flex-row justify-between items-center mt-[5rem]  text-justify'>
                    <div className='flex flex-col'>
                      <h1 className={classNames(roboto.className, " text-[20px] md:text-[28px] font-bold text-[#6B6B6B]")}>Q. {qa.question}</h1>
                      <p className={classNames(roboto.className, " text-[16px] md:text-[18px] text-[#707070] mt-[1rem] italic qa-answer")} dangerouslySetInnerHTML={{ __html: qa.answer }}></p>
                    </div>
                  </div>
                ))
              }
            </div>
            {/* <div className='!h-[750px] hidden md:block top-20 left-[50%] w-[0.5px] bg-[#000000] absolute'></div> */}
           <div  className='w-[100%]' >
           {
                /* 3 questions on the right, 2 on the left */
                qas.slice(3).map((qa) => (
                  <div key={qa.id} className='flex flex-col md:flex-row justify-between items-center mt-[5rem] md:ml-24  text-justify'>
                    <div className='flex flex-col '>
                      <h1 className={classNames(roboto.className, "text-[20px] md:text-[28px]  font-bold text-[#6B6B6B]")}>Q. {qa.question}</h1>
                      <p className={classNames(roboto.className, "text-[16px] md:text-[18px] text-[#707070] mt-[1rem] italic qa-answer")} dangerouslySetInnerHTML={{ __html: qa.answer }}></p>
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