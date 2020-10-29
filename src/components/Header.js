import React from 'react';
import logo from '../images/ic_circled_super.png';
import '../stylesheets/app.scss';

const Header = (props) =>  {



  return (
        <header className="categories__header">
          <img className="categories__header__logo" src={logo} alt="Logo de la tienda"></img>
          <div className="categories__header__text">
            <p className="categories__header__text--name">
             Mercadona
            </p>
            <p className="categories__header__text--cp">
              Comprando en 28005
            </p>
          </div>
          <button className="categories__header__btn">CAMBIAR</button>
        </header>
        
     
  );
}

export default Header;
