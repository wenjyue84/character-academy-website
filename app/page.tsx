import Image from 'next/image';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { StatsBand } from '@/components/StatsBand';
import { About } from '@/components/About';
import { VisionMission } from '@/components/VisionMission';
import { HowWeWork } from '@/components/HowWeWork';
import { Services } from '@/components/Services';
import { Projects } from '@/components/Projects';
import { Leadership } from '@/components/Leadership';
import { Testimonials } from '@/components/Testimonials';
import { BusinessPlan } from '@/components/BusinessPlan';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { OrganizationJsonLd } from '@/components/OrganizationJsonLd';

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <Nav />
      <main id="top">
        <Hero />
        <StatsBand />
        <About />
        <VisionMission />
        <HowWeWork />
        <Services />
        <Projects />
        <Leadership />
        <Testimonials />
        <BusinessPlan />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
