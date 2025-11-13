// script.js
fetch('https://countries-api-hsak.onrender.com/api/continent/Europe')
  .then(response => response.json())
  .then(data => {
    console.log("Données reçues :", data);
  })
  .catch(error => {
    console.error("Erreur lors de la récupération :", error);
  });
