'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const ImageReveal = () => {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lenis = new Lenis({
        lerp: 0.25,
        smoothWheel: true,
      });
      lenisRef.current = lenis;

      const gridItem = document.querySelectorAll('.grid-item');

      const smoothScroll = () => {
        lenis.on('scroll', () => ScrollTrigger.update());

        const scrollFn = (time: any) => {
          lenis.raf(time);
          requestAnimationFrame(scrollFn);
        };
        requestAnimationFrame(scrollFn);
      };
      const scrollAnimation = () => {
        gridItem.forEach((item) => {
          gsap
            .timeline({
              defaults: {
                ease: 'power4',
              },
              scrollTrigger: {
                trigger: item,
                start: 'top bottom-=15%',
                end: '+=100%',
                scrub: true,
              },
            })
            .fromTo(
              item.querySelector('.grid-item-img'),
              {
                scale: 0,
                transformOrigin: '0% 0%',
              },
              {
                scale: 1,
              }
            )
            .fromTo(
              item.querySelector('.grid-img'),
              {
                scale: 0,
                transformOrigin: '0% 0%',
              },
              {
                scale: 1,
              },
              0
            )
            .fromTo(
              item.querySelector('.grid-item-caption'),
              {
                yPercent: 200,
                xPercent: 50,
                opacity: 0,
              },
              {
                ease: 'power1',
                yPercent: 0,
                xPercent: 0,
                opacity: 1,
              },
              0
            );
        });
      };

      const init = () => {
        lenis.on('scroll', () => ScrollTrigger.update());

        smoothScroll();
        scrollAnimation();
      };
      init();
      return () => {
        lenis.destroy();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  });
  return (
    <div>
      <div className='w-full grid-cols-[100%] grid relative mt-[10dvh] mx-auto mb-[40dvh] justify-center items-center ml-[100px]'>
        <div className=' grid-item relative m-0'>
          <div className=' grid-item-img relative overflow-hidden grid place-items-center w-[70%] h-auto [aspect-ratio:1.5]'>
            <div className=' grid-item-caption justify-self-start'>
              EIFFEL TOWER, FRANCE
            </div>
            <Image
              width={300}
              height={300}
              src='https://images.unsplash.com/photo-1609971757431-439cf7b4141b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWlmZmVsJTIwdG93ZXJ8ZW58MHx8MHx8fDA%3D'
              alt='Eiffel Tower'
              className='grid-img w-3/5 h-4/5 bg-[100%] bg-cover relative'
              priority={true}
            />
          </div>
        </div>
        <div className=' grid-item relative m-0'>
          <div className=' grid-item-img relative overflow-hidden grid place-items-center w-[70%] h-auto [aspect-ratio:1.5]'>
            <div className=' grid-item-caption justify-self-start'>
              TAJMAHALL, INDIA
            </div>
            <Image
              width={300}
              height={300}
              src='https://images.unsplash.com/photo-1523980077198-60824a7b2148?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFqJTIwbWFoYWx8ZW58MHx8MHx8fDA%3D'
              alt='Eiffel Tower'
              className='grid-img w-3/5 h-4/5 bg-[100%] bg-cover relative'
              priority={true}
            />
          </div>
        </div>
        <div className=' grid-item relative m-0'>
          <div className=' grid-item-img relative overflow-hidden grid place-items-center w-[70%] h-auto [aspect-ratio:1.5]'>
            <div className=' grid-item-caption justify-self-start'>
              STONE HENGE, UK
            </div>
            <Image
              width={300}
              height={300}
              src='https://images.unsplash.com/photo-1580028530537-6379f91ace79?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RvbmUlMjBoZW5nZXxlbnwwfHwwfHx8MA%3D%3D'
              alt='Eiffel Tower'
              className='grid-img w-3/5 h-4/5 bg-[100%] bg-cover relative'
              priority={true}
            />
          </div>
        </div>
        <div className=' grid-item relative m-0'>
          <div className=' grid-item-img relative overflow-hidden grid place-items-center w-[70%] h-auto [aspect-ratio:1.5]'>
            <div className=' grid-item-caption justify-self-start'>
              COLLOSEUM, ROME
            </div>
            <Image
              width={300}
              height={300}
              src='https://images.unsplash.com/photo-1678764403239-b55e0b24cf72?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbG9zc2V1bXxlbnwwfHwwfHx8MA%3D%3D'
              alt='Eiffel Tower'
              className='grid-img w-3/5 h-4/5 bg-[100%] bg-cover relative'
              priority={true}
            />
          </div>
        </div>
        <div className=' grid-item relative m-0'>
          <div className=' grid-item-img relative overflow-hidden grid place-items-center w-[70%] h-auto [aspect-ratio:1.5]'>
            <div className=' grid-item-caption justify-self-start'>
              PYRAMID OF GIZA, EQYPT
            </div>
            <Image
              width={300}
              height={300}
              src='https://images.unsplash.com/photo-1655417591786-32c3833be1a6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHlyYW1pZCUyMG9mJTIwZ2l6YXxlbnwwfHwwfHx8MA%3D%3D'
              alt='Eiffel Tower'
              className='grid-img w-3/5 h-4/5 bg-[100%] bg-cover relative'
              priority={true}
            />
          </div>
        </div>
        <div className=' grid-item relative m-0'>
          <div className=' grid-item-img relative overflow-hidden grid place-items-center w-[70%] h-auto [aspect-ratio:1.5]'>
            <div className=' grid-item-caption justify-self-start'>
              INDIA GATE, INDIA
            </div>
            <Image
              width={300}
              height={300}
              src='https://images.unsplash.com/photo-1705861144478-40b4c1157a24?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Eiffel Tower'
              className='grid-img w-3/5 h-4/5 bg-[100%] bg-cover relative'
              priority={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageReveal;
