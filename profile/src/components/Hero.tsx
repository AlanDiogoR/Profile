import { bio } from '../data/bio';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-4 sm:px-6 pt-20 scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-accent-purple font-medium mb-4 opacity-0 animate-fade-in-up">
          Olá, sou {bio.name}
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-text)] leading-tight opacity-0 animate-fade-in-up animate-fade-in-up-delay-1">
          Building software
          <br />
          <span className="text-accent-purple">to impact the world</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[var(--color-text-muted)] max-w-2xl opacity-0 animate-fade-in-up animate-fade-in-up-delay-2">
          {bio.headline}
        </p>
        <div className="mt-8 opacity-0 animate-fade-in-up animate-fade-in-up-delay-3">
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-accent-purple hover:bg-accent-indigo text-white font-medium rounded-lg transition-colors focus-visible:outline-accent-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-offset-dark-950 rounded"
          >
            Entre em contato
          </a>
        </div>
      </div>
    </section>
  );
}
