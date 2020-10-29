const getDataFromApi = () => {
  var myHeaders = new Headers();
  myHeaders.append("Cookie", "device_view=full");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  return fetch("https://api.comprea.com/v7/user/session", requestOptions)
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log('error', error));
  };

  export default getDataFromApi;
  