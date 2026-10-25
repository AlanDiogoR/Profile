import Section from './Section';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

/** Quatro primeiros projetos da lista existente, sem inventar links ou descrições. */
const featured = projects.slice(0, 4);

export default function Projects() {
  return (
    <Section
      id="projetos"
      eyebrow="Projetos"
      title="Projetos com código público"
      intro="APIs, front-ends e app mobile que escrevi. Todo projeto tem o repositório aberto; os que estão publicados têm link para o site."
    >
      <ul className="flex flex-col gap-6">
        {featured.map((project, index) => (
          <li key={project.id}>
            <ProjectCard project={project} priority={index === 0} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
