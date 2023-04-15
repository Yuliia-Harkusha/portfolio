import { nanoid } from 'nanoid';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { projects } from 'source';
import { SingleProject } from './SingleProject';
import './Projects.css';

export const Projects = () => {
  if (!projects.length) return null;

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <section id="projects" className="section">
      <h2 className="section__title">My projects</h2>

      <div className="projects">
        <Slider {...settings}>
          {projects.map(project => (
            <SingleProject key={nanoid()} project={project} />
          ))}
        </Slider>
      </div>
    </section>
  );
};
