import React from 'react';
import logo from '../images/ic_circled_super.png';
import '../stylesheets/app.scss';

const Header = (props) =>  {
// console.log(props)
      return (
        <header className="categories__header">
          <img className="categories__header__logo" src={logo} alt="Logo de la tienda"></img>
          <form className="categories__header__form">  
          <div className="categories__header__text">
            <p className="categories__header__text--name">
             Mercadona
            </p>
         

            <input className="categories__header__text--cp"
        placeholder={`Comprando en ${props.postalCode}`}
        // className="input-name"
        type="text"
        name="name"
        id="name"
        // value={props.nameFilter}
        // onChange={handleChange}
      />
        </div>
          <button className="categories__header__btn">CAMBIAR</button>
          </form>
        </header>
          );
     
    
  // });



}

export default Header;
