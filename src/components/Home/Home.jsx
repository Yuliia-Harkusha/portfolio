import facetune from '../../images/Facetune.jpg';
import { linkCV } from 'source';
import './Home.css';

export const Home = () => {
  return (
    <section className="section home">
      <div>
        <p className="top-title">Junior Front-End Developer</p>
        <h1 className="home-title">
          Hello, I'm <span className="home-name">Yuliia</span>
        </h1>
        <p className="home-about">
          I am a Junior Frontend Developer with a focus on JavaScript and
          ReactJS, passionate about learning and exploring new things .
        </p>
        <p className="home-about">
          I enjoy coding and prefer to work in an agile way, ensuring the
          technical feasibility of UI/UX designs.
        </p>
        <p className="home-about last">
          I’m interested in collaborating with people from different background
          and experience in order to build nice products together. I am a team
          worker who is open-minded, motivated to learn and develop further,
          with a willingness to improve myself, the team, and the workflow.
        </p>
        <a
          href={linkCV}
          download="YuliiaHarkusha_CV.pdf"
          target="_blank"
          rel="noreferrer"
          className="btn home-btn"
        >
          Download CV
        </a>
      </div>
      <div className="img-wrapper">
        <img src={facetune} alt="hero-img" className="hero-img" />
      </div>
    </section>
  );
};
