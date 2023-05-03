import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const skillsArray = [
    {
        id: 1,
        skill: "HTML",
        x: "-10vw",
        y: "-6vw",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
        id: 2,
        skill: "CSS",
        x: "10vw",
        y: "-6vw",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },
    {
        id: 3,
        skill: "JavaScript",
        x: "0vw",
        y: "-19vw",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
        id: 4,
        skill: "ReactJS",
        x: "-20vw",
        y: "-12vw",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
        id: 5,
        skill: "NextJS",
        x: "20vw",
        y: "-12vw",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
    },
    {
        id: 6,
        skill: "Bootstrap",
        x: "32vw",
        y: "0vw",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
    },
    // {
    //     id: 7,
    //     skill: "Git",
    //     x: "",
    //     y: "",
    //     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    // },
    
    {
        id: 8,
        skill: "Tailwind",
        x: "-32vw",
        y: "0vw",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
    },
    // {
        // id: 9,
    //     skill: "Figma",
    //     x: "",
    //     y: "",
    //     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
    // },
    {
        id: 10,
        skill: "Vercel",
        x: "10vw",
        y: "6vw",
        src: "https://cdnjs.cloudflare.com/ajax/libs/simple-icons/3.2.0/vercel.svg"
    },
    //{
        // id: 11,
    //     skill: "Jest",
    //     x: "",
    //     y: "",
    //     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
    // },
    //{
        // id: 12,
        // skill: "jQuery",
    //     x: "",
    //     y: "",
    //     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg"
    // },
    {
        id: 13,
        skill: "NodeJS",
        x: "-10vw",
        y: "6vw",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },    
    {
        id: 14,
        skill: "TypeScript",
        x: "0vw",
        y: "19vw",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
    },
    //{
        // id: 15,
        // skill: "NPM",
    //     x: "",
    //     y: "",
    //     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
    // },
    {
        id: 16,
        skill: "Express",
        x: "20vw",
        y: "12vw",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
    },
    {
        id: 17,
        skill: "MongoDB",
        x: "-20vw",
        y: "12vw",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    },
    {
        id: 18,
        skill: "Sass",
        x: "0vw",
        y: "-8vw",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
    }



]

const Skill = ({ name, x, y, src }) => {

    return (
        <motion.div className='flex flex-col items-center justify-center rounded-full font-semibold bg-transparent dark:bg-transparent dark:text-light text-dark py-3 px-6 shadow-dark cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:font-bold sm:text-xs'
            whileHover={{scale: 1.05}}
            initial={{x: 0, y: 0}}
            whileInView={{x: x, y: y, transition: {duration: 1.5}}}
            
            viewport={{once: true}}>
                <Image src={src} width="50" height="50" alt={name} 
                className='md:w-[30px] sm:w-[20px] dark:bg-light'/>
                <p className="text-clip bg-light dark:bg-dark/75">{name}</p>
        </motion.div>
    )

}

const Skills = () => {

    // Repeating Radial Gradient will be used for the planetary effect

  return (
    <div id="skills">
        <h2 className='font-bold text-6xl mt-64 mb-16 w-full text-center md:text-5xl md:mt-32'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>

            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-light/50 dark:bg-dark/75 text-dark dark:text-light p-8 shadow-dark cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2'
            whileHover={{scale: 1.05}}>
                <p className='text-center sm:hidden'>Skills</p>
            </motion.div>

            {skillsArray.map((skill) => (
                <Skill 
                key={skill.id}
                name={skill.skill} 
                x={skill.x} 
                y={skill.y} 
                src={skill.src} />
            ))}

        </div>
    
    </div>
    
  )
}

export default Skills