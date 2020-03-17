import React from "react";
import Card from "../card";

function Home(){
  return(
    <section>
      <Card arquivo="" titulo="Cadastrar Container" link="/container"/>
      <Card arquivo="" titulo="Cadastrar Movimentações" link="/movimentacao"/>
      <Card arquivo="" titulo="Pesquisa" link="/pesquisa"/>
      <Card arquivo="" titulo="Relatório" link="/relatorio"/>
    </section>
  );
}

export default Home;