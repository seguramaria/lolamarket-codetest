import React from 'react';
import checked from '../../images/ic_checked.svg';
import { Link } from 'react-router-dom';

const Subcategory = (props) => {
  const selectCategory = (evt) => props.handleCategories(evt.currentTarget.id);

  return (
    <Link
      to={`/tienda/${props.filteredMarketById.shortcut}/${props.category}/${props.shortcut}`}
      id={props.id}
      className="subcategory"
    >
      <li
        className="categories__sublist__item"
        name="category"
        id={props.id}
        onClick={selectCategory}
      >
        <div className="categories__sublist__item__container">
          <p className="categories__sublist__item__container--title">
            {props.name}
          </p>
          <img
            className={`categories__sublist__item__container--check ${
              parseInt(props.categoryId) === props.id ? '' : 'hidden'
            }`}
            id={props.id}
            src={checked}
            alt="Categoría seleccionada"
          ></img>
        </div>
      </li>
    </Link>
  );
};

export default Subcategory;
