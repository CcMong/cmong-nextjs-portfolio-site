import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import BulletIcon from './BulletIcon';

const educationHistory = [
    {
        id: 1,
        level: "Master of Engineering (MEng) in Chemical Engineering",
        institution: "University of Cambridge",
        location: "Cambridge, UK",
        date: "2006 to 2007",
        info: ""

    },
    {
        id: 2,
        level: "Master of Arts (MA(Hons) Cantab) in Natural Sciences",
        institution: "University of Cambridge",
        location: "Cambridge, UK",
        date: "2007 to 2008",
        info: ""

    },
    {
        id: 3,
        level: "Bachelor of Arts (BA(Hons) Cantab) in Natural Sciences",
        institution: "University of Cambridge",
        location: "Cambridge, UK",
        date: "2003 to 2006",
        info: ""
    },
    {
        id: 4,
        level: "3 As at A-Level, 3 As at AS-Level",
        institution: "Greenford High School",
        location: "London, UK",
        date: "2003 to 2006",
        info: ""
    },

]

const Details = ({ level, institution, location, date, info }) => { 
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>

            <BulletIcon reference={ref}/>

            <motion.div
            initial={{y: 50}}
            whileInView={{y: 0}}
            transition={{duration: 0.5, type: "spring"}}
            >
                <h3 className="capitalize font-bold text-xl tracking-wide sm:text-lg xs:text-md">{level}&nbsp;|&nbsp;<span className='text-primary dark:text-primaryDark capitalize'>{institution}</span></h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {date}&nbsp; |&nbsp; {location}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {info}
                </p>
            </motion.div>
        </li>
    )

}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
        target: ref,
        offset: ["start center", "center center"] // eg. start end is the intersection where the start of the target meets the end of the container ("start center", "center start")
    }        
    )
  return (
    <div className='py-32'> {/*Changed from 64 to test... */}
        <h2 className='font-bold text-6xl mb-32 w-full text-center md:text-5xl xs:text-3xl md:mb-16'>
            Education
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

            {/*For timeline, will create scroll-linked animation with Framer Motion useScroll hook*/}
            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]' />
            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                {educationHistory.map((education) => (
                    <Details
                    key={education.id} 
                    level={education.level}
                    institution={education.institution}
                    date={education.date}
                    location={education.location}
                    info={education.info}
                    />
                ))}
                
            </ul>
        </div>
    </div>
  )
}

export default Education