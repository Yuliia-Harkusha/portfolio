import { nanoid } from 'nanoid';
import { skills } from 'source';
import './Skills.css';

export const Skills = () => {
  if (!skills.length) return null;

  return (
    <section id="skills" className="section skills">
      <h2 className="section__title">Skills</h2>
      <ul className="skills__list">
        {skills.map(skill => {
          return (
            <li key={nanoid()} className="skills__list-item">
              {skill}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
