import React, { useState, useEffect } from 'react';
// import React from "react";
import '../stylesheets/app.scss';
import Header from "./Header";
import Categories from "./Categories";
import Subcategories from "./Subcategories";
// import Token from "../data/token.json";
// import PostalCodeData from "../data/postalcode.json";
// import CategoriesData from "../data/categories.json";
// import Items1 from "../data/items_set_1.json";
// import Items2 from "../data/items_set_2.json";
import getDataFromApi from '../service/getDataFromApi';
import getMarketsByPostalCode from '../service/getMarketsByPostalCode';
import getMarketCategories from "../service/getMarketCategories"

function App() {

 // ESTADOS
const [token, setToken] = useState("");
const [postalCode, setPostalCode] = useState(28010);
const [companyId, setCompanyId] = useState(1);
const [categories, setCategories] = useState([]);

// const [products, setProducts] = useState(Items1);
// const [products2, setProducts2] = useState(Items2);

 //MONTAJE
 useEffect(() => {
  getDataFromApi().then((data) => {
  setToken(data.token);
   });
 
  }, []);
  
  if (token !== "") {
    getMarketsByPostalCode(token, postalCode).then((data) => {
      
    let markets = data.services[1].markets;
     console.log(markets)
      for (let index = 0; index < markets.length; index++) {
        let market = markets[index];
        console.log(market)
        return {
          id: market.id,
          name: market.name
        };
        // console.log(market)
      }
  
    // setCompanyId(market.id)
    });

 

    getMarketCategories (token, companyId).then((data) => {
      // console.log(data);
    });
   
  }
  
  



  return (
    <div className="App">
      <nav className="categories">
        <Header postalCode={postalCode}/>
        <Categories categories={categories}/>
        <Subcategories Subcategories={categories.categories}/>
      </nav>
    </div>
  );
}

export default App;
