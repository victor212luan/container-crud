import React from "react";
import Card from "../card";

import '../../assets/css/components/main-cards.css';

import ContainerSVG from '../../assets/images/container.svg';
import BoxSVG from '../../assets/images/box.svg';
import SearchSVG from '../../assets/images/search.svg';
import ReportSVG from '../../assets/images/report.svg';

function Home(){
  return(
    <section className="main-cards">
      <Card arquivo={ContainerSVG} titulo="Cadastrar Container" link="/container"/>
      <Card arquivo={BoxSVG} titulo="Cadastrar Movimentações" link="/movimentacoes"/>
      <Card arquivo={SearchSVG} titulo="Pesquisa" link="/pesquisa"/>
      <Card arquivo={ReportSVG} titulo="Relatório" link="/relatorio"/>
    </section>
  );
}

export default Home;