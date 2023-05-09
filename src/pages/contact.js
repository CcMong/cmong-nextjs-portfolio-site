import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import contactImg from "../../public/images/contact.jpg";
import { motion } from 'framer-motion';
import { TwitterIcon, LinkedInIcon, EmailIcon3, CvIcon } from '@/components/Icons';
import GithubIcon from '@/components/Icons';

const contact = () => {
  return (
    <>
    <Head>
        <title>Charles Mong | Contact Page</title>
        <meta name="description" content="Contact Me For Web Development Services" />
    </Head>

    <TransitionEffect />

    <main className='flex text-dark dark:text-light w-full min-h-screen'>
      <Layout className='pt-8'>
        <AnimatedText text="Get In Touch..." className='mb-16 !text-5xl dark:text-light lg:!text-4xl sm:!text-3xl xs:!text-2xl sm:mb-8' />
        <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>

          <div className='col-span-3 flex flex-col relative h-max rounded-2xl border-2 border-solid border-dark dark:border-light/75 dark:bg-dark bg-light p-4 shadow-lg shadow-gray-700 dark:shadow-white xl:col-span-4 md:order-1 md:col-span-8'>
            
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-dark dark:bg-light'/>
            <div>
              <Image src={contactImg} alt="Contact Me" className='rounded-lg'/>
            </div>
            <div>
              <h3 className='pt-4 text-xl font-bold sm:text-lg'>Charles Mong</h3>
              <p className='font-bold pt-2 sm:text-sm'>Front-End Developer</p>
              <p className='-tracking-wide pt-4 sm:text-sm sm:tracking-wide'>I am available for freelance and full-time opportunities.</p>
              <p className='-tracking-wide py-4 sm:text-sm sm:tracking-wide'>
                If you would like to work with me, or if you have any questions or enquiries, get in touch and let&apos;s have a chat.          
              </p>       
              <div className='flex items-center justify-center flex-wrap py-8'>
                  <motion.a href="https://github.com/CcMong" target={"_blank"}
                  whileHover={{y:-3}}
                  className='w-8 sm:w-6 mr-3'>
                      <GithubIcon />
                  </motion.a>
                                    
                  <motion.a href="https://www.linkedin.com/in/charles-mong-642b25175" target={"_blank"}
                  whileHover={{y:-3}}
                  // whileTap={{scale:0.9}}
                  className='w-8 sm:w-6 mx-3'>
                      <LinkedInIcon />
                  </motion.a>            
                  
                  <motion.a href="https://twitter.com" target={"_blank"}
                  whileHover={{y:-3}}
                  className='w-8 sm:w-6 mx-3'>
                      <TwitterIcon />
                  </motion.a>
                  
                  <motion.a href="mailto:fullstackcodex@gmail.com" target={"_blank"}
                  whileHover={{y:-3}}
                  className='w-8 sm:w-6 mx-3'>
                      <EmailIcon3
                      className="dark:fill-light"
                      />
                  </motion.a> 
                  
                  <motion.a href="/CV-C.MONG.pdf" target={"_blank"}
                  whileHover={{y:-3}}
                  className='w-8 sm:w-6 ml-3'>
                      <CvIcon />
                  </motion.a>
              </div>


            </div>            
          </div>
          <div className='col-span-5'>
            , and Contact Form on the right
          </div>

        </div>
      </Layout>
        
    </main>
    </>
    
  )
}

export default contact