import logo from '../images/ic_circled_super.png';
import checked from "../images/ic_checked.svg";
import show from "../images/ic_show.svg";
import hide from "../images/ic_hide.svg";
import logoCategory from "../images/logo.svg";

import '../stylesheets/app.scss';

function App() {
  return (
    <div className="App">
      <nav className="categories">
        <header className="categories__header">
          <img className="categories__header__logo" src={logo} alt="Logo de la tienda"></img>
          <div className="categories__header__text">
            <p className="categories__header__text--name">
             Mercadona
            </p>
            <p className="categories__header__text--cp">
              Comprando en 28005
            </p>
          </div>
          <button className="categories__header__btn">CAMBIAR</button>
        </header>
        <ul className="categories__list">
          <li className="categories__list__item"> 
          <img className="categories__list__item--icon" src={logoCategory} alt="Icono de la categoría" ></img>
          <div className="categories__list__item--category">

         
          <p className="categories__list__item--category--title">Populares</p>
          <img className="categories__list__item--category--arrow hide" src={hide} alt="Flecha" ></img>
          <img className="categories__list__item--arrow hidden" src={show} alt="Flecha" ></img>
          </div>
          </li>
        </ul>
        <ul className="categories__sublist">
          <li className="categories__sublist__item"> 
          {/* <img className="categories__sublist__item--icon"></img> */}
          <div  className="categories__sublist__item__container">
          <p className="categories__sublist__item__container--title">Nombre categoría</p>
          <img className="categories__sublist__item__container--check" src={checked} alt="Categoría seleccionada"></img>
          </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
