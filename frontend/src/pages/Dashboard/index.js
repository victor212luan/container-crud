import React from 'react';
import { Link } from 'react-router-dom';

import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import SearchIcon from '@material-ui/icons/Search';
import AssignmentIcon from '@material-ui/icons/Assignment';

import '../../assets/css/objects/nav-link.css';
import '../../assets/css/objects/link-action.css';
import '../../assets/css/objects/link-icon.css';

export default function Dashboard(){
  return(
    <aside>
      <nav>
        <div className="nav-link initial">
          <MenuOutlinedIcon 
            className="link-icon" preserveAspectRatio="xMaxYMax meet"/>
          <Link className="link-action main" to="/" >
            Dashboard
          </Link>
        </div>
        <div className="nav-link">
          <DirectionsBoatIcon className="link-icon"/>
          <Link className="link-action"  to="/container" >
            Cadastrar Container
          </Link>
        </div>
        <div className="nav-link">
          <LocalShippingIcon className="link-icon"/>
          <Link className="link-action"  to="/movimentacoes" >
            Cadastrar Movimentações
          </Link>
        </div>
        <div className="nav-link">
          <SearchIcon className="link-icon"/>
          <Link className="link-action"  to="/pesquisa" >
            Pesquisar
          </Link>
        </div>
        <div className="nav-link">
          <AssignmentIcon className="link-icon"/>
          <Link className="link-action"  to="/relatorio" >
            Relatório
          </Link>
        </div>
      </nav>
  </aside>
  );
}