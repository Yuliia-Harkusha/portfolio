import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import './Contacts.css';

export const Contacts = () => {
  return (
    <section className="section center contacts" id="contact">
      <h2 className="section__title">Find me on</h2>
      <p className="text">
        Feel free to <span className="text-accent">connect</span> with me
      </p>
      <ul className="contacts__social center">
        <li>
          <a
            className="contacts__social__link"
            href="mailto:yu.harkusha1551@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <SiGmail />
          </a>
        </li>
        <li>
          <a
            className="contacts__social__link"
            href="https://www.linkedin.com/in/yu-harkusha/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a
            className="contacts__social__link"
            href="https://github.com/Yuliia-Harkusha"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </li>
      </ul>
    </section>
  );
};
