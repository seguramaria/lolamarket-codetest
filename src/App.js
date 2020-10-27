import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="categories">
        <header className="categories__header">
          <img className="categories__header__logo" src={logo} alt="Logo de la tienda"></img>
          <div className="categories__header__text">
            <h2 className="categories__header__text--name">
              Tienda
            </h2>
            <p className="categories__header__text--cp">
              Código postal
            </p>
          </div>
          <button className="categories__header__btn"></button>
        </header>
        <ul className="categories__list">
          <li className="categories__list__item"> 
          <img className="categories__list__item--icon" src={logo} alt="Icono de la categoría" ></img>
          <h3 className="categories__list__item--title">Nombre categoría</h3>
          <img className="categories__list__item--arrow" src={logo} alt="Flecha" ></img>
          </li>
        </ul>
        <ul className="categories__sublist">
          <li className="categories__sublist__item"> 
          {/* <img className="categories__sublist__item--icon"></img> */}
          <h3 className="categories__sublist__item--title">Nombre categoría</h3>
          <img className="categories__sublist__item--check" src={logo} alt="Categoría seleccionada"></img>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
