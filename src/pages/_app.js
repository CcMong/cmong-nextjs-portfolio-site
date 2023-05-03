import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { AppWrapper } from '@/components/hooks/AppContext';
import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { Montserrat } from "next/font/google";
import Head from 'next/head';
import { useRouter } from 'next/router';

// Initialising the font:
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <AppWrapper>
        <Head>
          {/*We use this in every page, so cut from index.js and put in here*/}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark dark:bg-gradient-to-r from-dark to-[#0303429c] w-full min-h-screen`}>
          {/*Above, used the light variable created within tailwind.config.js */}
          <Navbar />
          <AnimatePresence mode="wait">
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>          
          <Footer />
        </main> 
      </AppWrapper>
            
    </>
    
  )
}
