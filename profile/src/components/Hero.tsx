import Image from 'next/image';
import { personName } from '../config';
import { useI18n } from '../i18n/context';
import Button from './Button';

export default function Hero() {
  const { sections, hero } = useI18n();

  return (
    <section id={sections.home} aria-labelledby={`${sections.home}-heading`} className="section-anchor px-4 pb-8 pt-24 sm:px-6 md:pb-12 md:pt-28">
      <div className="mx-auto max-w-6xl">
        <Image
          src="/images/alan-diogo.webp"
          alt={hero.imageAlt}
          width={400}
          height={400}
          priority
          sizes="160px"
          className="h-28 w-28 rounded-full border border-line object-cover sm:h-36 sm:w-36 md:h-40 md:w-40"
        />

        <h1
          id={`${sections.home}-heading`}
          className="mt-6 text-[2.5rem] tracking-[-0.04em] md:text-[4rem] lg:text-[4.5rem]"
        >
          {personName}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-[1.6] text-ink sm:text-xl">{hero.lede}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={`#${sections.projects}`} className="w-full sm:w-auto">
            {hero.viewProjects}
          </Button>
          <Button href={`#${sections.contact}`} variant="secondary" className="w-full sm:w-auto">
            {hero.contact}
          </Button>
        </div>
      </div>
    </section>
  );
}
