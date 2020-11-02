import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom"
import '../stylesheets/app.scss';
import Header from "./Header";
import CategoriesList from "./Categories/CategoriesList";
import getToken from '../service/getToken';
import getMarketsByPostalCode from '../service/getMarketsByPostalCode';
import getMarketCategories from "../service/getMarketCategories";
import CategorySection from "./Filters/CategorySection"
import Subcategory from './Categories/Subcategory';

// import getItems from "../service/getItems"

function App() {

 // ESTADOS
const [token, setToken] = useState("");
const [postalCode, setPostalCode] = useState(28039);
const [companyId, setCompanyId] = useState(50);
const [markets, setMarkets] = useState([]);
const [categories, setCategories] = useState([]);
const [collapsible, setCollapsible] = useState('');
//  const [products, setProducts] = useState([]);


//MONTAJE
 useEffect(() => {
    if (token) {
     getMarketsByPostalCode(token, postalCode).then((markets) => {
      if (markets) {
        setMarkets(markets)
        getMarketCategories(token, companyId).then((data) => {
          setCategories(data); 
                  })
      } else {
       alert("Código postal erroneo")
      }
     
    //  getItems(token, companyId, category).then((data) => {
    //   setProducts(data);
        // })
     
   }) } else {
     getToken().then((data) => {
       setToken(data);
     })
   }
  }, [token, postalCode, companyId]);




 // EVENT HANDLERS: Manejadores que pasaremos luego hacia abajo

  //Condicional que indica el filtro que va a actualizar su estado
  const handleFilter = (data) => {
    if (data.key === 'postalCode') {
      setPostalCode(data.value);
    } else if (data.key !== "") {
      setCompanyId(parseInt(data.value));
    } 
   };

  const handleCollapse = (targetId) => {
    if (targetId !== collapsible) {
      setCollapsible(targetId);
    } else {
      setCollapsible('');
    
    }
  };


  // FILTRADO DE TIENDAS
const filteredMarketsById = markets.find(market => market.id === companyId);



  //Renderizamos
  const renderSection = (props) => {
  
    const routeSectionId = props.match.params.id;
    // Buscamos el id
    const subcategory = categories.map(
      (category) => category.categories
    
    );
  
   if (subcategory.id === routeSectionId
    ) {
      return <CategorySection subcategories={subcategory}/>    
    }
 

    if (subcategory ) {
      return (
        <CategorySection subcategories={subcategory }/>      
      );
    } 
  };




return (
      <div className="App">
        <Switch>
        <Route exact path="/">   
        <nav className="categories">

        <Header postalCode={postalCode} markets={markets} 
         filteredMarketsById ={filteredMarketsById} 
          handleFilter={handleFilter}
          companyId={companyId}/>

        <CategoriesList categories={categories}   collapsible={collapsible}
         handleCollapse={handleCollapse}       filteredMarketsById ={filteredMarketsById} />
        </nav>
        </Route>

        <Route path="/tienda/:shortcut/:category/:shortcut" render={renderSection}/>
        </Switch>


      </div>
    );  
}




export default App;
