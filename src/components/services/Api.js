const getDataFromApi = () => {
  return fetch("./api-pokemon.json").then(response => response.json());
};

export default getDataFromApi;
