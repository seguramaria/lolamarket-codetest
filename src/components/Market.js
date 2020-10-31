import React from 'react';
import logo from '../images/ic_circled_super.png';
import '../stylesheets/app.scss';
import FilterByMarket from "./FilterByMarket"

const Market= (props) =>  {

// console.log(props);

      return (
        <>
          <img className="categories__header__logo" src={logo} alt="Logo de la tienda"></img>
          <form className="categories__header__form">  
          <div className="categories__header__text">
            <p className="categories__header__text--name">
             Mercadona
            </p>
         
       <input 
      className="categories__header__text--cp"
        placeholder={`Comprando en ${props.postalCode}`}
         type="number"
        name="name"
        id="name"
        // value={props.nameFilter}
        // onChange={handleChange}
      />
        </div>

  <FilterByMarket markets={props.markets}/>

          </form>
        </>
          
        
  );

}

export default Market;
