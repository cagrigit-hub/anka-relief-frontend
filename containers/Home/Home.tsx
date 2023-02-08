import Hero from '@/components/Hero'
import Hopes from '@/components/Hopes'
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
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className='main'>
          <Hero />
          <Hopes />
          <Team />
          <QA />
        </main>
    </>
  )
}

export default Home