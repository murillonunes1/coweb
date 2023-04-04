/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Helmet } from 'react-helmet';
import Next from '../Next-page/Next';
import './Projetos.css';

const Projetos = () => {
  return (
    <section className="projetos  efeito__transicao">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Página para apresentação de projetos"
        />
      </Helmet>
      <div className="container-w2">
        <div className="projetos__item">
        <div className="projetos__text">
          <h1>Serviços prestados</h1>
          <p><p>Lorem ipsum dolor sit amet. In provident explicabo non tempore magnam et molestias galisum aut perspiciatis suscipit. Aut alias totam sed ipsam galisum ex eaque quam et minus neque aut repellat facere aut praesentium temporibus. </p><p>Ex neque rerum aut illum labore in rerum ratione non voluptatem autem aut similique ratione ut unde perferendis. Qui doloribus galisum sed laborum expedita sit numquam dolorem cum distinctio labore. Est dolor rerum est maiores odit et quia debitis ea obcaecati facere ut maxime voluptas. Ab iusto beatae et aliquid quod sed recusandae esse aut deserunt sunt est nihil eaque. </p><p>Et quisquam galisum aut amet dolores ut optio perspiciatis. Sed molestiae maxime 33 laboriosam animi et excepturi minus nam tempora distinctio. Et dolore unde qui optio esse et aliquam laboriosam in possimus facilis. </p>
</p>
          <Next route="/contato" />
        </div>
      </div>
      </div>
    </section>
  );
};

export default Projetos;