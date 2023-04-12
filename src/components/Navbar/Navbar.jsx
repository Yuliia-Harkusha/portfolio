import { useState, useContext } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { BsFillSunFill } from 'react-icons/bs';
import { TfiAlignJustify } from 'react-icons/tfi';
import { TfiClose } from 'react-icons/tfi';
import { MdMenu } from 'react-icons/md';
import { MdOutlineClear } from 'react-icons/md';
import { ThemeContext } from 'context/theme';
import './Navbar.css';

export const Navbar = () => {
  const [showNavList, setShowNavList] = useState(false);
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className="center">
      <ul
        style={{
          display: showNavList ? 'flex' : null,
        }}
        className="nav__list "
      >
        <li className="nav__list-item">
          <a href="#projects" className="link link-nav" onClick={toggleNavList}>
            Projects
          </a>
        </li>
        <li className="nav__list-item">
          <a href="#skills" className="link link-nav" onClick={toggleNavList}>
            Skills
          </a>
        </li>
        <li className="nav__list-item">
          <a href="#contacts" className="link link-nav" onClick={toggleNavList}>
            Contacts
          </a>
        </li>
      </ul>

      <button
        className="btn btn-icon nav__theme"
        type="button"
        aria-label="toggle theme"
        onClick={toggleTheme}
      >
        {themeName === 'dark' ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
      </button>

      <button
        className="btn btn-icon nav__menu"
        type="button"
        aria-label="toggle navigation"
        onClick={toggleNavList}
        style={{
          position: showNavList ? 'fixed' : 'static',
        }}
      >
        {showNavList ? <MdOutlineClear /> : <MdMenu />}
      </button>
    </nav>
  );
};
