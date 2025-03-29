'use client';

import Link from 'next/link';
import MenuNavegacao from './components/MenuNavegacao/MenuNavegacao';
import Biografia from './components/Biografia/Biografia';
import Servicos from './components/Servicos/Servicos';
import Depoimentos from './components/Depoimentos/Depoimentos';
import Receitas from './components/Receitas/Receitas';
import Blog from './components/Blog/Blog';
import Contato from './components/Contato/Contato';
import FAQ from './components/FAQ/FAQ';
import Parcerias from './components/Parcerias/Parcerias';
import Rodape from './components/Rodape/Rodape';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white fixed top-0 left-0 w-full z-10">
        <MenuNavegacao />
      </header>

      <main className="flex-grow">
        <section id="biografia">
          <Biografia />
        </section>
        <section id="biografia2">
          <Biografia />
        </section>
        {/*<section id="servicos">
            <Servicos />
          </section>
          <section id="depoimentos">
            <Depoimentos />
          </section>
          <section id="receitas">
            <Receitas />
          </section>
          <section id="blog">
            <Blog />
          </section>
          <section id="contato">
            <Contato />
          </section>
          <section id="faq">
            <FAQ />
          </section>
          <section id="parcerias">
            <Parcerias />
          </section>*/}
      </main>

      {/*
        <footer className="bg-gray-800 text-white">
          <Rodape />
        </footer>
        */}
    </div>
  );
};

export default App;