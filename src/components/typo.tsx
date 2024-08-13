'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const Typo = () => {
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

      // Initialize smooth scrolling
      const initSmooth = () => {
        lenis.on('scroll', () => ScrollTrigger.update());

        const scrollFn = (time: any) => {
          lenis.raf(time);
          requestAnimationFrame(scrollFn);
        };
        requestAnimationFrame(scrollFn);
      };

      // Initialize GSAP animation
      const scrollAnimation = () => {
        const chars = charsRef.current;
        if (chars) {
          chars.forEach((char: any) =>
            gsap.set(char.parentNode, { perspective: 1000 })
          );

          gsap.fromTo(
            chars,
            {
              willChange: 'opacity, transform',
              opacity: 0.1,
              z: -800,
            },
            {
              ease: 'back.out(1.2)',
              opacity: 1,
              z: 0,
              stagger: 0.04,
              scrollTrigger: {
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            }
          );
        }
      };

      initSmooth();
      scrollAnimation();

      // Cleanup function to remove event listeners and destroy Lenis instance
      return () => {
        lenis.destroy();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []); // Empty dependency array to run once on mount

  return (
    <div>
      <div className='absolute top-0 h-[100vh] w-full flex justify-center items-center'>
        SCROLL DOWN FOR THE TYPO ANIMATION
      </div>
      <div className='flex flex-col w-screen relative px-8 py-6 mt-[750px]'>
        <h2 className='content_title text-[8vw] leading-[0.8] text-center grid gap-8'>
          <span className='uppercase target' id='target'> DREAM BIG</span>
          <span className='uppercase target'>NEVER SETTLE</span>
          <span className='uppercase target mb-[100px]'>& NEVER QUIT</span>
        </h2>
      </div>
      <div className='flex flex-col w-screen relative px-8 py-6 mb-[350px]'>
        <p className='max-w-[660px] mx-auto my-6 text-[1.25rem] leading-normal'>
          Dreaming big inspires us to reach beyond our current circumstances, to
          imagine a future that exceeds our present reality. It&apos;s about
          setting audacious goals and believing in them, regardless of the
          obstacles we may face along the way.
        </p>
      </div>
    </div>
  );
};

export default Typo;
