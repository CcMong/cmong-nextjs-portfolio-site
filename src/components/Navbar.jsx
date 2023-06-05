import Link from 'next/link'
import React, { useState } from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import GithubIcon, { CvIcon, EmailIcon3, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon } from './Icons';
import { motion } from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher';

// const CustomLink = ({ href, title, className="" }) => {
//     const router = useRouter();

//     return (
//         <Link href={href} className={`${className} relative group`}>
//             {title}

//             <span className={`
//             h-[1px] inline-block bg-dark absolute left-0 -bottom-0.6 group-hover:w-full transition-[width] ease-in-out duration-300
//             ${router.asPath === href ? "w-full" : "w-0"}
//             `}>&nbsp;</span>
//         </Link>
//     )
// }

// const navLinksArray = [
//     {
//         title: "Home",
//         href: "/",
//         className: "mr-4"
//     },
//     {
//         title: "About",
//         href: "/about",
//         className: "mx-4"
//     },
//     {
//         title: "Skills",
//         href: "/about#skills",
//         className: "mx-4"
//     },
//     {
//         title: "Portfolio",
//         href: "/portfolio",
//         className: "mx-4"
//     },
//     {
//         title: "Contact",
//         href: "/contact",
//         className: "ml-4"
//     }, // Will add Articles later on
// ]

const CustomMobileLink = ({ href, title, className = "", toggle }) => {

    const router = useRouter();

    const handleMobileLinkClick = () => {

        toggle();
        router.push(href);
    }

    return (
        <>
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleMobileLinkClick}>
            {title}
            
            <span
            className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? "w-full" : "w-0"} dark:bg-dark
            `}
            >
                
                   

            </span>
        </button>
        </>
    );

};

const Navbar = () => {

    const router = useRouter();

    const navLinks = ["Home", "About", "Skills", "Portfolio", "Contact"];

    const navLinkStyleClass = `hover:scale-105 hover:border-b-4 border-[#1b1b1b] dark:border-light ease duration-300 ${navLinks.forEach((item) => {item.toLowerCase === router.asPath ? `border-b-4 border[#1b1b1b] dark:border-light w-full` : `w-0`})}` // ???????????

    {/*Using the useThemeSwitcher hook that we created to alter the light/dark mode:*/}
    const [mode, setMode] = useThemeSwitcher();

    // const contactLinks = [
    //     {
    //         name: "Github",
    //         url: "",
    //         iconUrl: ""
    //     },
    //     {
    //         name: "LinkedIn",
    //         url: "",
    //         iconUrl: ""
    //     },
    //     {
    //         name: "Github",
    //         url: "",
    //         iconUrl: ""
    //     }

    // ]

    // const CustomLink = ({ href, title, className=""}) => {
    //     return (
    //         <motion.a href={href} className={`${className}`}>
    //             {title}
    //         </motion.a>
    //     )
    // }

    {/*Using state to operate the hamburger button*/}
    const [isOpen, setIsOpen] = useState(false);

    {/*Function to handle the hamburger open/close click event*/}
    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    }

  return (
    <header className='w-full px-32 xl:px-14 pr-24 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>

        {/*Hamburger Button */}
        <button className='hidden lg:flex lg:flex-col justify-center items-center' onClick={handleMenuClick}>
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}></span>
            {/*Want to hide the middle span when the menu is open, and cross the outer spans to form an "x" */}
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}></span>
        </button>

        {/*Wrap all the navigation links in a div so that we can hide them at lower widths. Remember in config file that the widths are done from max widths, and not mobile first */}

        <div className='w-full flex justify-between items-center lg:hidden'>
            <nav>            
                {/*Add Blog/Articles link later on */}
                <ul className='flex'>
                    {navLinks.map((link) => (
                        
                    <motion.a key={link} href={link === "Home" ? `/` : link === "Skills" ? `/about#skills` : link === "Contact" ? `mailto:fullstackcodex@gmail.com` : `/${link.toLowerCase()}`}
                    className={link === navLinks[0] ? `mr-4 ${navLinkStyleClass}` : link === navLinks[-1] ? `ml-4 ${navLinkStyleClass}` : `mx-4 ${navLinkStyleClass}`}>
                        <li>{link}</li>
                        {/* <span className='border-b-4 border-indigo-500 border-t-4'>oijooij</span> */}
                    </motion.a>
                ))}
                </ul>                
            </nav>

            {/*Links to Socials and Contact links, and Light/Dark Mode button*/}
            <nav className='flex items-center justify-center flex-wrap'>
                
                <motion.a href="https://github.com/CcMong" target={"_blank"}
                whileHover={{y:-3}}
                className='w-6 mr-3'>
                    <GithubIcon />
                </motion.a>
                
                {/* <div className='rounded-full shadow-md shadow-[#602e9e] p-2 cursor-pointer hover:scale-110 ease-in-out duration-300 w-8 h-8 mx-1'> */}
                <motion.a href="https://www.linkedin.com/in/charles-mong-642b25175" target={"_blank"}
                whileHover={{y:-3}}
                // whileTap={{scale:0.9}}
                className='w-6 mx-3'>
                    <LinkedInIcon />
                </motion.a>            
                
                <motion.a href="https://twitter.com" target={"_blank"}
                whileHover={{y:-3}}
                className='w-6 mx-3'>
                    <TwitterIcon />
                </motion.a>
                
                <motion.a href="mailto:fullstackcodex@gmail.com" target={"_blank"}
                whileHover={{y:-3}}
                className='w-6 mx-3'>
                    <EmailIcon3
                    className="dark:fill-light"
                    />
                </motion.a> 
                
                <motion.a href="/CV-C.MONG-fewdev-.pdf" target={"_blank"}
                whileHover={{y:-3}}
                className='w-6 ml-3'>
                    <CvIcon />
                </motion.a>

                {/*Dark/Light Mode Button */}
                <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className={`ml-4 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}>
                    {mode === "dark" ? 
                    <MoonIcon className={"fill-dark"} />
                    : <SunIcon className={"fill-dark"} />
                    }

                </button>
                            
            </nav>
        </div>  

        {/*Mobile Menu 
        ---------------*/}
        {/*Write a condition that displays the entire div when the isOpen state is true. Otherwise, it shows nothing. Then we can use the links to toggle between the states and close the mobile menu when clicked as it routes to the respective link*/}
        {
            isOpen ? 

            <motion.div 
            initial={{scale: 0, opacity: 0, x: "-50%", y: "-50%"}}
            animate={{scale: 1, opacity: 1}}
            className='min-w-[70vw] flex flex-col justify-between items-center z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'>

                <div className='absolute left-[50%] top-5 translate-x-[-50%]'>
                    <Logo />
                </div>
                

                <nav className='flex flex-col items-center justify-center'>            
                    {/*Add Blog/Articles link later on */}
                    <CustomMobileLink href="/" title="Home" className='' toggle={handleMenuClick}  />
                    <CustomMobileLink href="/about" title="About" className='' toggle={handleMenuClick}  />
                    <CustomMobileLink href="/about#skills" title="Skills" className='' toggle={handleMenuClick}  />
                    <CustomMobileLink href="/portfolio" title="Portfolio" className='' toggle={handleMenuClick}  />
                    <CustomMobileLink href="/contact" title="Contact" className='' toggle={handleMenuClick}  />             
                </nav>

                {/*Links to Socials and Contact links, and Light/Dark Mode button*/}
                <nav className='flex items-center justify-center flex-wrap mt-2'>
                    
                    <motion.a href="https://github.com/CcMong" target={"_blank"}
                    whileHover={{y:-3}}
                    className='w-6 mr-3 bg-light rounded-full dark:bg-dark sm:mx-1'>
                        <GithubIcon />
                    </motion.a>
                    
                    {/* <div className='rounded-full shadow-md shadow-[#602e9e] p-2 cursor-pointer hover:scale-110 ease-in-out duration-300 w-8 h-8 mx-1'> */}
                    <motion.a href="https://www.linkedin.com/in/charles-mong-642b25175" target={"_blank"}
                    whileHover={{y:-3}}
                    // whileTap={{scale:0.9}}
                    className='w-6 mx-3 sm:mx-1'>
                        <LinkedInIcon />
                    </motion.a>            
                    
                    <motion.a href="https://twitter.com" target={"_blank"}
                    whileHover={{y:-3}}
                    className='w-6 mx-3 sm:mx-1'>
                        <TwitterIcon />
                    </motion.a>
                    
                    <motion.a href="mailto:fullstackcodex@gmail.com" target={"_blank"}
                    whileHover={{y:-3}}
                    className='w-6 mx-3 sm:mx-1'>
                        <EmailIcon3
                        className="fill-light dark:fill-dark"
                        />
                    </motion.a> 
                    
                    <motion.a href="/CV-C.MONG.pdf" target={"_blank"}
                    whileHover={{y:-3}}
                    className='w-6 ml-3 sm:mx-1'>
                        <CvIcon />
                    </motion.a>

                    {/*Dark/Light Mode Button */}
                    <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
                    className={`ml-4 w-8 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}>
                        {mode === "dark" ? 
                        <MoonIcon className={"fill-dark"} />
                        : <SunIcon className={"fill-dark"} />
                        }

                    </button>
                                
                </nav>
            </motion.div>      

            : null
        }           
              

        <div  className="absolute left-[50%] top-2 translate-x-[-50%]">
            {/*Absolute translation to centre the logo on the page */}
            <Logo />
        </div>

    </header>
  )
}

export default Navbar