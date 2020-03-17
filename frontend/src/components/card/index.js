import React from 'react';
import Link from 'react-router-dom';

export default function Card(props){
  return(
    <div className="card-body">
      <header className="card-header">
        <img src={props.arquivo} alt={props.titulo} className="card-img"/>
      </header>
      <Link to={props.link} className="card-link">
        {props.titulo}
      </Link>
    </div>
  );
}