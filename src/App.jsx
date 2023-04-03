import { useContext } from 'react';
import { ThemeContext } from 'context/theme';
import { Header } from 'components/Header/Header';
import { Skills } from 'components/Skills/Skills';
import { Contacts } from 'components/Contacts/Contacts';
import { Footer } from 'components/Footer/Footer';
import './App.css';

export const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <div id="top" className={`${themeName} app`}>
      <Header />
      <main>
        <Skills />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};
