
import React from 'react';
import '../stylesheets/app.scss';
import logoLolaMarket from '../images/logo_lolamarket.svg';

const NoPostalCode = (props) => {
  return (
    <section className="no-character">
      <p>No disponemos de servicio en el código postal "{props.nameFilter}". </p>
      <img src={logoLolaMarket} alt="Logo Lola Market"></img>
    </section>
  );
};

export default NoPostalCode;
