'use client'
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const ColsAnimation = () => {

  const lenisRef = useRef<any>(null);

  useEffect(()=>{
    if (typeof window !== 'undefined') {
      const lenis = new Lenis({
        lerp: 0.25,
        smoothWheel: true,
      });

      lenisRef.current = lenis;

      const grid = document.querySelector('.columns')
      const columns:any = grid && grid.querySelectorAll('.column');
      const columnsArray = columns ? [...columns] : []; // Convert NodeListOf<Element> to array

      const items = columnsArray.map((column:any, pos:number)=>{
        return [...column.querySelectorAll('.col-item')].map((item)=>({
          element:item,
          column:pos,
          wrapper:item.querySelector('.img-wrap'),
          image:item.querySelector('.img'),
        }))
      })

      const mergeItems = items.flat()

      const smoothScroll = () =>{
          lenis.on('scroll',()=> ScrollTrigger.update());

          const scrollFn = (time:any)=>{
            lenis.raf(time);
            requestAnimationFrame(scrollFn);
          }
          requestAnimationFrame(scrollFn);
      }

      const scrollAnimation = ()=>{
        mergeItems.forEach((item)=>{
          let xPercentage, scaleXValue, scaleYValue, transaformOrigin, filterValue;
    
          switch(item.column){
            case 0:
              xPercentage = -400
              transaformOrigin = "0% 50%"
              scaleXValue= 6
              scaleYValue= 0.3
              filterValue = "blur(10px)"
              break;
            case 1:
              xPercentage = 0
              transaformOrigin = "50% 50%"
              scaleXValue= 0.7
              scaleYValue= 0.7
              filterValue = "blur(5px)"
              break;
            case 2:
              xPercentage = 400
              transaformOrigin = "100% 50%"
              scaleXValue= 6
              scaleYValue= 0.3
              filterValue = "blur(10px)"
              break;
          }
          gsap.fromTo(item.wrapper,{
            "willChange":"filter",
            xPercent: xPercentage,
            opacity: 0,
            scaleX: scaleXValue,
            scaleY: scaleYValue,
            filter: filterValue,
          }, {
            startAt:{transformOrigin: transaformOrigin},
            scrollTrigger:{
              trigger: item.element,
              start:"clamp(top, bottom)",
              end:"clamp(bottom, top)",
              scrub: true,
            },
            xPercent:0,
            opacity: 1,
            scaleX: 1,
            scaleY: 1,
            filter: "blur(0px)",
          })
        })
      }

      smoothScroll();
      scrollAnimation();

      return () => {
        lenis.destroy();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  },[])
  return (
    <div className=' overflow-x-hidden'>
      <div className='h-[100dvh] w-full flex items-center justify-center text-white z-10 uppercase'>
        Scroll down
      </div>
      <div className='grid place-items-center w-full relative '>
        <div className='columns w-full max-w-[1200px] relative px-0 py-[20px] grid place-items-center grid-cols-[repeat(3,_1fr)] gap-[2vw] mt-[500px]'>
          <div className='column w-full relative grid gap-[2vw] grid-cols-[100%]'>
            <div className='col-item mt-0 relative z-1'>
              <div className='img-wrap w-full [aspect-ratio: 0.6] h-auto relative overflow-hidden rounded-none'>
                <Image
                  width={300}
                  height={330}
                  className='img  top-0 left-0 h-full w-full bg-cover bg-[50%_20%] [backface-visibility: hidden] '
                  src={
                    'https://images.unsplash.com/photo-1723242017539-39cd15eb75fd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D'
                  }
                  alt='Image'
                />
              </div>
            </div>
            <div className=' col-item mt-0 relative z-1'>
              <div className=' img-wrap w-full [aspect-ratio: 0.6] h-auto relative overflow-hidden rounded-none'>
                <Image
                  width={300}
                  height={330}
                  className='img  top-0 left-0 h-full w-full bg-cover bg-[50%_20%] [backface-visibility: hidden] '
                  src={
                    'https://images.unsplash.com/photo-1723383006661-353b09196804?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D'
                  }
                  alt='Image'
                />
              </div>
            </div>
            <div className=' col-item mt-0 relative z-1'>
              <div className=' img-wrap w-full [aspect-ratio: 0.6] h-auto relative overflow-hidden rounded-none'>
                <Image
                  width={300}
                  height={330}
                  className='img  top-0 left-0 h-full w-full bg-cover bg-[50%_20%] [backface-visibility: hidden] '
                  src={
                    'https://images.unsplash.com/photo-1723376076106-ecf324137e8a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxODR8fHxlbnwwfHx8fHw%3D'
                  }
                  alt='Image'
                />
              </div>
            </div>
          </div>
          <div className='column w-full relative grid gap-[2vw] grid-cols-[100%]'>
            <div className=' col-item mt-0 relative z-1'>
              <div className=' img-wrap w-full [aspect-ratio: 0.6] h-auto relative overflow-hidden rounded-none'>
                <Image
                  width={300}
                  height={330}
                  className='img  top-0 left-0 h-full w-full bg-cover bg-[50%_20%] [backface-visibility: hidden] '
                  src={
                    'https://images.unsplash.com/photo-1719937051230-8798ae2ebe86?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4MXx8fGVufDB8fHx8fA%3D%3D'
                  }
                  alt='Image'
                />
              </div>
            </div>
            <div className=' col-item mt-0 relative z-1'>
              <div className=' img-wrap w-full [aspect-ratio: 0.6] h-auto relative overflow-hidden rounded-none'>
                <Image
                  width={300}
                  height={330}
                  className='img  top-0 left-0 h-full w-full bg-cover bg-[50%_20%] [backface-visibility: hidden] '
                  src={
                    'https://images.unsplash.com/photo-1721679241473-d00437cb5a44?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDB8fHxlbnwwfHx8fHw%3D'
                  }
                  alt='Image'
                />
              </div>
            </div>
            <div className=' col-item mt-0 relative z-1'>
              <div className=' img-wrap w-full [aspect-ratio: 0.6] h-auto relative overflow-hidden rounded-none'>
                <Image
                  width={300}
                  height={330}
                  className='img  top-0 left-0 h-full w-full bg-cover bg-[50%_20%] [backface-visibility: hidden] '
                  src={
                    'https://images.unsplash.com/photo-1722603037481-6f6f7bf852fa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDV8fHxlbnwwfHx8fHw%3D'
                  }
                  alt='Image'
                />
              </div>
            </div>
          </div>
          <div className='column w-full relative grid gap-[2vw] grid-cols-[100%]'>
            <div className=' col-item mt-0 relative z-1'>
              <div className=' img-wrap w-full [aspect-ratio: 0.6] h-auto relative overflow-hidden rounded-none'>
                <Image
                  width={300}
                  height={330}
                  className='img  top-0 left-0 h-full w-full bg-cover bg-[50%_20%] [backface-visibility: hidden] '
                  src={
                    'https://images.unsplash.com/photo-1723242017539-39cd15eb75fd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D'
                  }
                  alt='Image'
                />
              </div>
            </div>
            <div className=' col-item mt-0 relative z-1'>
              <div className=' img-wrap w-full [aspect-ratio: 0.6] h-auto relative overflow-hidden rounded-none'>
                <Image
                  width={300}
                  height={330}
                  className='img  top-0 left-0 h-full w-full bg-cover bg-[50%_20%] [backface-visibility: hidden] '
                  src={
                    'https://images.unsplash.com/photo-1723242017539-39cd15eb75fd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D'
                  }
                  alt='Image'
                />
              </div>
            </div>
            <div className=' col-item mt-0 relative z-1'>
              <div className=' img-wrap w-full [aspect-ratio: 0.6] h-auto relative overflow-hidden rounded-none'>
                <Image
                  width={300}
                  height={330}
                  className='img  top-0 left-0 h-full w-full bg-cover bg-[50%_20%] [backface-visibility: hidden] '
                  src={
                    'https://images.unsplash.com/photo-1723242017539-39cd15eb75fd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D'
                  }
                  alt='Image'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColsAnimation;
