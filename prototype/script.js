let container = document.getElementById("cardContainer");
let continentSelect = document.querySelector(".my-select");
let countriesData = [];

// Fetch 
fetch("https://countries-api-hsak.onrender.com/api/countries")
  .then(response => response.json())
  .then(data => {
    countriesData = data;
    displayCountries(data);
  })
// Function to display countries
function displayCountries(countries) {
  container.innerHTML = '';
  
  countries.forEach(country => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h2>${country.name}</h2>
      <p><strong>Capital:</strong> ${country.capital}</p>
      <p><strong>Language:</strong> ${country.language}</p>
      <p><strong>Continent:</strong> ${country.continent}</p>
      <img class="flag-img" src="${country.flag}"flag">
    `;
    container.appendChild(card);
  });
}
//filter the countiries 
continentSelect.addEventListener('change', function() {
  const selectedContinent = this.value;
  
  if (selectedContinent === "continent") {
    displayCountries(countriesData);
  } else {
  const filteredCountries = countriesData.filter(country => 
      country.continent === selectedContinent
    );
    displayCountries(filteredCountries);
  }
});
