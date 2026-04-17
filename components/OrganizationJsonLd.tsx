export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Character International Academy Sdn. Bhd.',
    alternateName: '名门全能美学职业培训学院',
    url: 'https://character-academy.vercel.app',
    logo: 'https://character-academy.vercel.app/favicon.svg',
    description:
      "Malaysian TVET institution and corporate workforce development consultancy. JPK-accredited. SKM / DKM / DLKM pathways, ADI-Perantisan apprenticeship, HRD Corp claimable training.",
    foundingDate: '2002',
    telephone: '+60126111677',
    email: 'jennifer@character.com.mx',
    sameAs: ['https://facebook.com/Character2002'],
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
    founder: {
      '@type': 'Person',
      name: 'Jennifer Tan',
      jobTitle: 'Founder, CEO & COO',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
