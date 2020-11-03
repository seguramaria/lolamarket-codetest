const getMarketCategories = (token, companyId) => {
 
  
const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  return fetch(`https://api.comprea.com/v7/company/categories?token=${token}&company_id=${companyId}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      if (result !== undefined) {
        return result.categories.map((categories) =>  {
          return {
            id: categories.id,
            name: categories.name,
            shortcut: categories.shortcut,
            icon: categories.icon,
            categories: categories.categories
            };
      }          
      
    );
      }
    })
    .catch(error => console.log('error', error));
  };

  export default getMarketCategories;
  