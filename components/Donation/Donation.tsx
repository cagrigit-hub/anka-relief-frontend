import React from 'react'
import { Roboto } from '@next/font/google'
import { classNames } from '@/functions/classnames'
import toast from 'react-hot-toast'
//@ts-ignore
import useMatchMedia from 'react-use-match-media';

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ['latin'],
  // italic
  style: ["italic", "normal"]
})

const accounts = [
  {
    id: 1,
    name: "ETHEREUM NETWORK - ETH, ERC-20 Tokens",
    account: "0xCE4d5B5933B369e9c937ffCfBB9e3aeb3d2c265B",
    scanurl: "https://etherscan.io/address/0xCE4d5B5933B369e9c937ffCfBB9e3aeb3d2c265B"
  },
  {
    id: 2,
    name: "AVALANCHE C-CHAIN - AVAX, ERC20 Tokens",
    account: "0xEFC8e3472c782E74b64212191F17C1463645cc4A",
    scanurl: "https://snowtrace.io/address/0xEFC8e3472c782E74b64212191F17C1463645cc4A"
  },
  {
    id: 3,
    name: "BINANCE CHAIN - BNB, BEP20 Tokens",
    account: "0x0aC81b9737E44b748B5498D05CFE43CEfB2F55d2",
    scanurl: "https://bscscan.com/address/0x0aC81b9737E44b748B5498D05CFE43CEfB2F55d2"

  },
  {
    id: 4,
    name: "CELO NETWORK - CGLD, ERC20 Tokens",
    account: "0x5e9E52e9789F670F80A7de6e438cC491878981B8",
    scanurl: "https://explorer.celo.org/mainnet/address/0x5e9E52e9789F670F80A7de6e438cC491878981B8"

  },
  {
    id: 5,
    name: "GNOSIS NETWORK - xDai, ERC20 Tokens",
    account: "0xc1460588cA2BcAEB28c80327413e91655505A784",
    scanurl: "https://blockscout.com/xdai/mainnet/address/0xc1460588cA2BcAEB28c80327413e91655505A784"
  },

]

// {
//   id: 2,
//   name: "BTC:",
//   account: "0xb......................................"
// },
// {
//   id: 3,
//   name: "TRX:",
//   account: "0xb......................................"
// },
// {
//   id: 4,
//   name: "AVAX:",
//   account: "0xb......................................"

// },
// {
//   id: 5,
//   name: "SOL:",
//   account: "0xb......................................."

// },
// {
//   id: 6,
//   name: "BNB:",
//   account: "0xb......................................"

// }

function copyText(account: string) {
  navigator.clipboard.writeText(account)
  toast.success('Successfully Copied to Clipboard!')
}
function Donation() {
  const isTablet = useMatchMedia('(max-width: 1024px)');
  return (
    <div id="donation" className='relative mb-36'>
      <div className='absolute h-[10rem] w-full' style={{
        background: "linear-gradient(180deg, #D1D1D0 0%, rgba(255, 255, 255, 0) 100%)"
      }} />
      <div className='px-12 xl:px-1  md:max-w-7xl pt-[11rem] mx-auto w-full'>
        <h1 className={classNames(roboto.className, "text-[20px] text-[#3C3C3C] md:text-[38px] font-bold")}>Donation account details are as follows</h1>
        {/* <p className={classNames(roboto.className,"text-[20px] text-[#707070]")}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quod consequuntur.</p> */}
      </div>

      <div className={classNames(roboto.className, 'accounts flex flex-col space-y-6 mt-4 md:mt-16')}>
        {
          accounts.map((account) => (
            <>
              <div className='flex  flex-col space-y-1 lg:space-y-0 lg:flex-row justify-between max-w-[85rem] mt-4 w-[85%] lg:w-full mx-auto bg-[#F3F3F3]  py-4 px-12 lg:px-8 rounded-full'>
                <div>
                  <div className='text-[#7E7E7E] text-sm pt-2 lg:pt-0 lg:text-base'>
                    {account.name}
                  </div>
                  <div onClick={() => { copyText(account.account) }} className='font-bold flex cursor-pointer hover:text-black  text-sm lg:text-base text-[#555555]'>
                    {isTablet ? account.account.slice(0,15) + "..." : account.account}
                    <span className='ml-1 mt-0.5 cursor-pointer'>
                      <img className='w-4' src="/svgs/copy.svg" alt="copy" />
                    </span>
                  </div>
                </div>
                <div className='w-60 text-xs lg:text-base text-[#848484] text-justify'>
                  To view the transfers and the total amount donated click <a href={account.scanurl}><span className='text-red-400'>here</span></a>
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