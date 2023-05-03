import React from 'react';
import { CircularText, CircularText2, CircularText3 } from './Icons';
import Link from 'next/link';

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-4 md:left-auto md:top-0 md:bottom-auto md:absolute'>
        
        <div className='w-48 h-auto flex items-center justify-center relative hover:scale-105 ease-in-out duration-300 md:w-32'>
            <CircularText3 className={"animate-spin-slow dark:fill-light"}/>

            <Link href="mailto:fullstackcodex@gmail.com"
            className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark dark:bg-light text-light dark:text-dark shadow-md border border-solid border-dark w-[60px] dark:border-light h-[60px] rounded-full text-sm font-semibold hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light p-1 text-center shadow-gray-400 md:w-11 md:h-11 md:shadow-none md:text-[13px]'>
                Hire Me

            </Link>

        </div>
    </div>
  )
}

export default HireMe