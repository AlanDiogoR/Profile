import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppFab from '../components/WhatsAppFab';
import { bio } from '../data/bio';
import { contact } from '../data/contact';
import { siteUrl } from '../config';

const pageTitle = 'Alan Diogo | Desenvolvedor — landing pages, portfólios e automação de WhatsApp';
const ogImage = `${siteUrl}/og.png`;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: bio.name,
  jobTitle: 'Desenvolvedor',
  url: siteUrl,
  email: contact.email,
  sameAs: contact.links.map((l) => l.url),
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Universidade Tecnológica Federal do Paraná' },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={bio.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0b0e11" />
        <link rel="canonical" href={siteUrl} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={bio.description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Alan Diogo — Desenvolvedor. Landing pages, portfólios e automação de WhatsApp" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={bio.description} />
        <meta name="twitter:image" content={ogImage} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-on-brand"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
