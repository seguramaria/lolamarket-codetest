import React from 'react';

import show from "../images/ic_show.svg";
import hide from "../images/ic_hide.svg";
import "../stylesheets/app.scss"

const Category= (props) => {
  //Cambio el resultado de la especie por un icono con un condicional:


  return (
    // <Link to={`/category/${props.shortcut}`} className="category">
    <li className="categories__list__item" id={props.id}> 
    <img className="categories__list__item--icon" src={props.icon} alt="Icono de la categoría" ></img>
      <div className="categories__list__item--category">
  <p className="categories__list__item--category--title">{props.name}</p>
        <img className="categories__list__item--category--arrow hide" src={hide} alt="Flecha" ></img>
        <img className="categories__list__item--arrow hidden" src={show} alt="Flecha" ></img>
     </div>
    </li>

    
    // </Link>
  );
};


export default Category;
