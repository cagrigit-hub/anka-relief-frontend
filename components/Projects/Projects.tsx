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
      img: "/projects/p1.png",
      imgMobile: "/projects/p1_mobile.png"
    },
    {
      id : 5,
      header: 'Ukraine DAO',
      title: "Est. 21 Feb 2022, Ukraine DAO is an internet collective that harnesses the power of Web3 tech and community to defend Ukraine against the russian invasion.",
      content: "After the Ukrainian flag NFT auctioned by Ukraine DAO became the tenth most expensive NFT ever sold, they have donated over $7 million in crypto - including making donations to the Ukrainian government and organizations like Come Back Alive. Ukraine DAO currently focuses on using its platform to counter russian propaganda and amplify Ukrainian voices.",
      path: "https://ukrainedao.love/",
      img: "/projects/ukrainedao-project.png",
      imgMobile: "/projects/ukrainedao-project.png"
    },
    {
      id : 2,
      header: 'Save Pakistan Relief NFT Fundraising',
      title: "Save Pakistan launch the first ever NFTs tied to real world humanitarian relief goods this Christmas, Dec 22 at 3pm UTC, on Optimism",
      content: "Launched the first ever NFTs tied to real world humanitarian relief kits & support goods as well as a multi-chain crypto relief fund following the recent flooding disaster with founding partners on the ground Tayaba- distributing food, water, sanitation & shelter to thousands of people at the front lines of the crisis.",
      path : "https://medium.com/@savepakistan.crypto/save-pakistan-launch-the-first-ever-nfts-tied-to-real-world-humanitarian-relief-goods-this-d581a755ac1",
      img: "/projects/p2.png",
      imgMobile: "/projects/p2_mobile.png"
    },
    {
      id: 3,
      header: 'Choice DAO',
      title: "Campaigned & fundraised for female reproductive rights in the US post Roe v Wade.",
      content: "Choice DAO was a global community of volunteer activists and web3 enthusiasts campaigning & fundraising in the fight for human rights.",
      path: "https://twitter.com/TheChoiceDAO/status/1549802145280557056",
      img: "/projects/p3.png",
      imgMobile: "/projects/p3_mobile.png"

    },
    {
      id: 4,
      header: "Kyiv Tech Summit",
      title : "Vitalik Buterin Makes Surprise Appearance at Kyiv Tech Summit in Show of Support for Ukraine",
      content: "War time public goods hackathon & conference in a bomb shelter this September ft 500 hackers and more than 30 expert speakers, including the Vice Prime Minister & Minister of Digital Transformation of Ukraine Mykhalio Federov and directly facilitating Vitalik Buterin’s first ever visit to Ukraine.",
      path: "https://www.coindesk.com/business/2022/09/10/vitalik-buterin-makes-surprise-appearance-at-kyiv-tech-summit-in-show-of-support-for-ukraine/",
      img: "/projects/p4.png",
      imgMobile: "/projects/p4_mobile.png"
    }
  ] 
  return (
    <div id='projects' className='flex text-[#3C3C3C] flex-col space-y-8 mb-24'>
      <div className='px-12 xl:px-1  md:max-w-7xl mx-auto w-full '>
          <p className='font-bold mb-2 text-[20px] md:text-[38px] text-center red-hat'>
            Already, the Anka Relief core team have spearheaded the following global impact initiatives & more;
          </p>
      </div>
      {
        projects.map((project) => (
          <ProjectCards key={project.id} {...project} />
        ))
      }
    </div>
  )
}

export default Projects