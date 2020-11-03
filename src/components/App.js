import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/app.scss';
import Header from './Header/Header';
import CategoriesList from './Categories/CategoriesList';
import getToken from '../service/getToken';
import getMarketsByPostalCode from '../service/getMarketsByPostalCode';
import getMarketCategories from '../service/getMarketCategories';
import getItems from '../service/getItems';
import ProductSection from './Categories/Products/ProductSection';

function App() {
  // ESTADOS
  const [token, setToken] = useState('');
  const [postalCode, setPostalCode] = useState(28039);

  const [markets, setMarkets] = useState([]);
  const [companyId, setCompanyId] = useState(50);

  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(406);
  const [products, setProducts] = useState([]);

  const [collapsible, setCollapsible] = useState('');

  //MONTAJE
  useEffect(() => {
    if (token) {
      getMarketsByPostalCode(token, postalCode).then((markets) => {
        if (markets) {
          setMarkets(markets);
          getMarketCategories(token, companyId).then((data) => {
            setCategories(data);
          });
          getItems(token, companyId, categoryId).then((data) => {
            setProducts(data);
          });
        } else {
          alert(
            'El código postal que has introducido es erróneo o aún no disponemos de servicio en él. '
          );
        }
      });
    } else {
      getToken().then((data) => {
        setToken(data);
      });
    }
  }, [token, postalCode, companyId, categoryId]);

  // EVENT HANDLERS: Manejadores que pasaremos luego hacia abajo

  //Condicional que indica el filtro que va a actualizar su estado
  const handleFilter = (data) => {
    if (data.key === 'postalCode') {
      setPostalCode(data.value);
    } else if (data.key === 'market') {
      setCompanyId(parseInt(data.value));
    }
  };

  //Collapsible
  const handleCollapse = (targetId) => {
    if (targetId !== collapsible) {
      setCollapsible(targetId);
    } else {
      setCollapsible('');
    }
  };

  //Obtenemos el category_id para poder actualizar el listado de productos que corresponde a dicha categoría.
  const handleCategories = (targetId) => {
    if (targetId !== categoryId) {
      setCategoryId(parseInt(targetId));
    } else {
      setCategoryId('');
    }
  };

  // FILTRADO DE TIENDAS
  const filteredMarketById = markets.find((market) => market.id === companyId);

  //Render de la sección de productos
  const renderSection = (props) => {
    const routeSectionId = props.match.params.category.shortcut;
    const category = categories.find(
      (category) => category.categories.shortcut === routeSectionId
    );

    if (category) {
      return <ProductSection products={products} />;
    }
  };

  return (
    <div className="App">
      <Route exact path="/">
        <nav className="categories">
          <Header
            postalCode={postalCode}
            markets={markets}
            filteredMarketById={filteredMarketById}
            handleFilter={handleFilter}
          />

          <CategoriesList
            categories={categories}
            collapsible={collapsible}
            handleCollapse={handleCollapse}
            filteredMarketById={filteredMarketById}
            handleCategories={handleCategories}
          />
        </nav>
      </Route>
      <Switch>
        <Route
          path="/tienda/:shortcut/:category/:shortcut"
          render={renderSection}
        />
      </Switch>
    </div>
  );
}

export default App;
