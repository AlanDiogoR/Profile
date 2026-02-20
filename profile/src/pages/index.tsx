import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';
import FeaturedProjects from '../components/FeaturedProjects';
import Contact from '../components/Contact';
import { bio } from '../data/bio';
import { siteUrl } from '../config';

const pageTitle = 'Alan Diogo | Desenvolvedor Full Stack';
const pageDescription = bio.headline;

export default function Home() {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={`${siteUrl}/images/grivy/1.PNG`} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Head>
      <Header />
      <main className="font-sans">
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <FeaturedProjects />
        <Contact />
      </main>
    </>
  );
}
