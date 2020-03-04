import React from 'react';
import { Link } from 'react-router-dom';

import '../../assets/css/objects/link-action.css';

export default function Aside(){
  return(
    <aside>
      <nav>
        <Link 
          className="link-action"
          to="/dashboard" 
        >
          Dashboard
        </Link>
        <Link 
          className="link-action" 
          to="/dashboard/container" 
        >
          Cadastrar Container
        </Link>
        <Link 
          className="link-action" 
          to="/dashboard/movimentacoes" 
        >
          Cadastrar Movimentações
        </Link>
        <Link 
          className="link-action" 
          to="/dashboard/pesquisa" 
        >
          Pesquisar
        </Link>
        <Link 
          className="link-action" 
          to="/dashboard/relatorio" 
        >
          Relatório
        </Link>
      </nav>
    </aside>
  );
}