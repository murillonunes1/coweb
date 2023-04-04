import React from 'react';
import { Helmet } from 'react-helmet';
import Next from '../Next-page/Next';
import './Inicio.css';
import logo from '../../Assets/co.png';

const Inicio = () => {
  return (
    <section className="inicio efeito__transicao">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Página inicial website!" />
      </Helmet>
      <div className="container-w2">
        <div className="inicio__item">
          <div className="inicio__text">
          </div>
        
          <div className="inicio__img">
            <img src={logo} alt="Slogan" />
            <Next route="/sobre" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inicio;