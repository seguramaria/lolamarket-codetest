const getPostalCodeFromApi = () => {
    return fetch('../data/postalcode.json')
      .then((response) => response.json())
      .then((postalCode) => {
        //Filtro el objeto para conseguir las propiedades de las tiendas que me interesan
        return postalCode.markets.map((market) => {
          return {
            id: market.id,
            shortcut: market.shortcut,
            name: market.name,
            picture: market.picture,
            icon: market.icon,
           color: market.color
            
          };
        }); //Retorno los datos ya filtrados con los que voy a trabajar. 
      });
  };
  export default getPostalCodeFromApi;
  