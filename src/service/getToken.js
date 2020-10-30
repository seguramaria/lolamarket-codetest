async function getToken () {
 
  const requestOptions = {
    method: 'GET',
  };
  
  return fetch("https://api.comprea.com/v7/user/session", requestOptions)
    .then(response => response.json())
    .then(result => result.token)
    .catch(error => console.log('error', error));
  };

  export default getToken;
  
