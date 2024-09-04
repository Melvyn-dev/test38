###### Énoncé async/await ######

Réécrire ce code en utilisant async/await au lieu d'un seul simple .then/catch:

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    });
}

loadJson('../data/search-user.json')
  .catch(alert); // Error: 404