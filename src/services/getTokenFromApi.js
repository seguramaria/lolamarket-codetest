const getTokenFromApi = () => {
    return fetch('../data/token.json')
      .then((response) => response.json())
      .then((token) => {
          return {
              token
                } }); 
  };
  export default getTokenFromApi;
  