import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head';
import React, { use } from 'react';
import Image from 'next/image';
import contactImg from "../../public/images/contact.jpg";
import { motion } from 'framer-motion';
import { TwitterIcon, LinkedInIcon, EmailIcon3, CvIcon } from '@/components/Icons';
import GithubIcon from '@/components/Icons';
import { useState } from 'react';
//import PhoneInput from 'react-phone-input-2';
//import "react-phone-input-2/lib/style.css";
import PhoneInput from 'react-phone-number-input';
import "react-phone-number-input/style.css";

export const Contact = () => {

  // States to Manage Contact Form Fields

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [value, setValue] = useState(); // for the phone number
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // State to Manage Form Validation

  const [errors, setErrors] = useState({});

  // Setting Button Text on Form Submission

  const [buttonText, setButtonText] = useState("Submit");

  // States to Set Success of Failure Messages

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation Check Method

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if(fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if(email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if(value.length <= 0) {
      tempErrors["value"] = true;
      isValid = false;
    }
    if(subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if(message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  // Handling Form Submission

  const handleSubmit = async (event) => {
    event.preventDefault();

    let isValidForm = handleValidation();

    if(isValidForm) {

      setButtonText("Sending...");

      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          fullname: fullname,
          email: email,
          //phonenumber: value,
          subject: subject,
          message: message
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();

      if(error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Submit");
        return;
      }

      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");

      // Then reset the form fields

      setFullname("");
      setEmail("");
      setSubject("");
      setMessage("");
      setValue("");
    }    

    console.log(fullname, email, value, subject, message)
  };

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

          {/*Details and Call to Action */}
          <aside className='col-span-3 flex flex-col relative h-max rounded-2xl border-2 border-solid border-dark dark:border-light/75 dark:bg-dark bg-light p-4 shadow-lg shadow-gray-700 dark:shadow-white xl:col-span-3 md:order-1 md:col-span-8'>
            
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-dark dark:bg-light'/>

            <div>
              <Image src={contactImg} alt="Contact Me" className='rounded-lg hover:scale-105 ease-in-out duration-300'/>
            </div>

            <div className='dark:text-light'>
              <h3 className='pt-4 text-xl font-bold sm:text-lg mt-2'>Charles Mong</h3>
              <p className='font-bold pt-2 sm:text-sm mb-4 '>Front-End Web Developer</p>
              <p className='-tracking-wide pt-4 sm:text-sm sm:tracking-wide my-2'>I am available for freelance and full-time opportunities.</p>
              <p className='-tracking-wide py-4 sm:text-sm sm:tracking-wide my-2'>
                If you would like to work with me, or if you have any questions or enquiries, get in touch and let&apos;s have a chat.          
              </p>               
              
            </div>  
            <div className='flex items-center justify-center flex-wrap py-8'>
              <motion.a href="https://github.com/CcMong" target={"_blank"}
              whileHover={{y:-3}}
              className='w-8 sm:w-6 mr-3'>
                <GithubIcon />
              </motion.a>
                                    
              <motion.a href="https://www.linkedin.com/in/charles-mong-642b25175" target={"_blank"}
              whileHover={{y:-3}}
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
          </aside>

          {/*Contact Form*/}
          <div className='col-span-5 w-full flex flex-col relative h-max rounded-2xl border-2 border-solid border-dark dark:border-light/75 dark:bg-dark bg-light p-4 shadow-lg shadow-dark/80 dark:shadow-white xl:col-span-5 md:order-1 md:col-span-8'>

            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-dark dark:bg-light'/>
            
            <h1 className='text-2xl font-extrabold text-center dark:text-light my-8'>Let&apos;s Talk About Your Projects...</h1>

            <p className='text-sm md:text-xs py-4 px-8 text-center dark:text-light'>Please fill out the form below with your contact details, along with your message, and I will respond as soon as I can.</p>

            <form
            onSubmit={handleSubmit}
            className='rounded-lg shadow-xl flex flex-col px-8 py-8 bg-light dark:bg-dark sm:text-sm'
            >
              {/*Name*/}
              <div className='flex flex-col'>
                <label
                htmlFor='fullname'
                className='dark:text-light mt-8'
                >
                  Full Name<span className='dark:text-primaryDark text-red-500'>*</span>:
                </label>

                <input
                name="fullname"
                type='text'
                value={fullname}
                onChange={(event) => {
                  setFullname(event.target.value)
                }}
                className='bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-dark dark:ring-light font-light text-dark dark:text-light border-dark/75 dark:border-light/50'
                />
                {errors?.fullname && (
                  <p className='text-primary dark:text-primaryDark my-2 text-xs'>Please enter your name. This field cannot be left empty.</p>
                )}
              </div>

              {/*Email*/}
              <div className='flex flex-col'>
                <label
                htmlFor='email'
                className='dark:text-light mt-8'
                >
                  Email<span className='dark:text-primaryDark text-red-500'>*</span>:
                </label>

                <input
                name="email"
                type='email'
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
                className='bg-transparent border-b border-dark/75 dark:border-light/50 py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-dark dark:ring-light font-light text-dark dark:text-light'
                /> 
                {errors?.email && (
                  <p className='text-primary dark:text-primaryDark my-2 text-xs'>Please enter your email. This field cannot be left empty.</p>
                )}
              </div>

              {/*Phone Number*/}
              <div className='flex flex-col'>
                <label
                htmlFor='phonenumber'
                className='dark:text-light mt-8'
                >
                  Phone Number:
                  <br /><span className='sm:text-[8px] text-[10px]'>(Click on the flag to select the appropriate international code)</span>
                </label>

                {/* <PhoneInput 
                country={"us"}
                value={phoneNumber}
                onChange={(phone) => {
                  setPhoneNumber({phone: phone.value})
                }}
                /> */}

                {/* <input
                name="phonenumber"
                type='tel'
                value={phoneNumber}
                onChange={(event) => {
                  setPhoneNumber(event.target.value)
                }}
                className='bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-dark dark:ring-light font-light text-dark dark:text-light'
                />  */}
              
                <PhoneInput 
                placeholder="Enter phone number"
                defaultCountry="GB"
                value={value}
                onChange={setValue}
                className='bg-transparent py-4 focus:outline-none focus:rounded-md focus:ring-1 ring-dark dark:ring-light font-light text-dark scale-105 px-3 mt-2 dark:border-light border-dark/75'
                />                           
                

              </div>

              {/*Subject*/}
              <div className='flex flex-col'>
                <label
                htmlFor='subject'
                className='dark:text-light mt-8'
                >
                  Subject<span className='dark:text-primaryDark text-red-500'>*</span>:
                </label>

                <input
                name="subject"
                type='text'
                value={subject}
                onChange={(event) => {
                  setSubject(event.target.value)
                }}
                className='bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-dark dark:ring-light font-light text-dark dark:text-light border-dark/75 dark:border-light/50'
                /> 

                {errors?.subject && (
                  <p className='text-primary dark:text-primaryDark my-2 text-xs'>Please enter a subject. This field cannot be left empty.</p>
                )}
              </div>

              {/*Message*/}
              <div className='flex flex-col'>
                <label
                htmlFor='email'
                className='dark:text-light mt-8'
                >
                  Message<span className='dark:text-primaryDark text-red-500'>*</span>:
                  
                </label>

                <textarea
                name="message"
                type='text'
                value={message}
                rows={5}
                onChange={(event) => {
                  setMessage(event.target.value)
                }}
                className='bg-transparent border py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-dark dark:ring-light font-light text-dark dark:text-light border-dark/75 dark:border-light/50'
                
                /> 

                {errors?.message && (
                  <p className='text-primary dark:text-primaryDark my-2 text-xs'>Please enter a message. This field cannot be left empty.</p>
                )}
              </div>

              {/*Send Button*/}

              <div className="flex flex-row items-center justify-center">
                <button
                  type="submit"
                  className="px-6 mt-8 py-2 bg-dark hover:bg-light dark:bg-light hover:dark:bg-dark hover:dark:border-light border-dark border-solid border-2 dark:border-dark text-light dark:text-dark hover:text-dark hover:dark:text-light rounded-xl text-lg font-bold flex flex-row items-center hover:scale-105 ease-in-out duration-300 group"
                >
                  {buttonText}
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    className="dark:text-primary text-primaryDark group-hover:dark:text-primaryDark group-hover:text-primary ml-2"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
              
              
              <div className='text-primary dark:text-primaryDark text-xs sm:text-xxs mt-4'>

                {showSuccessMessage && (
                  <p>
                    Thank you very much! Your message has been delivered.
                  </p>
                )}

                {showFailureMessage && (
                  <p>
                    Oops! Something went wrong. Please try again.
                  </p>
                )}

              </div>

            </form>


          </div>

        </div>
      </Layout>
        
    </main>
    </>
    
  )
}

const contact = () => {
  return (
    <Contact />
  )
}

export default contact