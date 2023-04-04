import { useContext } from 'react';
import { ThemeContext } from 'context/theme';
import { Header } from 'components/Header/Header';
import { Home } from 'components/Home/Home';
import { Projects } from 'components/Projects/Projects';
import { Skills } from 'components/Skills/Skills';
import { Contacts } from 'components/Contacts/Contacts';
import { Footer } from 'components/Footer/Footer';
import { ScrollUp } from 'components/ScrollToTop/ScrollToTop';
import './App.css';

export const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <div id="top" className={`${themeName} app`}>
      <Header />
      <main>
        <Home />
        <Projects />
        <Skills />
        <Contacts />
      </main>
      <ScrollUp />
      <Footer />
    </div>
  );
};
