import React, { useState } from 'react';
import logo from '../images/ic_circled_super.png';
import checked from "../images/ic_checked.svg";
import show from "../images/ic_show.svg";
import hide from "../images/ic_hide.svg";
import logoCategory from "../images/ic_category_000.png";
import listCategories from '../data/categories.json';
import '../stylesheets/app.scss';
import Header from "./Header";
import Categories from "./Categories"
import Subcategories from "./Subcategories"
function App() {

  const [categories, setCategories] = useState(listCategories);

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
