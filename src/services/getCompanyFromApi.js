const getCompanyFromApi = () => {
    return fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => {
        //Filtramos el objeto para conseguir las categorías y los datos de las subcategorías de cada catergoría.
        return data.categories.map((category) => {
          return {
            id: category.id,
            name: category.name,
            shortcut: category.shortcut,
            icon: category.icon,
            subcategoriesId: category.categories.id,
            subcategoriesName: category.categories.name,
            subcategoriesShortcut: category.categories.shortcut,
            subcategoriesIcon: category.categories.icon
          };
        }); //Retornamos los datos con los que vamos a trabajar. 
      });
  };
  export default getCompanyFromApi;
  