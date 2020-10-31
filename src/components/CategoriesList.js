import React from 'react';
// import checked from "../images/ic_checked.svg";

import '../stylesheets/app.scss';
import Category from "../components/Category"


const CategoriesList = (props) =>  {
   
    const categoriesElements = props.categories.map((category) => {
        return (
          <Category
           key={category.id}
            id={category.id}
            name={category.name}
            icon={category.icon}
            shortcut={category.shortcut}
            subcategories={category.categories}
            collapsible={props.collapsible}
            handleCollapse={props.handleCollapse}
          />
        ); 
      });
    
      // //Condicional personaje no encontrado
      // if (categoriesElements.length === 0)
      //   return "Hola";


    return (
        
        <ul className="categories__list">
           {categoriesElements}
        </ul>
        
        );
    }
    
    export default CategoriesList;
    