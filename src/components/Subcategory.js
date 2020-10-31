import React from 'react';
import checked from "../images/ic_checked.svg";
import '../stylesheets/app.scss';

const Subcategory = (props) => {

return (
   // <Link to={`/category/${props.shortcut}`} className="category">
          <li className="categories__sublist__item"> 
          {/* <img className="categories__sublist__item--icon"></img> */}
          <div  className="categories__sublist__item__container">
  <p className="categories__sublist__item__container--title">{props.name}</p>
          <img className="categories__sublist__item__container--check" src={checked} alt="Categoría seleccionada"></img>
          </div>
          </li>
     //</Link>
   
  );
}

export default Subcategory;
