'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const TypoAnimation = () => {
  const lenisRef = useRef<any>(null);
  const charsRef = useRef<any>(null);

  useEffect(() => {
    // Initialize Lenis and SplitType only on the client-side
    if (typeof window !== 'undefined') {
      const lenis = new Lenis({
        lerp: 0.2,
        smoothWheel: true,
      });
      lenisRef.current = lenis;
      const text = new SplitType('.target');
      charsRef.current = text.chars;
  

    const scrollSmooth = () => {
      lenisRef.current.on('scroll', () => ScrollTrigger.update());
      const scrollFn = (time: any) => {
        lenisRef.current.raf(time);
        requestAnimationFrame(scrollFn);
      };
      requestAnimationFrame(scrollFn);
    };

    const scrollAnimation = () => {
      const chars = text.chars;
      const words = text.words;
      for (const word of words!) {
        chars?.forEach((char: any) => {
          gsap.set(char.parentNode, { perspective: 1000 });
        })

        gsap.fromTo(chars, {
          'will-change': 'opacity, transform',
          opacity: 0,
          y:(position, _, arr)=>-40 * Math.abs(position - arr.length / 2),
          z:() => gsap.utils.random(-1500, -600),
          rotationX: () => gsap.utils.random(-500, 200),
        }, {
          ease:"power1.inOut",
          opacity: 1,
          y: 0,
          z: 0,
          rotationX: 0,
          stagger: {
            each: 0.06,
            from: 'center',
          },
          scrollTrigger: {
            
            trigger: word,
            start: 'top bottom',
            end: 'bottom top+=15',
            scrub: true,
          },
        })
      }
    }

    const init = () => {
      scrollSmooth();
      scrollAnimation();
    };
    init();
    return () => {
      lenis.destroy();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    }
  }
    
  }, []);
  return (
    <div>
      <div className='h-[100vh] w-full flex justify-center items-center'>
        SCROLL DOWN FOR TYPO ANIMATION
      </div>
      <div className='mt-[60px] '>
        <div className='flex flex-col w-screen relative px-8 py-10 z-20'>
          <h2 className='content_title text-[8vw] leading-[0.8] text-center grid gap-8'>
            <span className='target'>NEVER</span>
            <span className='target'>GIVEUP</span>
          </h2>
        </div>
      </div>
      <div className='w-screen px-8 py-6 mb-[350px]'>
        <p className='max-w-[660px] mx-auto my-6 text-[1.25rem] leading-normal'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam libero
          nihil ullam, fugit ut earum cumque, tenetur culpa corporis rerum
          delectus pariatur nostrum porro! Fugiat adipisci exercitationem iusto
          saepe, eius harum voluptate nesciunt sapiente repellat minus porro
          modi ut optio ab quasi praesentium eligendi necessitatibus eaque
    </p>
      </div>
    </div>
  );
};

export default TypoAnimation;
