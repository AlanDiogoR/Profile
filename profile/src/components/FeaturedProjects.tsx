import { useInView } from '../hooks/useInView';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function FeaturedProjects() {
  const [ref, isInView] = useInView<HTMLElement>({ once: true, margin: '-100px' });

  const transitionClass = 'transition-all duration-500';
  const visibleClass = isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5';

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-4 sm:px-6 bg-dark-900/50 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-4 ${transitionClass} ${visibleClass}`}
        >
          Projetos em destaque
        </h2>
        <p
          className={`text-[var(--color-text-muted)] text-lg mb-12 max-w-2xl ${transitionClass} ${visibleClass}`}
          style={isInView ? { transitionDelay: '0.1s' } : {}}
        >
          Grivy e Mood-Sharing em produção. Verdan Shopping (TCC), Rocketseat e outros.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
