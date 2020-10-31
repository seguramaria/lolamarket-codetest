import React, { useState, useEffect } from 'react';
import '../stylesheets/app.scss';
import Header from "./Header";
import CategoriesList from "./CategoriesList";
import SubcategoriesList from "./SubcategoriesList";
import getToken from '../service/getToken';
import getMarketsByPostalCode from '../service/getMarketsByPostalCode';
import getMarketCategories from "../service/getMarketCategories";
// import getItems from "../service/getItems"

function App() {

 // ESTADOS
const [token, setToken] = useState("");

const [postalCode, setPostalCode] = useState(28039);
// const [postalCodeFilter, setPostalCodeFilter] = useState(28039);


const [companyId, setCompanyId] = useState(1);

const [markets, setMarkets] = useState([]);
const [marketFilter, setMarketFilter] = useState('all');

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


 // EVENT HANDLERS: Manejadores que pasaremos luego hacia abajo

  //Condicional que indica el filtro que va a actualizar su estado
  const handleFilter = (data) => {
    if (data.key === 'postalCode') {
      setPostalCode(data.value);
    } else if (data.key !== "") {
      setCompanyId(data.value);
    }
  };

  console.log(companyId);

  // //Filtrado de personajes
  // const filteredCategories = characters
  //   .filter((character) => {
  //     return character.name.toUpperCase().includes(nameFilter.toUpperCase());
  //   })
  //   .filter((character) => {
  //     if (speciesFilter === 'all') {
  //       return true;
  //     } else {
  //       return character.species === speciesFilter;
  //     }
  //   });


  return (
    <div className="App">
      <nav className="categories">
        <Header postalCode={postalCode} markets={markets}  handleFilter={handleFilter}
            companyId={companyId}/>
        <CategoriesList categories={categories} marketFilter={marketFilter}/>
        <SubcategoriesList subcategories={categories}/>
      </nav>
    </div>
  );
}




export default App;
