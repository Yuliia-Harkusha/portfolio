import book from 'images/Book.png';
import cocktail from 'images/Cocktail.webp';
import petly from 'images/Petly.png';
import weather from 'images/Weather.jpg';
import webStudio from 'images/WebStudio.jpg';

const skills = [
  'HTML',
  'CSS',
  'SASS',
  'Responsive design',
  'JavaScript',
  'React',
  'Redux',
  'Git',
];

const linkCV = '';

const projects = [
  {
    image: cocktail,
    name: 'Cocktails',
    description:
      'In this app you can find your favourite cocktail aссompanied by the description and the ingredients. Natty and tasty design, responsive layout.',
    stack: [
      'React',
      'React Router',
      'React Context',
      'Styled Components',
      'ThCocktailDB API',
    ],
    sourceCode: 'https://github.com/Yuliia-Harkusha/cocktails',
    livePreview: 'https://yuliia-harkusha.github.io/cocktails/',
  },
  {
    image: weather,
    name: 'Weather App',
    description:
      'A simple one-page site for finding current weather in different cities simultaneously displaying a picture of the determined city.',
    stack: [
      'HTML',
      'CSS',
      'JavaScript',
      'Axios',
      'OpenWeatherMap API',
      'Unsplash API',
    ],
    sourceCode: 'https://github.com/Yuliia-Harkusha/weather-app',
    livePreview: 'https://yuliia-harkusha.github.io/weather-app/',
  },
  {
    image: book,
    name: 'PhoneBook',
    description:
      'A small application that includes all the necessary functionality of the phone book.',
    stack: ['React', 'React Router', 'Redux', 'Styled Components'],
    sourceCode: 'https://github.com/Yuliia-Harkusha/phonebook-app',
    livePreview: 'https://yuliia-harkusha.github.io/phonebook-app/',
  },
  {
    image: petly,
    name: 'Petly',
    description:
      'Team project where I made  OurFriends/Partners section,  both backend and frontend parts. The idea of the application is to help users to find, sell or buy pets.',
    stack: [
      'React',
      'React Router',
      'Redux',
      'Styled Components',
      'Node.js',
      'MongoDB',
      'Mongoose',
      'Axios',
    ],
    sourceCode: 'https://github.com/Yuliia-Harkusha/petly-frontend',
    livePreview: 'https://petly-frontend.vercel.app/',
  },
  {
    image: webStudio,
    name: 'WebStudio',
    description:
      'My first learning project going from the basics of HTML/CSS to a full-fledged cross-browser and adaptive layout.',
    stack: ['HTML', 'CSS', 'JavaScript', 'SCSS'],
    sourceCode: 'https://github.com/Yuliia-Harkusha/Web-studio',
    livePreview: 'https://yuliia-harkusha.github.io/Web-studio/',
  },
];

export { linkCV, skills, projects };
