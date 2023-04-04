import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Inicio from './Components/Inicio/Inicio';
import Sobre from './Components/Sobre/Sobre';
import Projetos from './Components/Projetos/Projetos';
import Contato from './Components/Contato/Contato';
import Error from './Components/Error/Error';
import React from 'react';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* <Particles /> */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="projetos" element={<Projetos />} />
          <Route path="contato" element={<Contato />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;