import React from 'react'
import ProjectCards from '../ProjectCards'

function Projects() {

  const projects = [
    {
      id : 1,
      header: 'Unchain Fund',
      title: "'Absolutely Surreal': Inside a Fund Raising Millions in Crypto for Besieged Ukraine",
      content: "Raising $10M for humanitarian aid in Ukraine following the full scale invasion, launching a direct aid model that provided support to more than 400,000 people including launching one of the largest ever non-governmental basic income schemes in human history, distributing around 8000 virtual Mastercard debits to mothers affected or displaced by the war. Unchain received a $2.5M donation from Vitalik Buterin.",
      path: "https://www.coindesk.com/layer2/2022/03/01/absolutely-surreal-inside-a-fund-raising-millions-in-crypto-for-besieged-ukraine/",
      img: "/projects/p1.png"
    },
    {
      id : 2,
      header: 'Save Pakistan Relief NFT Fundraising',
      title: "Save Pakistan launch the first ever NFTs tied to real world humanitarian relief goods this Christmas, Dec 22 at 3pm UTC, on Optimism",
      content: "Launched the first ever NFTs tied to real world humanitarian relief kits & support goods as well as a multi-chain crypto relief fund following the recent flooding disaster with founding partners on the ground Tayaba- distributing food, water, sanitation & shelter to thousands of people at the front lines of the crisis.",
      path : "https://medium.com/@savepakistan.crypto/save-pakistan-launch-the-first-ever-nfts-tied-to-real-world-humanitarian-relief-goods-this-d581a755ac1",
      img: "/projects/p2.png"
    },
    {
      id: 3,
      header: 'Choice DAO',
      title: "Campaigned & fundraised for female reproductive rights in the US post Roe v Wade.",
      content: "We’re a global community of volunteer activists and Web3 enthusiasts here to fund and engage in the fight for reproductive rights.",
      path: "https://twitter.com/TheChoiceDAO/status/1549802145280557056",
      img: "/projects/p3.png"
    },
    {
      id: 4,
      header: "Kyiv Tech Summit",
      title : "Vitalik Buterin Makes Surprise Appearance at Kyiv Tech Summit in Show of Support for Ukraine",
      content: "War time public goods hackathon & conference in a bomb shelter this September ft 500 hackers and more than 30 expert speakers, including the Vice Prime Minister & Minister of Digital Transformation of Ukraine Mykhalio Federov and directly facilitating Vitalik Buterin’s first ever visit to Ukraine.",
      path: "https://www.coindesk.com/business/2022/09/10/vitalik-buterin-makes-surprise-appearance-at-kyiv-tech-summit-in-show-of-support-for-ukraine/",
      img: "/projects/p4.png"
    }
  ] 
  return (
    <div className='flex flex-col space-y-8 mb-12'>
      {
        projects.map((project) => (
          <ProjectCards key={project.id} {...project} />
        ))
      }
    </div>
  )
}

export default Projects