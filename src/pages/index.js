import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import portrait from "../../public/images/profile/cmong-profile-fade.png";
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { motion } from 'framer-motion';
import GithubIcon, { LinkArrow, LinkedInIcon } from '@/components/Icons';
import life from "../../public/images/ezgif.com-resize.gif"
import HireMe from '@/components/HireMe';
import TransitionEffect from '@/components/TransitionEffect';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Charles Mong | Web Developer</title>
        <meta name="description" content="Charles Mong, Front-End Web Developer Portfolio" />        
      </Head>
      <TransitionEffect />

      <main className='flex items-center text-dark dark:text-light w-full min-h-screen'>

        <Layout className='pt-0 md:p-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>

            {/*Profile Image on LHS*/}
            <div className='w-1/2 lg:w-[60%] md:w-full'>
              <Link href="/about">
                <Image src={portrait} alt="Charles Mong, Web Developer" className='w-full h-auto lg:inline-block lg:w-full lg:p-5 md:inline-block md:w-full'
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
                />
              </Link>              
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              {/* <h1>Vision Made Sentient... Ideas Brought To Life With Code, Design And Passion</h1>
              <h1>Breathing Life Into Vision With Code</h1>
              <h1>Breathing Life Into Vision With Code, Bringing Colour To Ideas With Design</h1>
              <h1>Vision Brought To Life With Code, Ideas Made Real With Design</h1>
              <h1></h1>
              <h2>Limitation Is Simply The Breathtaking Horizon Of Your Next Conquest</h2> */}
              {/* <AnimatedText text="You Created It..." 
              className='!text-5xl -tracking-wde text-left my-2 text-center'/> */}
              
              <AnimatedText text="Vision Realised With Code... Ideas Brought To Life By Design..." 
              className='!text-5xl -tracking-wide text-left my-2 font-sans xl:!text-4xl lg:!text-center lg:!text-5xl md:!text-4xl sm:!text-3xl'/>
              
              {/* <AnimatedText text="Now Let&apos;s Bring It To Life..." 
              className='!text-5xl -tracking-wde text-left my-2 text-center'/> */}

              {/*ECG Images*/}
                {/* <Link href="/portfolio" className='flex'>
                  <Image src={life} 
                  height="50"
                  className='item-center my-1' />
                  <Image src={life} 
                  height="50"
                  className='item-center' />
                </Link> */}
                {/*REMEMBER TO HIDE ONE IMAGE AT SMALLER SCREEN WIDTHS */}

              <motion.p className='my-2 text-base font-medium -tracking-wide text-left lg:text-center md:text-sm sm:text-xs'
              variants={{
                initial: {
                    opacity: 0,
                    x: 100
                },
                animate: {
                    opacity: 1,
                    x:0,
                    transition: {
                        duration: 1,
                    }
                }
              }}
              initial="initial"
              animate="animate"
              >                
                Hi! I'm <span className='font-bold text-cyan-700 dark:text-primaryDark text-lg'>Charles Mong,</span> a <span className='font-bold text-cyan-700 dark:text-primaryDark'>Front-end Developer.</span> I use <span className='font-bold text-cyan-700 dark:text-primaryDark'>React JS</span> to morph ideas into innovative and accessible <span className='font-bold text-cyan-700 dark:text-primaryDark'>web applications</span> that deliver <span className='font-bold text-cyan-700 dark:text-primaryDark'>outstanding user experiences</span>. <br /><br />
                I&apos;m ready when you are - Get in touch and let's connect!
              </motion.p>

              <div className='flex items-center self-start mt-3 lg:self-center'>
                <Link href="mailto:fullstackcodex@gmail.com" target={"_blank"}
                className='flex items-center bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 rounded-xl text-lg font-semibold hover:bg-light hover:dark:bg-dark hover:text-dark hover:dark:text-light border-2 border-solid border-transparent hover:border-dark hover:dark:border-light shadow-gray-400 shadow-md hover:scale-110 mr-4 md:p-2 md:px-4 md:text-base'
                >Contact 
                </Link> {/*CHANGE THIS TO LINK TO CONTACT FORM */}

                <Link href="/dummy.pdf" target={"_blank"}
                className='flex items-center bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 rounded-xl text-lg font-semibold hover:bg-light hover:dark:bg-dark hover:text-dark hover:dark:text-light border-2 border-solid border-transparent hover:border-dark hover:dark:border-light shadow-gray-400 shadow-md hover:scale-110 mr-4 md:p-2 md:px-4 md:text-base'
                download={true}
                >Resumé <LinkArrow className={"w-6 ml-1"} />
                </Link> {/*DIRECT TO CONTACT PAGE WHEN CREATED */}
              </div>
              {/* <div className='flex items-center justify-between'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in-out duration-300 w-16 h-16 mx-1'>
                  <motion.a href="https://github.com" target={"_blank"}
                  whileHover={{y:-3}}
                  className='w-6 mr-3'>
                  <GithubIcon />
                  </motion.a>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in-out duration-300 w-16 h-16 mx-1'>
                  <motion.a href="https://github.com" target={"_blank"}
                  whileHover={{y:-3}}
                  className='w-6 mr-3'>
                  <LinkedInIcon />
                  </motion.a>
                </div>
              </div>
               */}
              

            </div>
         </div>
       
        </Layout>
        <HireMe />
      </main>
    </div>
  )
}
