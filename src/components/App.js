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
import getToken from '../service/getToken';
import getMarketsByPostalCode from '../service/getMarketsByPostalCode';
import getMarketCategories from "../service/getMarketCategories";
// import getItems from "../service/getItems"

function App() {

 // ESTADOS
const [token, setToken] = useState("");
const [postalCode, setPostalCode] = useState(28039);
const [companyId, setCompanyId] = useState(1);
const [markets, setMarkets] = useState([]);
const [categories, setCategories] = useState([]);
const [subcategories, setSubcategories] = useState([]);
// const [products, setProducts] = useState([]);


//MONTAJE
 useEffect(() => {
  if (token) {
     getMarketsByPostalCode(token, postalCode).then((markets) => {
       setMarkets(markets)
     })
     getMarketCategories(token, companyId).then((data) => {
      setCategories(data);
     console.log(data) 
    })
    //  getItems(token, companyId, category).then((data) => {
    //   setProducts(data);
    
    // })
 
   } else {
     getToken().then((data) => {
       setToken(data);
     })
   }
  }, [token, postalCode, companyId]);



 


  return (
    <div className="App">
      <nav className="categories">
        <Header postalCode={postalCode} markets={markets}/>
        <Categories categories={categories}/>
        <Subcategories Subcategories={Subcategories}/>
      </nav>
    </div>
  );
}




export default App;
