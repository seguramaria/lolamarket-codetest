const getItems = (token, companyId, category) => {

const requestOptions = {
  method: 'GET',

  redirect: 'follow'
};

fetch(`https://api.comprea.com/v7/company/items?token=${token}&company_id=${companyId}&category_id=${category}`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}
  export default getItems;