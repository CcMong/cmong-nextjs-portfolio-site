import AnimatedText from '@/components/AnimatedText';
import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Link from 'next/link';
import GithubIcon from '@/components/Icons';
import Image from 'next/image';
import { LinkArrow } from '@/components/Icons';
import TransitionEffect from '@/components/TransitionEffect';

// const projects = [
//     {
//         type: "",
//         title: "Bodyweight Fitness and Exercise App",
//         summary: "",
//         imgUrl: "",
//         projectUrl: "",
//         githubUrl: "",
//     },
//     {
//         type: "",
//         title: "Bodyweight Fitness and Exercise App",
//         summary: "",
//         imgUrl: "",
//         projectUrl: "",
//         githubUrl: "",
//     },
//     {
//         type: "",
//         title: "Bodyweight Fitness and Exercise App",
//         summary: "",
//         imgUrl: "",
//         projectUrl: "",
//         githubUrl: "",
//     },
//     {
//         type: "",
//         title: "Bodyweight Fitness and Exercise App",
//         summary: "",
//         imgUrl: "",
//         projectUrl: "",
//         githubUrl: "",
//     }
// ]

const FeaturedProject = ({ type, title, summary, imgUrl, projectUrl, githubUrl }) => {

    return (

        <article className='w-full flex items-center justify-between rounded-xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-5 relative rounded-br-xl shadow-lg shadow-gray-700 lg:flex-col lg:p-8 xs:rounded-lg xs:rounded-br-xl xs:p-4'>

            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[1.5rem] bg-dark dark:bg-light xs:-right-2 xs:h-[102%] sm:h-[102%] xs:w-full xs:rounded-[1rem]'/>
            {/*Project Image*/}
            <Link href={projectUrl} target="_blank"
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full hover:scale-105 ease-in-out duration-300'>
                <Image src={imgUrl} alt={title} className="w-full h-auto"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
                width="600"
                height="200"
                />
            </Link>

            {/*Project Details*/}
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>{type}</span>
                <Link href={projectUrl} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-2xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 text-dark dark:text-light font-medium sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={githubUrl} target='_blank' className='w-10 hover:scale-110 ease-in-out duration-300'> <GithubIcon /> </Link>
                    <Link href={projectUrl} target='_blank'
                    className='ml-8 rounded-lg bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 text-md font-semibold hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light border-2 border-solid border-transparent hover:border-dark dark:hover:border-light shadow-gray-400 shadow-sm hover:scale-105 flex items-center ease-in-out duration-300 sm:px-4 sm:text-base'
                    >Visit&nbsp;Site <LinkArrow className={"max-w-[15px] ml-1"} /></Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ type, title, imgUrl, projectUrl, githubUrl, summary }) => {

    return (

        <article className='w-full flex items-center justify-center rounded-xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-5 relative flex-col shadow-xl shadow-gray-700 xs:p-4'>

            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[1.25rem] bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1rem]'/>
            {/*Project Image*/}
            <Link href={projectUrl} target="_blank"
            className='w-full cursor-pointer overflow-hidden rounded-lg hover:scale-105 ease-in-out duration-300'>
                <Image src={imgUrl} alt={title} className="w-full h-auto" width="600"
                height="200" />
            </Link>

            {/*Project Details*/}
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary dark:text-primaryDark font-medium text-lg lg:text-md md:text-sm'>{type}</span>
                <Link href={projectUrl} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-xl font-bold dark:text-light lg:text-lg sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 text-dark dark:text-light font-medium -tracking-wide sm:text-sm '>{summary}</p>
                <div className='m-2 flex items-center'>
                    <Link href={githubUrl} target='_blank' className='w-10 md:w-8 hover:scale-110 ease-in-out duration-300'> <GithubIcon /> </Link>
                    <Link href={projectUrl} target='_blank'
                    className='flex items-center ml-8 rounded-lg bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 text-md font-semibold hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light border-2 border-solid border-transparent hover:border-dark dark:hover:border-light shadow-gray-400 shadow-sm hover:scale-105 ease-in-out duration-300 md:text-sm'
                    > Visit <LinkArrow className={"max-w-[15px] ml-1"} /> 
                    </Link>
                </div>
            </div>
        </article>

    )
}

const portfolio = () => {
  return (
    <>
        <Head>
            <title>Charles Mong | Portfolio Page</title>
            <meta name="description" content="Recent Web Development Projects" />
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className="pt-16">
                <AnimatedText text="When Imagination Meets Passionate Expertise..."
                className='!text-6xl mb-16 lg:!text-5xl sm:mb-8 sm:!text-4xl xs:!text-3xl'
                />

                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    {/*USE MAP TO CLEAN UP CODE */}

                    <div className='col-span-12'>
                        <FeaturedProject 
                        type="Featured Project"
                        imgUrl="/images/wwl-cover2.JPG" 
                        title="&ldquo;Weightless Weightloss&rdquo; App"
                        summary="A feature-rich personal training application built and deployed with React, Bootstrap, React Router and Netlify. Users can plan and execute timed workout sessions, or perform pre-programmed ones, using guided bodyweight exercises that require no equipment or weights."
                        projectUrl="https://weightless-weightloss.netlify.app/"
                        githubUrl="https://github.com/Boxie999/weightless-weightloss"                        
                        />
                    </div>
                    
                    <div className='col-span-12'>
                        <FeaturedProject 
                        type="Featured Project"
                        imgUrl="/images/pmn-cover.JPG" 
                        title="&ldquo;Perfect Movie Night&rdquo; App"
                        summary="Streaming platform aggregation app built and deployed with jQuery, Bootstrap, Server APIs and Github Pages. Users can easily search, access and store information for movies and TV shows across ten of the largest streaming platforms all from one place."
                        projectUrl="https://drrobertson9673.github.io/Perfect_Movie_Night/index.html"
                        githubUrl="https://github.com/DRRobertson9673/Perfect_Movie_Night"                        
                        />                                                
                    </div>

                    <div className='col-span-6 sm:col-span-12'>
                        <Project 
                        type="Recent Project"
                        imgUrl="/images/weather-app.jpg"
                        title="Travel Companion Weather App"
                        summary="Created and deployed with JavaScript, Bootstrap, Server APIs and Github Pages. Access 5-day forecast travel weather information on-the-go in multiple cities."
                        projectUrl="https://ccmong.github.io/travel-companion-weather-app/"
                        githubUrl="https://github.com/CcMong/travel-companion-weather-app"                        
                        />
                    </div>

                    <div className='col-span-6 sm:col-span-12'>
                        <Project 
                        type="Recent Project"
                        imgUrl="/images/oppsum-screenshot-home2.png"
                        title="AI Article Summary Generator"
                        summary="Created with React, Redux Toolkit, Vite and Tailwind CSS, and deployed on Netlify. Oppsumm extracts any article or page content from a given URL, and generates a concise, info-rich summary quickly and effortlessly."
                        projectUrl="https://spiffy-cassata-e4acef.netlify.app/"
                        githubUrl="https://github.com/CcMong/ai-article-summary-generator"                        
                        />
                    </div>
                    
                    {/* <div className='col-span-6'>
                        Project 3
                    </div>
                    <div className='col-span-6'>
                        Project 4
                    </div> */}
                    
                </div>
            </Layout>
        </main>
    </>
  )
}

export default portfolio