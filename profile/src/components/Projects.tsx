import Section from './Section';
import ProjectCard from './ProjectCard';
import Reveal from './Reveal';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <Section
      id="projetos"
      eyebrow="Projetos"
      title="Projetos com código público"
      intro="APIs, front-ends e app mobile que escrevi. Todo projeto tem o repositório aberto; os que estão publicados têm link para o site."
    >
      <ul className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <li key={project.id}>
            {index === 0 ? (
              <ProjectCard project={project} priority />
            ) : (
              <Reveal>
                <ProjectCard project={project} />
              </Reveal>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
