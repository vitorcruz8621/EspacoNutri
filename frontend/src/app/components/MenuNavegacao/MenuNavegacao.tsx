"use client";

import React, { useState } from 'react';

const MenuNavegacao: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#inicio" className="text-xl font-bold">
          Início
        </a>

        {/* Botão de menu para dispositivos móveis */}
        <button
          className="block lg:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Links de navegação */}
        <div
          className={`${isOpen ? "block" : "hidden"
            } lg:flex lg:items-center lg:space-x-6`}
        >
          <a href="#biografia" className="block py-2 lg:py-0 hover:text-gray-400">
            BIOGRAFIA
          </a>
          <a href="#servicos" className="block py-2 lg:py-0 hover:text-gray-400">
            SERVIÇOS
          </a>
          <a href="#depoimentos" className="block py-2 lg:py-0 hover:text-gray-400">
            DEPOIMENTOS
          </a>
          <a href="#receitas" className="block py-2 lg:py-0 hover:text-gray-400">
            RECEITAS
          </a>
          <a href="#blog" className="block py-2 lg:py-0 hover:text-gray-400">
            BLOG
          </a>
          <a href="#contato" className="block py-2 lg:py-0 hover:text-gray-400">
            CONTATO
          </a>
          <a href="#faq" className="block py-2 lg:py-0 hover:text-gray-400">
            FAQ
          </a>
          <a href="#parcerias" className="block py-2 lg:py-0 hover:text-gray-400">
            PARCERIAS
          </a>
        </div>
      </div>
    </nav>
  );
};

export default MenuNavegacao;