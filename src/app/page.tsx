"use client"
import PriceComponents from '@/components/price'
import { Button } from '@nextui-org/button'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import HoverDevCards from '@/components/card';
import Card from '@/components/card';
export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });

  }, [])
  return (
    <div className='flex flex-col w-full px-10 sm:px-40 '>
      <div className="flex items-center justify-center min-h-screen py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div data-aos="fade-up" className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <a href="/" className="mb-6 sm:mx-auto">
              <div className="flex items-center justify-center w-12 h-12 rounded-full ">
                <svg
                  className="w-10 h-10 text-deep-purple-900"
                  stroke="currentColor"
                  color='#000'
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </a>
            <div className="max-w-xl mb-10 text-black md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill=""
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-deep-purple-accent-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="700c93bf-0068-4e32-aafe-ef5b6a647708"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
                      width="52"
                      height="24"
                    />
                  </svg>

                </span>
                Mewujudkan Potensi Web: Visi Anda Adalah Keahlian Kami!
              </h2>
              <p className="text-base md:text-lg">
                Architecting the Future: Building Code, Crafting Innovation.
              </p>
            </div>
            <a href='#service'>

              <Button
                radius='full'
                color='primary'
                variant='shadow'
                className='text-whitess'
              >
                Get started
              </Button>
            </a>
          </div>
        </div>
      </div>
      <Card />
    </div>
  )
}
