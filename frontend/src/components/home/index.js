import React from "react";
import Card from "../card";

import '../../assets/css/components/main-cards.css';

function Home(){
  return(
    <section className="main-cards">
      <Card arquivo="" titulo="Cadastrar Container" link="/container"/>
      <Card arquivo="" titulo="Cadastrar Movimentações" link="/movimentacoes"/>
      <Card arquivo="" titulo="Pesquisa" link="/pesquisa"/>
      <Card arquivo="" titulo="Relatório" link="/relatorio"/>
    </section>
  );
}

export default Home;