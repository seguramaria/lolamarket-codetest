
import React from 'react';
import logoLolaMarket from '../../images/logo_lolamarket.svg';
import { Link } from 'react-router-dom';

const NoPostalCode = (props) => {
console.log(props);
  return (
    <section className="no-character">
      <p>hola mundo</p>
      <img src={logoLolaMarket} alt="Logo Lola Market"></img>
      <Link to="/" className="subcategory">
      <button> vuelve a la home</button>
      </Link>
    </section>
  );
};

export default NoPostalCode;
