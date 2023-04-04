import { nanoid } from 'nanoid';
import { projects } from 'source';
import { SingleProject } from './SingleProject';
import './Projects.css';

export const Projects = () => {
  if (!projects.length) return null;

  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Projects</h2>

      <div>
        {projects.map(project => (
          <SingleProject key={nanoid()} project={project} />
        ))}
      </div>
    </section>
  );
};
