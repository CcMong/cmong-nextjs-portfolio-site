import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import TransitionEffect from '@/components/TransitionEffect';
import Layout from '@/components/Layout';

const PageNotFound = () => {
  return (
    <div>
        <Head>
            <title>Charles Mong | 404 Page</title>
            <meta name="description" content="Charles Mong, Web Developer. Page Not Found." />
        </Head>
        <TransitionEffect />
        <main className='flex w-full flex-col text-center items-center justify-center dark:text-light'>
            <Layout>
                <h1 className='text-5xl my-10 font-bold sm:text-3xl'>That page does not exist!</h1>
                <h2 className="text-xl my-8 sm:text-lg">I'm sorry, but the page you were looking for could not be found.</h2>
                <p className='my-4 text-md sm:text-sm'>Please return to the <span className='font-bold text-cyan-700 dark:text-primaryDark'><Link href="/">Home Page</Link></span>, or <span className='font-bold text-cyan-700 dark:text-primaryDark'><Link href="/contact">Contact Me</Link></span> if you cannot find what you're looking for. I'd love to help!</p>
            </Layout>
            
        </main>
        
    </div>
  )
}

export default PageNotFound;