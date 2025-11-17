let container = document.getElementById("cardContainer");
let continentSelect = document.querySelector(".my-select");
let countriesData = [];

// Fetch and display all countries
fetch("https://countries-api-hsak.onrender.com/api/countries")
  .then(response => response.json())
  .then(data => {
    countriesData = data;
    displayCountries(data);
  })
  .catch(error => {
    console.error('Error fetching countries:', error);
  });

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
      <img class="flag-img" src="${country.flag}" alt="${country.name} flag">
    `;
    container.appendChild(card);
  });
}

// Add event listener to the continent select dropdown
continentSelect.addEventListener('change', function() {
  const selectedContinent = this.value;
  
  if (selectedContinent === "continent") {
    // If "continent" is selected (the hidden option), show all countries
    displayCountries(countriesData);
  } else {
    // Filter countries by selected continent
    const filteredCountries = countriesData.filter(country => 
      country.continent === selectedContinent
    );
    displayCountries(filteredCountries);
  }
});