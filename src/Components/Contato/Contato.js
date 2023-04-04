import React from 'react';
import { Helmet } from 'react-helmet';
import icon2 from '../../Assets/wpp1.png';
import icon1 from '../../Assets/maps.png';
import './Contato.css';

const Contato = () => {
  return (
    <section className="contato  efeito__transicao">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Página de contato" />
      </Helmet>
      <div className="container">
        <h1>Contato</h1>
        <div className="contato__item">
        <a
            href="https://goo.gl/maps/exqPvXmKDKKjMidJ7"
            target="_blank"
            rel="
              noopener
              noreferrer"
          >
            <img src={icon1} alt="Icone do Google Maps" />
            <span>Endereço</span>
            <p>Visitar</p>
          </a>
        <a href="https://api.whatsapp.com/send?phone=5534998055376">
            <img src={icon2} alt="Icone do Whatsapp" />
            <span>Whatsapp</span>
            <p>Visitar</p>
          </a>
    
        </div>
        <div className="on-mobile">
          <h2>FIM!</h2>
          <p>
            Obrigado pela visita =) <br></br><br></br>
            Sinta-se a vontade para entrar em contato! Se precisar de alguma coisa é só chamar!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contato;
