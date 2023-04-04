import { Navbar } from 'components/Navbar/Navbar';
import './Header.css';

export const Header = () => {
  return (
    <header className="header center">
      <div className="header-wrapper center">
        <h2>
          <a
            href="https://yuliia-harkusha.github.io/portfolio/"
            className="link logo"
          >
            YH
          </a>
        </h2>
        <Navbar />
      </div>
    </header>
  );
};
