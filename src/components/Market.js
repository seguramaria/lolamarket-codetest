import React from 'react';
import logo from '../images/ic_circled_super.png';
import '../stylesheets/app.scss';
import FilterByMarket from "./FilterByMarket"
import FilterByPostalCode from './FilterByPostalCode';

const Market= (props) =>  {




  const preventEvent = (ev) => {
    ev.preventDefault(ev);
  };
        return (
          <>
    <img className="categories__header__logo" src={logo} alt="Logo de la tienda"></img>
     <form className="categories__header__form" onSubmit={preventEvent}>  
          <div className="categories__header__text">
            <p className="categories__header__text--name">
           Mercadona
            </p>
   <FilterByPostalCode handleFilter={props.handleFilter}  postalCode={props.postalCode}
        />
        </div>
  <FilterByMarket markets={props.markets} handleFilter={props.handleFilter}/>

          </form>
         
          </>
            
          
    );
}







export default Market;
