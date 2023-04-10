import { nanoid } from 'nanoid';
import { FaGithub } from 'react-icons/fa';
import { MdPreview } from 'react-icons/md';

export const SingleProject = ({ project }) => {
  return (
    <div className="project">
      <img className="project__image" src={project.image} alt={project.name} />

      <h3>{project.name}</h3>

      <p className="project__description">{project.description}</p>

      {project.stack && (
        <ul className="project__stack">
          {project.stack.map(item => (
            <li key={nanoid()} className="project__stack-item">
              {item}
            </li>
          ))}
        </ul>
      )}

      <ul className="project__links center">
        {project.sourceCode && (
          <li>
            <a
              className="project__link-item center"
              href={project.sourceCode}
              aria-label="source code"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub /> GitHub
            </a>
          </li>
        )}
        {project.livePreview && (
          <li>
            <a
              className="project__link-item center"
              href={project.livePreview}
              aria-label="live preview"
              target="_blank"
              rel="noreferrer"
            >
              <MdPreview />
              View
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};
