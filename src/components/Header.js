import React from 'react';
import logo from '../images/ic_circled_super.png';
import '../stylesheets/app.scss';
import FilterByMarket from "./FilterByMarket"
import FilterByPostalCode from './FilterByPostalCode';
import Market from "./Market"


const Header = (props) =>  {
// console.log(props);


console.log(props.filteredMarkets);


    const preventEvent = (ev) => {
      ev.preventDefault(ev);
    };
    
    return (

    <header className="categories__header">
    <img className="categories__header__logo" src={props.filteredMarkets.icon} alt="Logo de la tienda"></img>
     <form className="categories__header__form" onSubmit={preventEvent}>  
          <div className="categories__header__text">
            <p className="categories__header__text--name">
            {props.filteredMarkets.name} 
            </p>
   <FilterByPostalCode handleFilter={props.handleFilter}  postalCode={props.postalCode} 
        />
        </div>
  <FilterByMarket markets={props.markets} handleFilter={props.handleFilter}/>

          </form>
      </header>
        );

     
   

}

export default Header;
