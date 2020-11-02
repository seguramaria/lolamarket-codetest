import React from 'react';
// import { Link } from 'react-router-dom';
import Subcategory from './Subcategory'
import show from "../../images/down-arrow.svg";
import hide from "../../images/up-arrow.svg";
import logoCategory from "../../images/ic_category_000.png";
import checked from "../../images/ic_checked.svg";


const Category= (props) => {

const displayPanel = (evt) => props.handleCollapse(evt.currentTarget.id);


const subcategoriesElements = props.subcategories.map((subcategory) => {
  return (
    <Subcategory
    key={subcategory.id}
     id={subcategory.id}
      name={subcategory.name}
          shortcut={subcategory.shortcut}
          collapsible={props.collapsible}
          filteredMarketsById ={props.filteredMarketsById} 
          handleCollapse={props.handleCollapse}
     
    />
  ); 
});



  return (
    // <Link to={`${props.shortcut}`} className="category">
  <>
    <li  className={`categories__list__item ${
          parseInt(props.collapsible) === props.id ? "clicked" : ""
        }`}  id={props.id} onClick={displayPanel}> 
    <img className="categories__list__item--icon" src={props.icon ? props.icon : logoCategory} alt="Icono de la categoría" ></img>
      <div className="categories__list__item--category">
       <p className="categories__list__item--category--title">{props.name}</p>
        <img className={`categories__list__item--category--arrow ${
          parseInt(props.collapsible) === props.id ? "" : "hidden"
        }`} src={hide} alt="Flecha" ></img>
        <img className={`categories__list__item--category--arrow ${
          parseInt(props.collapsible) === props.id ? "hidden" : ""
        }`}  src={show} alt="Flecha" ></img>
     </div>
    </li>
      <ul   className={`categories__sublist ${
          parseInt(props.collapsible) === props.id ? "" : "hidden"
        }`}>
            <li className="categories__sublist__item"> 
   <div  className="categories__sublist__item__container">
<p className="categories__sublist__item__container--title">Ver toda la sección</p>
   <img className="categories__sublist__item__container--check hidden" src={checked} alt="Categoría seleccionada"></img>
   </div>
   </li>
     {subcategoriesElements}
</ul>

</>
  /* </Link> */
  );
};


export default Category;
