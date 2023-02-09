import Donation from '@/components/Donation'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Hopes from '@/components/Hopes'
import Projects from '@/components/Projects'
import QA from '@/components/QA'
import Team from '@/components/Team'
import Head from 'next/head'
import React from 'react'


function Home() {
  return (
    <>  
        <Head>
            <title>Anka Relief</title>
            <meta name="description" content="Anka Relief" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/svgs/anka_white_green.svg" />
        </Head>
        <main className='main '>
          <Hero />
          <Hopes />
          <Team />
          <Donation />
          <QA />
          <Projects />
          <Footer />
        </main>

    </>
  )
}

export default Home