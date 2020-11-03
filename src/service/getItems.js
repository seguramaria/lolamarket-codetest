const getItems = (token, companyId, categoryId) => {

const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch(`https://api.comprea.com/v7/company/items?token=${token}&company_id=${companyId}&category_id=${categoryId}`, requestOptions)
  .then(response => response.text())
  .then(result => {
    if (result !== undefined) {
      return result.items.map((item) => item)
    }     else {
      return console.log('error')
    }    
  } 
  )
  .catch(error => console.log('error', error));
}
  export default getItems;