const getItemsFromApi = () => {
    return fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((products) => {
        //Filtramos el objeto para conseguir las categorías y los datos de las subcategorías de cada catergoría.
        return products.items.map((item) => {
          return {
            id: item.uuid,
            name: item.name,
            shortcut: item.shortcut,
            picture: item.pictures,
            
          };
        }); //Retornamos los datos con los que vamos a trabajar. 
      });
  };
  export default getItemsFromApi;