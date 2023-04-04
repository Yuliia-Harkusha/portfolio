import { BsArrowUpCircle } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import './ScrollToTop.css';

export const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    isVisible && (
      <a href="#top" className="scrollUp ">
        <BsArrowUpCircle />
      </a>
    )
  );
};
