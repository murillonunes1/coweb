import React from 'react';
import { Helmet } from 'react-helmet';
import Next from '../Next-page/Next';
import './Sobre.css';

const Sobre = () => {
  
  return (
    <section className="sobre  efeito__transicao">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Página sobre" />
      </Helmet>
      <div className="container-w2">
        <div className="sobre__item">
          <div className="sobre__text">
            <h1>Sobre</h1>
            <p>
            Nosso escritório oferece uma ampla gama de serviços jurídicos, de auditoria e contabilidade para atender às necessidades de nossos clientes. Oferecemos serviços de consultoria em questões jurídicas, auditoria de empresas e instituições financeiras, contabilidade empresarial e tributária, gestão de riscos, entre outros. Estamos comprometidos em fornecer serviços de alta qualidade e soluções personalizadas para nossos clientes. Nossa abordagem é baseada em entender as necessidades específicas de cada cliente e fornecer soluções sob medida para atender a essas necessidades.
            </p>
            <Next route="/projetos" />
          </div>

          
          </div>
        </div>
    </section>
  );
};

export default Sobre;