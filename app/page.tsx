'use client';

import { useEffect } from 'react';
import NavbarV3 from './v3/Navbar';
import HeroV3 from './v3/Hero';
import AboutV3 from './v3/About';
import SkillsV3 from './v3/Skills';
import ProjectsV3 from './v3/Projects';
import ExperienceV3 from './v3/Experience';
import ServicesV3 from './v3/Services';
import ServicesOffer from './v3/ServicesOffer';
import TestimonialsV3 from './v3/Testimonials';
import ContactV3 from './v3/Contact';
import FooterV3 from './v3/Footer';
import { useGSAPAnimation } from './v3/useGSAPAnimation';

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
