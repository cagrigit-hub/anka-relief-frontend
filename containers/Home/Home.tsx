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
        <meta name="description" content="Multi-sig crypto relief fund operated by industry leaders to support the people of Türkiye after the disastrous earthquakes that hit the region." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/svgs/anka_white_green.svg" />
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:title" content="Anka Relief"></meta>
        <meta name="twitter:site" content="@AnkaRelief"></meta>
        <meta name="twitter:description" content="Multi-sig crypto relief fund operated by industry leaders to support the people of Türkiye after the disastrous earthquakes that hit the region."></meta>
        <meta name="twitter:url" content="ankarelief.org"></meta>
        <meta name="twitter:image" content="https://ankarelief.org/banner.png"></meta>
        <meta property="og:site_name" content="Anka Relief"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="ankarelief.org"></meta>
        <meta property="og:title" content="Anka Relief"></meta>
        <meta property="og:description" content="Multi-sig crypto relief fund operated by industry leaders to support the people of Türkiye after the disastrous earthquakes that hit the region."></meta>
        <meta property="og:image" content="https://ankarelief.org/banner.png"></meta>
        <meta property="og:locale" content="en_US"></meta>
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