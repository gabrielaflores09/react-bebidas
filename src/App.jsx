import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaRecetas from './components/ListaRecetas';

import CategoriasProvider from './context/CategoriaContext';
import RecetasProvider from './context/RecetasContext';

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <Header/>
        <Formulario/>
        <ListaRecetas/>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
