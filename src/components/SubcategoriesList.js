import React from 'react';
import checked from "../images/ic_checked.svg";
import '../stylesheets/app.scss';
import Subcategory from "./Subcategory"
const SubcategoriesList = (props) => {


    const subCategoriesElements = props.subcategories.map((subcategory) => {
      console.log(subcategory.categories);
        return (
          <Subcategory
            key={subcategory.id}
            id={subcategory.id}
            name={subcategory.name}
            shortcut={subcategory.shortcut}
          //  categories={subcategory.categories}
          />
        ); //vamos a pasar las props hacia abajo que cada personaje tenga sus datos
      });
    
      // Condicional personaje no encontrado
      if (subCategoriesElements.length === 0)
        return "Hola";


  return (
        <ul className="categories__sublist">
               {subCategoriesElements}
        </ul>
   
  );
}

export default SubcategoriesList;
