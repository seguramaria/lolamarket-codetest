import React, { useState, useEffect } from 'react';
// import React from "react";
import '../stylesheets/app.scss';
import Header from "./Header";
import Categories from "./Categories";
import Subcategories from "./Subcategories";
import Token from "../data/token.json";
import PostalCodeData from "../data/postalcode.json";
import CategoriesData from "../data/categories.json";
import Items1 from "../data/items_set_1.json";
import Items2 from "../data/items_set_2.json";

function App() {

 // ESTADOS
 const [token, setToken] = useState(Token);
const [data, setData] = useState(PostalCodeData);
const [categories, setCategories] = useState(CategoriesData);
const [products, setProducts] = useState(Items1);
const [products2, setProducts2] = useState(Items2);

console.log(token);
console.log(data);
console.log(categories);
console.log(products);
console.log(products2);


 //MONTAJE
//  useEffect(() => {
//    getPostalCodeFromApi().then((postalCode) => {
//     console.log(postalCode);
//     //  setCompany(company);
//    });
//  }, []);


  return (
    <div className="App">
      <nav className="categories">
        <Header/>
        <Categories/>
        <Subcategories/>
      </nav>
    </div>
  );
}

export default App;
