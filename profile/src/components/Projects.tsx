import Section from './Section';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <Section
      id="projetos"
      eyebrow="Projetos"
      title="Projetos com código público"
      intro="Repositórios públicos de programação, do app ao exercício de curso. Onde existe site publicado, o link está no card."
    >
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        {projects.map((project) => (
          <li key={project.id} className="reveal min-w-0">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
