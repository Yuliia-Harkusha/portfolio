import { useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { BsFillSunFill } from 'react-icons/bs';
import { HiOutlineMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import './Navbar.css';

export const Navbar = () => {
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className="center nav">
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className="nav__list"
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
      ></button>

      <button
        className="btn btn-icon nav__menu"
        type="button"
        aria-label="toggle navigation"
      >
        {showNavList ? <AiOutlineClose /> : <HiOutlineMenu />}
      </button>
    </nav>
  );
};
