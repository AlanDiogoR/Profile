import Image from 'next/image';
import Button from './Button';
import { bio } from '../data/bio';

function Monogram() {
  return (
    <div
      aria-hidden
      className="grid h-20 w-20 shrink-0 place-items-center border border-line bg-surface font-display text-2xl font-bold tracking-tight sm:h-24 sm:w-24"
    >
      <span className="flex h-full w-full items-center justify-center border-l-[3px] border-brand">AD</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="inicio-titulo" className="scroll-mt-20 px-4 pb-8 pt-24 sm:px-6 md:pb-12 md:pt-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3">
          <Image
            src="/images/alan-diogo.jpg"
            alt="Foto de Alan Diogo"
            width={192}
            height={192}
            priority
            sizes="96px"
            className="h-20 w-20 border border-line object-cover sm:h-24 sm:w-24"
          />
          <Monogram />
        </div>

        <h1
          id="inicio-titulo"
          className="mt-6 text-[2.5rem] tracking-[-0.04em] md:text-[4rem] lg:text-[4.5rem]"
        >
          {bio.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-[1.6] text-ink sm:text-xl">
          {bio.role}. Construo APIs REST, front-ends tipados e apps mobile para problemas reais, do banco ao deploy.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="#projetos" className="w-full sm:w-auto">
            Ver projetos
          </Button>
          <Button href="#contato" variant="secondary" className="w-full sm:w-auto">
            Falar comigo
          </Button>
        </div>
      </div>
    </section>
  );
}
