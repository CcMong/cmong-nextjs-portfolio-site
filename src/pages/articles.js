import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'

const articles = () => {
  return (
    <>
    <Head>
        <title>Charles Mong | Articles Page</title>
        <meta name="description" content="Web Development Articles and Posts" />
    </Head>
    <main className='w-full mb-16 flex flex-col item-center justify-center overflow-hidden'>
        <Layout className='pt-16'>
            <AnimatedText 
            text="Web Development Articles" className='mb-16 !text-6xl'
            />
            <ul className='grid grid-col-2 gap-16'>
                <li>Featured Article-1</li>
                <li>Featured Article-2</li>
            </ul>
        </Layout>
    </main>
    </>
  )
}

export default articles