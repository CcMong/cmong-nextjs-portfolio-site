import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg dark:text-light sm:text-base'>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
            {/*Copyright, Sitemap, Privacy Policy, Contact Info with number/email/address/Google Map, Social Media icons, Email List Sign-up, Brand/Logo, Call to Action, Tagline/Mission*/}
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='lg:py-2'>
                Created By&nbsp;<Link href="/about" className='underline underline-offset-2' target={"_blank"}>Charles Mong</Link>
            </div>
            
            <Link href="/contact" className='underline underline-offset-2' target={"_blank"}>Contact Me</Link>
        </Layout>

        
    </footer>
  )
}

export default Footer