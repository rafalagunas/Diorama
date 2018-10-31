import "whatwg-fetch";

export const FIRMES = (pageSize, numPage) => {
  return fetch(
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
    .then(function(response) {
      return response.json();
    })
    .then(myJson => {
      if (myJson !== undefined) {
        return myJson;
        //callback(myJson);
        //return myJson.value;
      }
    });
};

export const CONTRACTS = form => {
  return fetch("https://contracts-mx.herokuapp.com/contracts", {
    method: "POST",
    mode: "cors",
    data: form,
    headers: {
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(function(response) {
      return response.json();
    })
    .then(myJson => {
      if (myJson !== undefined) {
        return myJson;
        //callback(myJson);
        //return myJson.value;
      }
    });
};
