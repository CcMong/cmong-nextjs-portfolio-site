import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import BulletIcon from './BulletIcon';

const workExperience = [
    {
        id: 1,
        position: "Trainee Front-End Web Developer",
        company: "edX / Trilogy Education Services",
        // companyLink: "",
        date: "Nov. 2022 to Mar. 2023",
        location: "UK",
        responsibility: "Created visually-compelling, responsive, interactive and accessibility-compliant page layouts by leveraging UX design principles, fundamental knowledge of HTML, CSS and JavaScript, and style frameworks. Retrieved data from servers using RESTful-compliant network API requests such as AJAX calls, Fetch and Axios. Collaborated within an Agile project team to build and deploy modern API-powered web applications with JavaScript, Node.js, React.js and other front-end libraries. Conducted Unit Testing, Test-Driven Development (TDD) for code functionality, and Behaviour-Driven Development (BDD) for front-end UX."
    },
    {
        id: 2,
        position: "Marketing and Business Strategy Consultant",
        company: "Freelance",
        // companyLink: "",
        date: "2015 to Present",
        location: "UK",
        responsibility: "Help domestic and foreign clients with formulating effective marketing and business strategies, and with entry into new international markets."
    },
    {
        id: 3,
        position: "Reservoir Engineer and Petrophysicist",
        company: "North Energy ASA",
        // companyLink: "",
        date: "2013 to 2015",
        location: "Alta, Norway",
        responsibility: "Evaluated oil and gas well prospects in the North Sea by interpreting petrophysical data and performing PVT simulations during research and real-time drilling, to provide technical insights that helped to manage the company's risk. Tested new technologies and created in-house guides."
    },    
    {
        id: 4,
        position: "Marketing Strategy Consultant ",
        company: "Freelance",
        // companyLink: "",
        date: "2009 to 2012",
        location: "UK",
        responsibility: "Maximised the effectiveness and profitability of clients’ online and offline sales and marketing strategies. Helped clients in the Education industry to implement technology for tuition, examination and evaluation purposes."
    },
    {
        id: 5,
        position: "Algorithmic Sales Trader ",
        company: "Lehman Brothers & Nomura Securities",
        // companyLink: "",
        date: "2007 to 2009",
        location: "London, UK",
        responsibility: ""
    },
    {
        id: 6,
        position: "Mergers and Acquisitions Summer Intern",
        company: "UBS",
        // companyLink: "",
        date: "Jul to Sep 2006",
        location: "London, UK",
        responsibility: ""
    }

]

const Details = ({ position, company, date, location, responsibility }) => { // removed companyLink
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>

            <BulletIcon reference={ref}/>

            <motion.div
            initial={{y: 50}}
            whileInView={{y: 0}}
            transition={{duration: 0.5, type: "spring"}}
            >
                <h3 className="capitalize font-bold text-xl tracking-wide sm:text-lg xs:text-md">{position}&nbsp;|&nbsp;<span className='text-primary capitalize dark:text-primaryDark'>{company}</span></h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {date}&nbsp; |&nbsp; {location}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {responsibility}
                </p>
            </motion.div>
        </li>
    )

}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
        target: ref,
        offset: ["start center", "center start"] // eg. start end is the intersection where the start of the target meets the end of the container
    }        
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-6xl mb-32 w-full text-center md:text-5xl xs:text-3xl md:mb-16'>
            Work Experience
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

            {/*For timeline, will create scroll-linked animation with Framer Motion useScroll hook*/}
            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]' />
            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                {workExperience.map((experience) => (
                    <Details 
                    key={experience.id}
                    position={experience.position}
                    company={experience.company}
                    date={experience.date}
                    location={experience.location}
                    responsibility={experience.responsibility}
                    />
                ))}
                
            </ul>
        </div>
    </div>
  )
}

export default Experience