import React from 'react';
import checked from "../../images/ic_checked.svg";
import { Link } from 'react-router-dom';

const Subcategory = (props) => {
console.log(props.filteredMarketsById.shortcut)
return (
   <Link to={`/tienda/${props.filteredMarketsById.shortcut}/${props.category}/${props.shortcut}`} className="subcategory">
   <li className="categories__sublist__item"> 
   <div  className="categories__sublist__item__container">
<p className="categories__sublist__item__container--title">{props.name}</p>
   <img className="categories__sublist__item__container--check hidden" src={checked} alt="Categoría seleccionada"></img>
   </div>
   </li>
   </Link>
   
  );
}

export default Subcategory;
