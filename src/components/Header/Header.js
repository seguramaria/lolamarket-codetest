import React from 'react';
import logo from '../../images/ic_circled_lidl.png';
import '../../stylesheets/app.scss';
import FilterByMarket from './Filters/FilterByMarket';
import FilterByPostalCode from './Filters/FilterByPostalCode';

const Header = (props) => {
  const preventEvent = (ev) => {
    ev.preventDefault(ev);
  };

  return (
    <header
      className="categories__header"
      style={{
        backgroundColor:
          props.filteredMarketById && props.filteredMarketById.color
            ? `rgb(${props.filteredMarketById.color})`
            : 'rgb(0, 50, 120)',
      }}
    >
      <img
        className="categories__header__logo"
        src={
          props.filteredMarketById && props.filteredMarketById.icon
            ? props.filteredMarketById.icon
            : logo
        }
        alt="Logo de la tienda"
      ></img>
      <form className="categories__header__form" onSubmit={preventEvent}>
        <div className="categories__header__text">
          <p className="categories__header__text--name">
            {props.filteredMarketById && props.filteredMarketById.name
              ? props.filteredMarketById.name
              : 'Lidl'}
          </p>
          <FilterByPostalCode
            handleFilter={props.handleFilter}
            postalCode={props.postalCode}
            filteredMarketById={props.filteredMarketById}
          />
        </div>
        <FilterByMarket
          markets={props.markets}
          handleFilter={props.handleFilter}
        />
      </form>
    </header>
  );
};

export default Header;
