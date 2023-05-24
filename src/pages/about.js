import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react';
import aboutImg from "../../public/images/profile/about.jpeg";
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Link from 'next/link';
import TransitionEffect from '@/components/TransitionEffect';

const AnimationNumbers = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, {once: true}); // Second argument to stop the numbers from animating every time they come back in view after scrolling

    useEffect(() => {
        if(isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }

        })
    }, [springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
    <Head>
        <title>Charles Mong | About Page</title>
        <meta name="description" content="About Charles Mong, Web Developer" />
    </Head>
    <TransitionEffect />
    <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        {/*Wrap in Layout component to get navbar and footer onto the page */}
        <Layout className='pt-16'>
            <AnimatedText text="Driven By Passion..." className='mb-16 !text-6xl dark:text-light lg:!text-5xl sm:!text-4xl xs:!text-3xl sm:mb-8' />
            <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>About&nbsp;Me</h2>
                    <p className='font-medium my-4 dark:text-light'>
                        Hi! I&apos;m <span className='font-bold text-cyan-700 dark:text-primaryDark'>Charles Mong</span>, a <span className='font-bold text-cyan-700 dark:text-primaryDark'>freelance web developer</span> based near London, UK. I specialise in building web applications using <span className='font-bold text-cyan-700 dark:text-primaryDark'>JavaScript</span>, <span className='font-bold text-cyan-700 dark:text-primaryDark'>React.js</span> and <span className='font-bold text-cyan-700 dark:text-primaryDark'>Next.js</span>.
                    </p>  

                    <p className='font-medium my-4 dark:text-light'>
                    <span className='font-bold text-cyan-700 dark:text-primaryDark'>Web development</span> goes beyond beauty - it solves problems and crafts intuitive, <span className='font-bold text-cyan-700 dark:text-primaryDark'>value-rich experiences for users</span>. I am passionate about turning an idea or vision into something that, quite simply, makes people&apos;s lives easier.
                    </p>

                    <p className='font-medium my-4 dark:text-light'>
                        My background is in Engineering and Finance, and I have channelled the skills and experiences acquired over the last 15 years into becoming an innovative and highly effective developer.
                    </p>

                    {/* <p className='font-medium my-4 dark:text-light'>
                        My approach to web development goes beyond just the aesthetic - it is about solving problems and crafting intuitive, value-rich experiences for users. My true passion lies in building an idea or vision into something that takes on a life of its own, with the potential for real impact.
                    </p>  

                    <p className='font-medium my-4 dark:text-light'>
                        With a background in Engineering and Finance, my analytical problem-solving skills, creative adaptability under pressure, exceptional communication and organisational skills, attention to detail, and commitment to delivering excellent work equip me to provide high-quality service to clients.
                    </p> */}

                    <p className='font-medium my-4 dark:text-light'>
                    I&apos;d love to hear from you, and I look forward to putting my skills, experience and passion to work in realising your vision.
                    </p>

                    {/* <p className='font-medium my-4 dark:text-light'>
                        Reach out and let&apos;s connect - I&apos;d love to hear about your next project. I am always seeking innovative ways to bring my clients&apos; visions to life, and I look forward to the opportunity of working together to build yours.
                    </p> */}
                </div>

                <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark dark:border-light/75 dark:bg-dark bg-light p-4 shadow-lg shadow-gray-700 dark:shadow-white xl:col-span-4 md:order-1 md:col-span-8'>
                    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
                    <Image src={aboutImg} alt="Charles Mong, Web Developer" className='w-full h-auto rounded-xl'
                    priority
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                    />
                </div>

                <div className='col-span-2 flex flex-col items-end justify-between dark:text-light xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimationNumbers value={15} />+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>satisfied clients</h2>
                    </div>
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimationNumbers value={10}/>+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>projects completed</h2>
                    </div>
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimationNumbers value={1}/>+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>years of experience</h2>
                    </div>
                    
                </div>

            </div>
            <Link href="/about#skills">
                <p className='my-6 underline cursor-pointer font-semibold text-cyan-700 dark:text-primaryDark md:text-center'>Find Out More About My Skills and Background</p>
            </Link> 
            <Skills id="#skills" />
            <Experience />
            <Education />

        </Layout>
        
    </main>
        
    </>
  )
}

export default about
