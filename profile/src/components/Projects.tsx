import Section from './Section';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <Section
      id="projetos"
      eyebrow="Projetos"
      title="Projetos com código público"
      intro="APIs, front-ends e app mobile que escrevi. Todo projeto tem o repositório aberto; os que estão publicados têm link para o site."
    >
      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <li key={p.id} className="md:last:odd:col-span-2">
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
