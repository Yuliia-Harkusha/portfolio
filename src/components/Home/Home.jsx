import facetune from '../../images/Facetune.jpg';
import './Home.css';

export const Home = () => {
  return (
    <section className="section home">
      <div>
        <p className="top-title">Junior Front-End Developer</p>
        <h1 className="home-title">Hello, I'm Yuliia</h1>
        <p></p>
        <button type="button" className="btn home-btn">
          Download CV
        </button>
      </div>
      <div className="img-wrapper">
        <img src={facetune} alt="hero-img" className="hero-img" />
      </div>
    </section>
  );
};
