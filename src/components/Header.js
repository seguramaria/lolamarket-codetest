import React from 'react';
import logo from '../images/ic_circled_super.png';
import '../stylesheets/app.scss';
import FilterByMarket from "./FilterByMarket"
import FilterByPostalCode from './FilterByPostalCode';
import Market from "./Market"


const Header = (props) =>  {



const filteredMarket = props.markets.find(market => market.id === props.companyId)

console.log(filteredMarket.icon);

    const preventEvent = (ev) => {
      ev.preventDefault(ev);
    };
    
    return (

    <header className="categories__header">
    <img className="categories__header__logo" src={filteredMarket.icon ? filteredMarket.icon : logo}  alt="Logo de la tienda"></img>
     <form className="categories__header__form" onSubmit={preventEvent}>  
          <div className="categories__header__text">
            <p className="categories__header__text--name">
            {filteredMarket.name ? filteredMarket.name : "Tienda"}
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
