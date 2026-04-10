'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useGSAPAnimation() {
  const mainRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from('.hero-badge', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2,
      });

      gsap.from('.hero-title .word', {
        opacity: 0,
        y: 50,
        rotateX: -90,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out',
        delay: 0.4,
      });

      gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.8,
      });

      gsap.from('.hero-cta', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        delay: 1,
      });

      gsap.from('.hero-scroll-indicator', {
        opacity: 0,
        duration: 1,
        delay: 1.5,
      });

      // Section animations
      gsap.utils.toArray('.animate-on-scroll').forEach((section) => {
        gsap.from(section as Element, {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section as Element,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      // Skills animation
      gsap.utils.toArray('.skill-bar').forEach((bar) => {
        const width = (bar as HTMLElement).dataset.width || '0';
        gsap.from(bar as Element, {
          width: '0%',
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bar as Element,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          onUpdate: function () {
            (bar as HTMLElement).style.width = `${gsap.getProperty(bar as Element, 'width')}px`;
          },
        });
        gsap.set(bar as Element, { width: width });
      });

      // Project cards stagger
      gsap.from('.project-card', {
        opacity: 0,
        y: 60,
        scale: 0.95,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      // Timeline animation
      gsap.utils.toArray('.timeline-item').forEach((item, i) => {
        gsap.from(item as Element, {
          opacity: 0,
          x: i % 2 === 0 ? -60 : 60,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item as Element,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      // Testimonials
      gsap.from('.testimonial-card', {
        opacity: 0,
        scale: 0.9,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.testimonials-grid',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      // Floating animation for decorative elements
      gsap.to('.floating-element', {
        y: '+=20',
        rotation: 360,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Parallax for hero background
      gsap.to('.hero-parallax-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Counter animation
      gsap.utils.toArray('.counter').forEach((counter) => {
        const target = parseInt((counter as HTMLElement).dataset.target || '0');
        gsap.to(counter as Element, {
          innerText: target,
          duration: 2,
          ease: 'power1.out',
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: counter as Element,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return mainRef;
}
