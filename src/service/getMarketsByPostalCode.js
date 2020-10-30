async function getMarketsByPostalCode (token, postalCode)  {
  
 const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
 return await fetch(`https://api.comprea.com/v7/user/postalcode?token=${token}&postalcode=${postalCode}`, requestOptions)
    .then(response => response.json())
    .then(result => { 
if (result !== undefined) {
  return  result.services[1].markets.map((market) =>  {

    return {
      id: market.id,
      name: market.name,
      shortcut: market.shortcut,
      icon: market.icon,
      color: market.color,
    };

}
);
}
      })
     .catch(error => console.log('error', error));
}
  export default getMarketsByPostalCode;
  