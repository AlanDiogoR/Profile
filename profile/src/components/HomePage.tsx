import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import Seo from './Seo';
import Skills from './Skills';
import { I18nProvider } from '../i18n/context';
import type { Dictionary } from '../i18n/types';

export default function HomePage({ messages }: { messages: Dictionary }) {
  return (
    <I18nProvider messages={messages}>
      <Seo messages={messages} />
      <a
        href={`#${messages.sections.content}`}
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-on-brand"
      >
        {messages.skipToContent}
      </a>
      <Header />
      <main id={messages.sections.content} className="section-anchor">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </I18nProvider>
  );
}
