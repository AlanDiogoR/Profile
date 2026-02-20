import { useInView } from '../hooks/useInView';
import { bio } from '../data/bio';

export default function About() {
  const [ref, isInView] = useInView<HTMLElement>({ once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 bg-dark-900/50 scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-6 transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          Sobre mim
        </h2>
        <p
          className={`text-[var(--color-text-muted)] text-lg mb-6 transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          style={isInView ? { transitionDelay: '0.1s' } : {}}
        >
          {bio.intro}
        </p>
        <div
          className={`space-y-4 text-[var(--color-text)] transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          style={isInView ? { transitionDelay: '0.2s' } : {}}
        >
          {bio.about.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        <div
          className={`mt-8 flex flex-wrap gap-4 transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          style={isInView ? { transitionDelay: '0.3s' } : {}}
        >
          <span className="px-4 py-2 bg-dark-800 rounded-lg text-[var(--color-text-muted)] text-sm">
            {bio.formation}
          </span>
          <span className="px-4 py-2 bg-dark-800 rounded-lg text-[var(--color-text-muted)] text-sm">
            {bio.experience}
          </span>
        </div>
      </div>
    </section>
  );
}
