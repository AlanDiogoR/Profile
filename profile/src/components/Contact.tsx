import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiDownload, HiMail } from 'react-icons/hi';
import { cvFile } from '../config';
import { contact } from '../data/contact';
import { useI18n } from '../i18n/context';
import Button from './Button';

export default function Contact() {
  const { locale, sections, contactSection } = useI18n();
  const cv = cvFile[locale];

  return (
    <section id={sections.contact} aria-labelledby={`${sections.contact}-heading`} className="section-anchor px-4 py-8 sm:px-6 md:py-12">
      <div className="reveal mx-auto max-w-6xl border border-line bg-surface px-5 py-10 sm:px-10 sm:py-14">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-brand-text">{contactSection.eyebrow}</p>
        <h2 id={`${sections.contact}-heading`} className="mt-3 max-w-3xl text-4xl tracking-[-0.04em] sm:text-5xl">
          {contactSection.title}
        </h2>
        <p className="mt-4 max-w-xl text-base leading-[1.6] text-muted sm:text-lg">{contactSection.body}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href={contact.mailto} className="w-full sm:w-auto">
            <HiMail size={18} aria-hidden /> {contact.email}
          </Button>
          <Button href={contact.github} variant="secondary" external className="w-full sm:w-auto">
            <FaGithub size={18} aria-hidden /> GitHub
            <span className="sr-only">{contactSection.newTab}</span>
          </Button>
          <Button href={contact.linkedin} variant="secondary" external className="w-full sm:w-auto">
            <FaLinkedin size={18} aria-hidden /> LinkedIn
            <span className="sr-only">{contactSection.newTab}</span>
          </Button>
          <Button href={cv.href} variant="secondary" download={cv.download} className="w-full sm:w-auto">
            <HiDownload size={18} aria-hidden /> {contactSection.cv}
          </Button>
        </div>
      </div>
    </section>
  );
}
