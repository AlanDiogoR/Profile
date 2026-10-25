import Image from 'next/image';
import Button from './Button';
import { bio } from '../data/bio';

export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="inicio-titulo" className="section-anchor px-4 pb-8 pt-24 sm:px-6 md:pb-12 md:pt-28">
      <div className="mx-auto max-w-6xl">
        <Image
          src="/images/alan-diogo.webp"
          alt="Retrato de Alan Diogo, de camisa preta, sobre fundo claro"
          width={400}
          height={400}
          priority
          sizes="160px"
          className="h-28 w-28 rounded-full border border-line object-cover sm:h-36 sm:w-36 md:h-40 md:w-40"
        />

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
