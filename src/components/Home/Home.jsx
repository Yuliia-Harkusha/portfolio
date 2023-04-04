import facetune from '../../images/Facetune.jpg';
import { linkCV } from 'source';
import './Home.css';

export const Home = () => {
  return (
    <section className="section home">
      <div>
        <p className="top-title">Junior Front-End Developer</p>
        <h1 className="home-title">Hello, I'm Yuliia</h1>
        <p></p>
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
