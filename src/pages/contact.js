import TransitionEffect from '@/components/TransitionEffect'
import Head from 'next/head'
import React from 'react'

const contact = () => {
  return (
    <>
    <Head>
        <title>Charles Mong | Contact Page</title>
        <meta name="description" content="Contact Me For Web Development Services" />
    </Head>
    <TransitionEffect />
    <main>
        Contact Image on the left, and Contact Form on the right
    </main>
    </>
    
  )
}

export default contact