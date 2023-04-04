import { nanoid } from 'nanoid';
import { FaGithub } from 'react-icons/fa';
import { MdPreview } from 'react-icons/md';

export const SingleProject = ({ project }) => {
  return (
    <div className="project-item">
      <img src={project.image} alt="project pic" />

      <h3>{project.name}</h3>

      <p>{project.description}</p>

      {project.stack && (
        <ul>
          {project.stack.map(item => (
            <li key={nanoid()}>{item}</li>
          ))}
        </ul>
      )}

      <ul>
        {project.sourceCode && (
          <li>
            <a href={project.sourceCode} aria-label="source code">
              <FaGithub /> GitHub
            </a>
          </li>
        )}
        {project.livePreview && (
          <li>
            <a href={project.livePreview} aria-label="live preview">
              <MdPreview />
              Demo
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};
