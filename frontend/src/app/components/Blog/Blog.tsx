"use client";

import React from 'react';

const Blog: React.FC = () => {
  return (
    <div>
      <h2>Blog Educativo</h2>
      <div>
        <div>
          <h3>Título do Post</h3>
          <p>Pré-visualização do post...</p>
          <button>Leia Mais</button>
        </div>
        {/* Adicione mais posts conforme necessário */}
      </div>
    </div>
  );
};

export default Blog;