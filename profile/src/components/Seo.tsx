import Head from 'next/head';
import { absoluteUrl, personName, siteUrl } from '../config';
import { contact } from '../data/contact';
import type { Dictionary } from '../i18n/types';

const ogImagePath = '/og.png';

function jsonLd(messages: Dictionary) {
  const pageUrl = absoluteUrl(messages.path);
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: messages.seo.title,
        description: messages.seo.description,
        inLanguage: messages.htmlLang,
        isPartOf: {
          '@type': 'WebSite',
          '@id': `${siteUrl}/#website`,
          url: siteUrl,
          name: personName,
          inLanguage: ['en', 'pt-BR'],
        },
      },
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: personName,
        jobTitle: messages.role,
        description: messages.seo.description,
        url: pageUrl,
        image: [`${siteUrl}${ogImagePath}`, `${siteUrl}/images/alan-diogo.webp`],
        email: contact.email,
        address: { '@type': 'PostalAddress', addressCountry: 'BR' },
        worksFor: { '@type': 'Organization', name: 'Astrocode' },
        alumniOf: { '@type': 'CollegeOrUniversity', name: messages.education.school },
        knowsLanguage: ['pt-BR', 'en'],
        sameAs: [contact.github, contact.linkedin],
      },
    ],
  };

  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export default function Seo({ messages }: { messages: Dictionary }) {
  const pageUrl = absoluteUrl(messages.path);
  const image = `${siteUrl}${ogImagePath}`;
  const alternateOg = messages.locale === 'en' ? 'pt_BR' : 'en_US';

  return (
    <Head>
      <title>{messages.seo.title}</title>
      <meta name="description" content={messages.seo.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={pageUrl} />
      <link rel="alternate" hrefLang="en" href={absoluteUrl('/')} />
      <link rel="alternate" hrefLang="pt-BR" href={absoluteUrl('/pt')} />
      <link rel="alternate" hrefLang="x-default" href={absoluteUrl('/')} />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

      <meta property="og:title" content={messages.seo.title} />
      <meta property="og:description" content={messages.seo.description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={messages.seo.ogImageAlt} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={personName} />
      <meta property="og:locale" content={messages.ogLocale} />
      <meta property="og:locale:alternate" content={alternateOg} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={messages.seo.title} />
      <meta name="twitter:description" content={messages.seo.description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={messages.seo.ogImageAlt} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(messages) }} />
    </Head>
  );
}
