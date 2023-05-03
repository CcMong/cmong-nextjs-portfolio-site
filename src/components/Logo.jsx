import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from "../../public/images/white-logo-transp-bg.png";
import { motion } from 'framer-motion'; 

const Logo = () => {

    const MotionLink = motion(Link); // Framer motion. We can now use the MotionLink element

  return (
    <div className='flex items-center justify-center mt-2 hover:scale-110 ease-in-out duration-300'>
        <MotionLink href="/"
        className='w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl border border-solid border-transparent dark:border-light'
        whileHover={{
            backgroundColor: ["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
            transition: {duration: 2, repeat: Infinity}
        }}
        >
            <Image src={logo} alt="Logo"
            className='w-16 h-16 rounded-full'
            />
        
        </MotionLink>
    </div>
  )
}

export default Logo