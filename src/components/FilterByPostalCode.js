import React from 'react';
import '../stylesheets/app.scss';

const FilterByPostalCode = (props) => {
  //Lifting de la info de los inputs
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: 'postalCode',
    });
  };

  return (
       <input 
      className="categories__header__text--cp"
        placeholder={`Comprando en ${props.postalCode}`}
         type="number"
        name="name"
        id="name"
        value={props.postalCode}
        onChange={handleChange}
      />
    
  );
};



export default FilterByPostalCode;
