import "whatwg-fetch";

export const FIRMES = (pageSize, numPage) => {
  fetch(
    "https://contracts-mx.herokuapp.com/blacklist/" + pageSize + "/" + numPage,
    {
      method: "POST",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }
  )
    .then(response => {
      return response.json;
    })
    .then(data => {
      return data;
    })
    .catch(e => {
      alert("Error");
    });
};
