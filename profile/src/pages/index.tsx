import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { bio } from '../data/bio';
import { contact } from '../data/contact';
import { siteUrl } from '../config';

const pageTitle = 'Alan Diogo | Desenvolvedor Full Stack Júnior — Portfólio';
const ogImage = `${siteUrl}/images/alan-diogo.webp`;
const ogImageAlt = 'Retrato de Alan Diogo, de camisa preta, sobre fundo claro';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: bio.name,
  jobTitle: bio.role,
  description: bio.description,
  url: siteUrl,
  image: ogImage,
  email: contact.email,
  sameAs: [contact.github, contact.linkedin],
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Universidade Tecnológica Federal do Paraná' },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={bio.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={siteUrl} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={bio.description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
        <meta property="og:image:alt" content={ogImageAlt} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={bio.description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content={ogImageAlt} />

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
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
