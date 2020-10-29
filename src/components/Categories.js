import React from 'react';
// import checked from "../images/ic_checked.svg";
import show from "../images/ic_show.svg";
import hide from "../images/ic_hide.svg";
import logoCategory from "../images/ic_category_000.png";
import '../stylesheets/app.scss';

const Categories = (props) =>  {
    
    return (
        
        <ul className="categories__list">
            <li className="categories__list__item"> 
            <img className="categories__list__item--icon" src={logoCategory} alt="Icono de la categoría" ></img>
              <div className="categories__list__item--category">
                <p className="categories__list__item--category--title">Populares</p>
                <img className="categories__list__item--category--arrow hide" src={hide} alt="Flecha" ></img>
                <img className="categories__list__item--arrow hidden" src={show} alt="Flecha" ></img>
             </div>
            </li>
        </ul>
        
        );
    }
    
    export default Categories;
    