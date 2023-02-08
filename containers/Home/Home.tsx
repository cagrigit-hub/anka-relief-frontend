import Hero from '@/components/Hero'
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
        <main>
          <Hero />
        </main>
    </>
  )
}

export default Home