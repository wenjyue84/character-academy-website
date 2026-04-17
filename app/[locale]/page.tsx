import { setRequestLocale, getTranslations } from 'next-intl/server';
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
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('meta');

  return (
    <>
      <OrganizationJsonLd locale={locale} />
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-cream focus:shadow-lift focus:outline-none"
      >
        {t('skipToMain')}
      </a>
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
