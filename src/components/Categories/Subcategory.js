import React from 'react';
import checked from "../../images/ic_checked.svg";


const Subcategory = (props) => {

return (
   // <Link to={`/category/${props.shortcut}`} className="category">
   <li className="categories__sublist__item"> 
   <div  className="categories__sublist__item__container">
<p className="categories__sublist__item__container--title">{props.name}</p>
   <img className="categories__sublist__item__container--check" src={checked} alt="Categoría seleccionada"></img>
   </div>
   </li>
     //</Link>
   
  );
}

export default Subcategory;
