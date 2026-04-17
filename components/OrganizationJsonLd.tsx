import { getTranslations } from 'next-intl/server';

const SITE = 'https://character-academy.vercel.app';

const organization = {
  '@type': 'EducationalOrganization',
  '@id': `${SITE}/#organization`,
  name: 'Character International Academy Sdn. Bhd.',
  alternateName: ['名门全能美学职业培训学院', 'Character Academy'],
  url: SITE,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE}/favicon.svg`,
  },
  image: `${SITE}/images/hero/cover.jpg`,
  description:
    'JPK-accredited Malaysian TVET institution and corporate workforce-development consultancy. SKM / DKM / DLKM pathways, ADI-Perantisan apprenticeship, HRD Corp claimable training. Founded 2002.',
  foundingDate: '2002',
  telephone: '+60126111677',
  email: 'jennifer@character.com.mx',
  knowsLanguage: ['en', 'ms', 'zh'],
  areaServed: {
    '@type': 'Country',
    name: 'Malaysia',
  },
  slogan: 'Structured skills. National certification. Workforce that stays.',
  sameAs: [
    'https://facebook.com/Character2002',
  ],
  founder: { '@id': `${SITE}/#jennifer-tan` },
  employee: [{ '@id': `${SITE}/#jennifer-tan` }],
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: 'No. 82, Jalan Ali',
      addressLocality: 'Muar',
      postalCode: '84000',
      addressRegion: 'Johor',
      addressCountry: 'MY',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'No. 22, Jalan Harimau Tarum, Taman Abad',
      addressLocality: 'Johor Bahru',
      postalCode: '80250',
      addressRegion: 'Johor',
      addressCountry: 'MY',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'No. 7, Tkt 1, Jalan Rambutan',
      addressLocality: 'Kluang',
      postalCode: '86000',
      addressRegion: 'Johor',
      addressCountry: 'MY',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'No. 330 (1F), Jalan Haruan 5/8, Pusat Komersial Oakland II',
      addressLocality: 'Seremban',
      postalCode: '70300',
      addressRegion: 'Negeri Sembilan',
      addressCountry: 'MY',
    },
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'SKM — Sijil Kemahiran Malaysia (Levels 1–3)',
      credentialCategory: 'certificate',
      recognizedBy: {
        '@type': 'GovernmentOrganization',
        name: 'Jabatan Pembangunan Kemahiran (JPK)',
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'DKM — Diploma Kemahiran Malaysia (Level 4)',
      credentialCategory: 'diploma',
      recognizedBy: {
        '@type': 'GovernmentOrganization',
        name: 'Jabatan Pembangunan Kemahiran (JPK)',
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'DLKM — Diploma Lanjutan Kemahiran Malaysia (Level 5)',
      credentialCategory: 'advanced diploma',
      recognizedBy: {
        '@type': 'GovernmentOrganization',
        name: 'Jabatan Pembangunan Kemahiran (JPK)',
      },
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Training & advisory services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'TVET Skills Training Programmes (SKM / DKM / DLKM)',
          serviceType: 'TVET training',
          description:
            'Competency-based training mapped to NOSS across SKM Levels 1–3, DKM Level 4, and DLKM Level 5.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'ADI-Perantisan Apprenticeship Set-up',
          serviceType: 'Apprenticeship programme',
          description:
            'National Dual Training System set-up and operation — 70–80% workplace learning + 20–30% classroom theory.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Accredited Training Centre Advisory (Pusat Bertauliah)',
          serviceType: 'Accreditation advisory',
          description:
            'Advisory on achieving and maintaining JPK Pusat Bertauliah accreditation.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'HRD Corp Claimable Training',
          serviceType: 'Corporate training',
          description:
            'Levy-claimable programmes under Malaysia\'s PSMB Act 2001.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Workforce Development Programmes',
          serviceType: 'Consultancy',
          description:
            'Competency matrices, skills roadmaps, and certification pipelines linked to retention.',
        },
      },
    ],
  },
};

const jenniferTan = {
  '@type': 'Person',
  '@id': `${SITE}/#jennifer-tan`,
  name: 'Jennifer Tan',
  jobTitle: 'Founder, CEO & COO',
  worksFor: { '@id': `${SITE}/#organization` },
  nationality: { '@type': 'Country', name: 'Malaysia' },
  description:
    '30 years of corporate management experience. 17 years as JPK-appointed Pakar Industri (Country Industry Expert), 12 years as PPL (External Verification Officer), 10 years as Panel Hakim. HRD Corp Accredited Trainer.',
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Pakar Industri (Country Industry Expert)',
      recognizedBy: {
        '@type': 'GovernmentOrganization',
        name: 'Jabatan Pembangunan Kemahiran (JPK)',
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'PPL — Pegawai Pengesah Luaran (External Verification Officer)',
      recognizedBy: {
        '@type': 'GovernmentOrganization',
        name: 'Jabatan Pembangunan Kemahiran (JPK)',
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'HRD Corp Accredited Train-the-Trainer (TTT)',
      recognizedBy: {
        '@type': 'GovernmentOrganization',
        name: 'HRD Corp (PSMB)',
      },
    },
  ],
  knowsAbout: [
    'TVET Malaysia',
    'SKM / DKM / DLKM certification',
    'NOSS — National Occupational Skills Standards',
    'ADI-Perantisan (National Dual Training System)',
    'HRD Corp claimable training',
    'Workforce development',
    'Competency-based training',
  ],
};

const website = {
  '@type': 'WebSite',
  '@id': `${SITE}/#website`,
  url: SITE,
  name: 'Character International Academy',
  description:
    'JPK-accredited Malaysian TVET institution · SKM / DKM / DLKM · ADI-Perantisan · HRD Corp claimable training.',
  publisher: { '@id': `${SITE}/#organization` },
  inLanguage: ['en-MY', 'ms-MY', 'zh-Hans-MY'],
};

function htmlLang(locale: string) {
  if (locale === 'ms') return 'ms-MY';
  if (locale === 'zh') return 'zh-Hans-MY';
  return 'en-MY';
}

function localeUrl(locale: string) {
  if (locale === 'en') return SITE;
  return `${SITE}/${locale}`;
}

export async function OrganizationJsonLd({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'meta' });
  const pageUrl = localeUrl(locale);

  const webpage = {
    '@type': 'WebPage',
    '@id': `${pageUrl}/#webpage`,
    url: pageUrl,
    name: t('title'),
    description: t('description'),
    isPartOf: { '@id': `${SITE}/#website` },
    about: { '@id': `${SITE}/#organization` },
    primaryImageOfPage: `${SITE}/images/hero/cover.jpg`,
    inLanguage: htmlLang(locale),
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['#about', '#services', '#how'],
    },
  };

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [organization, jenniferTan, website, webpage],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
