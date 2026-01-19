'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { HeroType } from '@/app/types/hero'
import HeroSkeleton from '../../Skeleton/Hero'
import Link from 'next/link'
import { getDataPath, getImgPath } from '@/app/utils/paths'

const Hero = () => {
  const [heroimg, setHeroimg] = useState<HeroType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath('/data.json'))
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setHeroimg(data.HeroData)
      } catch (error) {
        console.error('Error fetching service', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    cssEase: 'linear',
  }

  return (
    <section>
      <div className='overflow-hidden'>
        <div className='container relative z-20 pt-24'>
          <div className='relative z-20 grid lg:grid-cols-12 grid-cols-1 items-center lg:justify-items-normal justify-items-center gap-16 pb-10'>
            <div className='lg:col-span-7 col-span-1'>
              <div className='flex flex-col lg:items-start items-center gap-10'>
                {/* Welcome/Introduction line */}
                <p className='text-primary text-xl font-medium lg:text-start text-center'>
                  Hello, I'm
                </p>
                
                {/* Your name prominently displayed */}
                <h1 className='lg:text-start text-center max-w-2xl'>
                  <span className='block text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-white mb-4'>
                    Racheal Aber
                  </span>
                  <span className='text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-600 dark:text-gray-300'>
                    Your Trusted Global Virtual Assistant
                  </span>
                </h1>
                
                <p className='text-xl lg:text-2xl text-gray-600 dark:text-gray-300 lg:text-start text-center max-w-xl leading-relaxed'>
                  I provide expert administrative support and business solutions to help entrepreneurs, executives, and businesses streamline their operations and achieve more with less stress.
                </p>
                
                <div className='flex item-center gap-6'>
                  <Link href={'/#expertise'}>
                    <button className='px-14 py-4 text-lg font-medium text-white border rounded-lg border-primary bg-primary hover:bg-transparent hover:text-primary hover:cursor-pointer duration-300'>
                      View My Services
                    </button>
                  </Link>
                  <Link href={'/#contact'}>
                    <button className='px-14 py-4 text-lg font-medium text-primary border rounded-lg border-primary bg-transparent hover:bg-primary hover:text-white hover:cursor-pointer duration-300'>
                      Let's Work Together
                    </button>
                  </Link>
                </div>
                
                {/* Optional: Add a small credibility statement */}
                <div className='flex items-center gap-3 text-gray-500 dark:text-gray-400 text-lg'>
                  <span className='w-12 h-[3px] bg-primary'></span>
                  <span>Professional | Reliable | Detail-Oriented</span>
                </div>
              </div>
            </div>
            {/* slider - Adjusted for portrait images */}
            <div className='lg:col-span-5 col-span-1 lg:w-full sm:w-[80%] w-full'>
              <div>
                <Slider {...settings}>
                  {loading
                    ? Array.from({ length: 3 }).map((_, i) => (
                        <HeroSkeleton key={i} />
                      ))
                    : heroimg.map((item, i) => (
                        <div key={i} className='h-full'>
                          <div className='relative h-[500px] lg:h-[600px] rounded-lg overflow-hidden'>
                            <Image
                              src={getImgPath(item.imgSrc)}
                              alt={item.imgSrc}
                              fill
                              style={{objectFit: 'cover'}}
                              className='rounded-lg'
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                        </div>
                      ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero