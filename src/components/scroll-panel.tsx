'use client';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import React, { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const ScrollPanel = () => {
  const lenisRef = useRef<any>(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lenis = new Lenis({
        lerp: 0.25,
        smoothWheel: true,
      });
      lenisRef.current = lenis;

      const smoothScroll = () => {
        
        const scrollFn = (time: any) => {
          lenis.raf(time);
          requestAnimationFrame(scrollFn);
        };
        requestAnimationFrame(scrollFn);
      }
      const dom = {
        columns: document.querySelector('.section-col'),
        columnsWrap: document.querySelectorAll('.section-col .column_wrap'),
        items: document.querySelectorAll('.section-cols .col-item'),
      }

      const scrollAnimation = () => {
        gsap.timeline({
          scrollTrigger: {
            start:0,
            end:'max',
            scrub: true,
          }
        })
        .addLabel('start',0)
        .to(dom.columns,{
          ease:'none',
          startAt:{
            scale:1.2
          },
          scale:1,
        },'start')
        .to(dom.items,{
            scrollTrigger:{
              start:0,
              end:'top top',
              scrub:true
            },
            ease:"power4.inOut",
            startAt:{
              opacity:0,
              filter:'brightness(300%)'
            },
            opacity:1,
            filter:'brightness(100%)',
            yoyo:true,
            repeat:1
        })
        .to(dom.columnsWrap,{
          ease:'none',
          yPercent:(pos)=> pos * -15
        }, 'start')
      }

      const init = () => {
        smoothScroll();
        scrollAnimation();
      }

      init()
      return () => {
        lenis.destroy();
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    }

    
  })
  return (
    <div>
      <section className=' leading-none static top-0 w-screen min-h-screen bg-[#0f0e0e] mb-[250dvh] h-screen flex flex-col text-center items-center justify-center pt-32 pb-8'>
        <h2 className='section_title font-light'>
          PANELS <br /> effect
        </h2>
        <p className='m-0 max-w-[400px] mx-auto'>
          {' '}
          BUILT USING NEXT.JS AND GSAP
        </p>
        <p className='m-0 max-w-[400px] mt-auto text-red-500'>
          <span>SCROLL</span>
        </p>
      </section>
      <section className=' section-col leading-none top-0 min-h-screen fixed left-0 right-0 bottom-0 -z-10 w-full h-screen bg-[#0f0e0e]'>
        <div className='columns w-full flex relative justify-center gap-[2.5vw] h-full -rotate-45 items-center'>
          <div className='column_wrap relative flex flex-col pt-[5vh] px-0 pb-[15vh] z-1'>
            <div className='column relative block '>
              <div className='col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0'>
                <Image
                  src={
                    'https://images.unsplash.com/photo-1704642220407-392955316c7a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8eGpQUjRobGtCR0F8fGVufDB8fHx8fA%3D%3D'
                  }
                  alt='image'
                  width={250}
                  height={250}
                  className='col_img'
                />
              </div>
              <div className='col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0'>
                <Image
                  src={
                    'https://images.unsplash.com/photo-1712652081140-69a5678cad7a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D'
                  }
                  alt='image'
                  width={250}
                  height={250}
                  className='col_img'
                />
              </div>
              <div className='col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0'>
                <Image
                  src={
                    'https://images.unsplash.com/photo-1704261638136-654ad0276b47?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D'
                  }
                  alt='image'
                  width={250}
                  height={250}
                  className='col_img'
                />
              </div>
              <div className='col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0'>
                <Image
                  src={
                    'https://images.unsplash.com/photo-1723297503846-b1bd7db82312?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D'
                  }
                  alt='image'
                  width={250}
                  height={250}
                  className='col_img'
                />
              </div>
              <div className='col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0'>
                <Image
                  src={
                    'https://images.unsplash.com/photo-1722239318457-0371721aa9f5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D'
                  }
                  alt='image'
                  width={250}
                  height={250}
                  className='col_img'
                />
              </div>
              <div className='col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0'>
                <Image
                  src={
                    'https://images.unsplash.com/photo-1693941072714-5a4f24d05223?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D'
                  }
                  alt='image'
                  width={250}
                  height={250}
                  className='col_img'
                />
              </div>
              <div className='col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0'>
                <Image
                  src={
                    'https://images.unsplash.com/photo-1655321300721-5debfd81176b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D'
                  }
                  alt='image'
                  width={250}
                  height={250}
                  className='col_img'
                />
              </div>
            </div>
          </div>
          <div className='column_wrap relative flex flex-col pt-[5vh] px-0 pb-[15vh] z-1'>
            <div className='column relative block '>
              <div className='col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0'>
                <Image
                  src={
                    'https://images.unsplash.com/photo-1692071097980-2d78ced0cf75?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQxfHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D'
                  }
                  alt='image'
                  width={250}
                  height={250}
                  className='col_img'
                />
              </div>
              <div className='col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0'>
                <Image
                  src={
                    'https://images.unsplash.com/photo-1718824484277-91ef074c1b5a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D'
                  }
                  alt='image'
                  width={250}
                  height={250}
                  className='col_img'
                />
              </div>
              <div className='col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0'>
                <Image
                  src={
                    'https://images.unsplash.com/photo-1714409117568-1c6f3aa3bc20?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU5fHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D'
                  }
                  alt='image'
                  width={250}
                  height={250}
                  className='col_img'
                />
              </div>
              <div className='col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0'>
                <Image
                  src={
                    'https://images.unsplash.com/photo-1720070827797-d4f03e228dea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwMnx4alBSNGhsa0JHQXx8ZW58MHx8fHx8'
                  }
                  alt='image'
                  width={250}
                  height={250}
                  className='col_img'
                />
              </div>
              <div className='col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0'>
                <Image
                  src={
                    'https://images.unsplash.com/photo-1716972967098-6d2c8465e24a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc5fHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D'
                  }
                  alt='image'
                  width={250}
                  height={250}
                  className='col_img'
                />
              </div>
              <div className='col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0'>
                <Image
                  src={
                    'https://images.unsplash.com/photo-1720462944690-8cace8bbb90c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgxfHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D'
                  }
                  alt='image'
                  width={250}
                  height={250}
                  className='col_img'
                />
              </div>
              <div className='col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0'>
                <Image
                  src={
                    'https://images.unsplash.com/photo-1721406769891-f2ba651401d9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg3fHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D'
                  }
                  alt='image'
                  width={250}
                  height={250}
                  className='col_img'
                />
              </div>
            </div>
          </div>
          <div className='column_wrap relative flex flex-col pt-[5vh] px-0 pb-[15vh] z-1'>
            <div className='column relative block '>
              <div className='col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0'>
                <Image
                  src={''}
                  alt='image'
                  width={250}
                  height={250}
                  className='col_img'
                />
              </div>
              <div className='col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0'>
                <Image
                  src={
                    'https://images.unsplash.com/photo-1704642220407-392955316c7a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8eGpQUjRobGtCR0F8fGVufDB8fHx8fA%3D%3D'
                  }
                  alt='image'
                  width={250}
                  height={250}
                  className='col_img'
                />
              </div>
              <div className='col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0'>
                <Image
                  src={
                    'https://images.unsplash.com/photo-1704642220407-392955316c7a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8eGpQUjRobGtCR0F8fGVufDB8fHx8fA%3D%3D'
                  }
                  alt='image'
                  width={250}
                  height={250}
                  className='col_img'
                />
              </div>
              <div className='col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0'>
                <Image
                  src={
                    'https://images.unsplash.com/photo-1704642220407-392955316c7a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8eGpQUjRobGtCR0F8fGVufDB8fHx8fA%3D%3D'
                  }
                  alt='image'
                  width={250}
                  height={250}
                  className='col_img'
                />
              </div>
              <div className='col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0'>
                <Image
                  src={
                    'https://images.unsplash.com/photo-1704642220407-392955316c7a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8eGpQUjRobGtCR0F8fGVufDB8fHx8fA%3D%3D'
                  }
                  alt='image'
                  width={250}
                  height={250}
                  className='col_img'
                />
              </div>
              <div className='col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0'>
                <Image
                  src={
                    'https://images.unsplash.com/photo-1704642220407-392955316c7a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8eGpQUjRobGtCR0F8fGVufDB8fHx8fA%3D%3D'
                  }
                  alt='image'
                  width={250}
                  height={250}
                  className='col_img'
                />
              </div>
              <div className='col-item w-[25vw] h-[25vw] relative overflow-hidden rounded-[4px] cursor-pointer mt-0 mr-0 mb-[2.5vw] ml-0'>
                <Image
                  src={
                    'https://images.unsplash.com/photo-1704642220407-392955316c7a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8eGpQUjRobGtCR0F8fGVufDB8fHx8fA%3D%3D'
                  }
                  alt='image'
                  width={250}
                  height={250}
                  className='col_img'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default ScrollPanel;
