"use client"
import { FooterComponents } from '@/components/footer'
import CheckoutIcons from '@/components/icons/checkout'
import { Button } from '@nextui-org/button'
import { motion, useMotionValueEvent, useScroll, } from 'framer-motion'
import { Poppins } from 'next/font/google'
import { useState } from 'react'
import './globals.css'
import { Providers } from './providers'
const inter = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const navigation = [
    { title: "Service", href: "#service" },
    { title: "Portfolio", href: "/" },]
  const [value, setValue] = useState(0);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (value) => {
    setValue(value);
  });


  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`${inter.className} bg `}>
        <Providers>
          {value >= 100 ?
            <motion.div
              className=' fixed z-[9999] w-full  flex justify-center items-center py-4'
              initial={{ scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
            >

              <nav className='flex items-center justify-between gap-4 px-5 py-2 text-white border-2 rounded-full shadow-2xl bg-primary'>
                <a href='#service' className='flex items-center gap-2'>
                  <CheckoutIcons className='h-5 fill-white' />
                  <h1>Servise</h1>
                </a>
                <a href='#service' className='flex items-center gap-2'>
                  <CheckoutIcons className='h-5 fill-white' />
                  <h1>Portfolio</h1>
                </a>  <a href='#service' className='flex items-center gap-2'>
                  <CheckoutIcons className='h-5 fill-white' />
                  <h1>Kontak</h1>
                </a>
              </nav>

            </motion.div>
            :
            <></>
            // <nav className={value >= 500 ?
            //   "transition-all duration-1000  fixed flex items-center justify-center text-white w-full gap-4 bg-primary z-[9999] py-4 border-b-1" :
            //   "transition-all duration-1000 fixed flex items-center justify-center w-full gap-4 backdrop-blur-md z-[9999] py-4 border-b-1"
            // }>
            //   <div className='flex items-center justify-center w-full px-10 sm:justify-between sm:px-40'>
            //     <h1 className={value >= 500 ? "text-white text-4xl font-black" : "text-primary text-4xl font-black"} >Sikojoki</h1>
            //     <div className='hidden gap-2 sm:flex '>
            //       {navigation.map((e, i) => {
            //         return (
            //           <a href={e.href} key={i}>
            //             <Button
            //               className={value >= 500 ? "text-white" : "text-primary"}
            //               radius='full'
            //               variant='light'
            //               color={value >= 500 ? "warning" : "primary"}
            //             >{e.title}</Button>
            //           </a>
            //         )
            //       })}

            //       <Button
            //         radius='full'
            //         className={value >= 500 ? "bg-white text-primary" : "primary"}

            //         color={value >= 500 ? "warning" : "primary"}
            //       >Kontak</Button>
            //     </div>
            //   </div>
            // </nav>
          }

          <main className='flex items-center justify-center min-h-screen'>
            {children}
          </main>
          <FooterComponents />
        </Providers>
      </body >
    </html >
  )
}
