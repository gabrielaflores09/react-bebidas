import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

import CategoriasProvider from './context/CategoriaContext';

function App() {
  return (
    <CategoriasProvider>
      <Header/>
      <Formulario/>
    </CategoriasProvider>
  );
}

export default App;
