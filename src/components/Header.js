import React from 'react';
import logo from '../images/ic_circled_lidl.png';
import '../stylesheets/app.scss';
import FilterByMarket from "./FilterByMarket"
import FilterByPostalCode from './FilterByPostalCode';
import Market from "./Market"


const Header = (props) =>  {



    const preventEvent = (ev) => {
      ev.preventDefault(ev);
    };
    
    return (
  <header className="categories__header" style={{backgroundColor: (props.filteredMarketsById && props.filteredMarketsById.color) ? `rgb(${props.filteredMarketsById.color})` : "rgb(0, 50, 120)"}}>
  <img className="categories__header__logo" src={(props.filteredMarketsById && props.filteredMarketsById.icon) ? props.filteredMarketsById.icon : logo} 
     alt="Logo de la tienda"></img> 
  <form className="categories__header__form" onSubmit={preventEvent}>  
          <div className="categories__header__text">
            <p className="categories__header__text--name">
        {props.filteredMarketsById && props.filteredMarketsById.name ? props.filteredMarketsById.name : "Lidl"} 
            </p>
   <FilterByPostalCode handleFilter={props.handleFilter}  postalCode={props.postalCode}  filteredMarketsById={props.filteredMarketsById}
        />
        </div>
  <FilterByMarket markets={props.markets} handleFilter={props.handleFilter}/>

          </form>
      </header>
        );

     
   

}

export default Header;
