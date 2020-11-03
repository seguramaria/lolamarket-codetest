
import React from 'react';
import logoLolaMarket from '../../images/logo_lolamarket.svg';
import { Link } from 'react-router-dom';
import arrow from "../../images/down-arrow.svg";


const CategorySection = (props) => {

 
  return (
    <>
    <header className="section-products">
       <img className="section-products__logo"src={logoLolaMarket} alt="Logo Lola Market"></img>
       
      <Link to="/" className="subcategory">
      <button className="section-products__btn"> Categorías 
      <img src={arrow} alt="Icono flecha" className="section-products__btn--arrow"></img></button>
      </Link>

      </header>
      <main className="section-products__main"> 
      <p className="section-products__main--title">Productos</p>
      </main>
     
     </>
     
 
  );
};

export default CategorySection;
