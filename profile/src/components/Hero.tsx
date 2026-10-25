import Button from './Button';
import { bio } from '../data/bio';

function Monogram() {
  return (
    <div
      aria-hidden
      className="grid h-[4.5rem] w-[4.5rem] shrink-0 place-items-center border border-line bg-surface font-display text-2xl font-bold tracking-tight"
    >
      <span className="flex h-full w-full items-center justify-center border-l-[3px] border-brand">AD</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="inicio-titulo" className="scroll-mt-20 px-4 pb-6 pt-24 sm:px-6 sm:pt-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end gap-4 sm:gap-5">
          <Monogram />
          <div>
            <h1
              id="inicio-titulo"
              className="text-[2.5rem] tracking-[-0.04em] md:text-6xl lg:text-[4.5rem]"
            >
              {bio.name}
            </h1>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-muted sm:text-sm">{bio.role}</p>
          </div>
        </div>

        <p className="mt-6 max-w-2xl text-base leading-[1.6] text-muted sm:text-lg">
          Construo APIs REST, front-ends tipados e apps mobile para problemas reais, do banco ao deploy.
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
