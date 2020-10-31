import React from 'react';
import Subcategory from './Subcategory'
import show from "../images/down-arrow.svg";
import hide from "../images/up-arrow.svg";
import logoCategory from "../images/ic_category_000.png";
import checked from "../images/ic_checked.svg";
import "../stylesheets/app.scss"

const Category= (props) => {
  //Cambio el resultado de la especie por un icono con un condicional:
console.log(props.subcategories);

const subcategoriesElements = props.subcategories.map((subcategory) => {
  return (
    <Subcategory
            id={subcategory.id}
      name={subcategory.name}
          shortcut={subcategory.shortcut}
     
    />
  ); 
});

// //Condicional personaje no encontrado
// if (subcategoriesElements.length === 0)
//   return "Hola";

  return (
    // <Link to={`/category/${props.shortcut}`} className="category">
    <>
    <li className="categories__list__item" id={props.id}> 
    <img className="categories__list__item--icon" src={props.icon ? props.icon : logoCategory} alt="Icono de la categoría" ></img>
      <div className="categories__list__item--category">
  <p className="categories__list__item--category--title">{props.name}</p>
        <img className="categories__list__item--category--arrow hide hidden" src={hide} alt="Flecha" ></img>
        <img className="categories__list__item--category--arrow " src={show} alt="Flecha" ></img>
     </div>
    </li>
      <ul className="categories__sublist">
     {subcategoriesElements}
</ul>
</>
    
    // </Link>
  );
};


export default Category;
