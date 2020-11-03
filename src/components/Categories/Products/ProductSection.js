import React from 'react';
import logoLolaMarket from '../../../images/logo_lolamarket.svg';
import { Link } from 'react-router-dom';
import arrow from '../../../images/down-arrow.svg';
import Products from './Products';

const CategorySection = (props) => {
  const productsList = props.products.map((product) => {
    return (
      <Products
        key={product.id}
        id={product.id}
        name={product.name}
        picture={product.picture}
        price={product.price}
      />
    );
  });

  return (
    <>
      <section className="section-products">
        <header className="section-products__header">
          <img
            className="section-products__header--logo"
            src={logoLolaMarket}
            alt="Logo Lola Market"
          ></img>

          <Link to="/" className="subcategory">
            <button className="section-products__header--btn">
              {' '}
              Categorías
              <img
                src={arrow}
                alt="Icono flecha"
                className="section-products__header--btn--arrow"
              ></img>
            </button>
          </Link>
        </header>
        <main className="section-products__main">
          <p className="section-products__main--title">Productos</p>
          <ul className="section-products__main__list">{productsList}</ul>
        </main>
      </section>
    </>
  );
};

export default CategorySection;
