import React, { useState } from 'react';
import checked from "../images/ic_checked.svg";
import '../stylesheets/app.scss';

const Subcategories = (props) => {



  return (
        <ul className="categories__sublist">
          <li className="categories__sublist__item"> 
          {/* <img className="categories__sublist__item--icon"></img> */}
          <div  className="categories__sublist__item__container">
          <p className="categories__sublist__item__container--title">Nombre categoría</p>
          <img className="categories__sublist__item__container--check" src={checked} alt="Categoría seleccionada"></img>
          </div>
          </li>
        </ul>
   
  );
}

export default Subcategories;
