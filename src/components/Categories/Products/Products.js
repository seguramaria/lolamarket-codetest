import React from 'react';
import Logo from '../../../images/logo_lolamarket.svg';

const Products = (props) => {
  return (
    <li className="section-products__main__list--item">
      <img
        className="section-products__main__list--item--img"
        src={props.picture ? props.picture : Logo}
        alt={props.name}
      ></img>
      <h3 className="section-products__main__list--item--name">{props.name}</h3>
      <p className="section-products__main__list--item--price">
        {props.price}€
      </p>
    </li>
  );
};

export default Products;
