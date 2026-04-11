'use client';

import { useEffect } from 'react';
import NavbarV3 from './Navbar';
import HeroV3 from './Hero';
import AboutV3 from './About';
import SkillsV3 from './Skills';
import ProjectsV3 from './Projects';
import ExperienceV3 from './Experience';
import ServicesV3 from './Services';
import ServicesOffer from './ServicesOffer';
import TestimonialsV3 from './Testimonials';
import ContactV3 from './Contact';
import FooterV3 from './Footer';
import { useGSAPAnimation } from './useGSAPAnimation';

export default function Page() {
  const mainRef = useGSAPAnimation();

  useEffect(() => {
    // Smooth scroll polyfill for better UX
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <main ref={mainRef} className="bg-slate-950 text-white">
      <NavbarV3 />
      <HeroV3 />
      <AboutV3 />
      <SkillsV3 />
      <ProjectsV3 />
      <ExperienceV3 />
      <ServicesV3 />
      <ServicesOffer />
      <TestimonialsV3 />
      <ContactV3 />
      <FooterV3 />
    </main>
  );
}
