const getMarketCategories = (token, companyId) => {
  var myHeaders = new Headers();
  myHeaders.append("Cookie", "device_view=full");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  return fetch(`https://api.comprea.com/v7/company/categories?token=${token}&company_id=${companyId}`, requestOptions)
    .then(response => response.text())
    .then(result => result)
    .catch(error => console.log('error', error));
  };

  export default getMarketCategories;
  