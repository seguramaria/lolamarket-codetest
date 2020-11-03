import React from 'react';
import IconPen from '../../../images/pen.svg';

const FilterByPostalCode = (props) => {
  //Lifting de la info de los inputs
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: 'postalCode',
    });
  };

  return (
    <>
      <input
        style={{
          backgroundColor:
            props.filteredMarketById && props.filteredMarketById.color
              ? `rgb(${props.filteredMarketById.color})`
              : 'rgb(0, 50, 120)',
        }}
        className="categories__header__text--cp"
        placeholder={`Comprando en ${props.postalCode}`}
        type="number"
        name="name"
        id="name"
        value={props.postalCode}
        onChange={handleChange}
        min="8000"
        max="99999"
      />
      <img
        className="categories__header__text--pencil"
        src={IconPen}
        alt="Icono editar"
      ></img>
    </>
  );
};

export default FilterByPostalCode;
