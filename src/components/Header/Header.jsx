import { useState } from 'react';
import { Navbar } from 'components/Navbar/Navbar';
import './Header.css';

export const Header = () => {
  const [headerColor, setHeaderColor] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      setHeaderColor(true);
    } else {
      setHeaderColor(false);
    }
  };

  window.addEventListener('scroll', scrollHandler);

  return (
    <header className={headerColor && 'sticky'}>
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
