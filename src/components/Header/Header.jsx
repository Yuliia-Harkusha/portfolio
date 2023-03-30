import { Navbar } from 'components/Navbar/Navbar';
import './Header.css';

export const Header = () => {
  return (
    <header className="header center">
      <div className="header-wrapper">
        <h3>
          <a
            href="https://yuliia-harkusha.github.io/portfolio/"
            className="link"
          >
            YH
          </a>
        </h3>
        <Navbar />
      </div>
    </header>
  );
};
