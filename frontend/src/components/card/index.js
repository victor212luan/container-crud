import React from 'react';
import { Link } from 'react-router-dom';

import '../../assets/css/objects/card-body.css';

export default function Card(props){
  return(
    <div className="card-body">
      <header className="card-content">
        <img 
          src={props.arquivo} 
          alt={props.titulo} 
        />
        <Link to={props.link}>
          {props.titulo}
        </Link>
      </header>
    </div>
  );
}