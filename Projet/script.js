let container = document.getElementById("cardContainer");
let continentSelect = document.querySelector(".my-select");
let countriesData = [];
let countcountry=[];
let searchcount= document.getElementById("searchnub");
// Fetch 
fetch("https://countries-api-hsak.onrender.com/api/countries")
  .then(response => response.json())
  .then(data => {
    countriesData = data;
    countcountry=data;
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
      <p><strong>Population:</strong> ${country.population}</p>
    `;
    container.appendChild(card);
    card.addEventListener("click",function(){
      let id=country.id;
      sessionStorage.setItem("countryID",id)
      window.location.href="country-details.html?"+id;

    });
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
//search for country
function setupSearch() {
    let searchbar = document.getElementById('searchInput');
    searchbar.addEventListener("input", function() {
        let value = this.value.trim().toLowerCase();
        let allCards = document.querySelectorAll(".card");
        
        for (let i = 0; i < allCards.length; i++) {
            let card = allCards[i];
            let title = card.querySelector('h2').textContent.toLowerCase();
            if (title.includes(value)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}
setupSearch();
//function for count all the countries 
searchcount.addEventListener('input', function() {
  const selectedCount = Number(this.value);
  
  if (!selectedCount) {
    displayCountries(countriesData);
    return;
  }
  
  const filteredCountCountries = countriesData.filter(country => 
    country.population >= selectedCount
  );
  
  displayCountries(filteredCountCountries);
});
//calculate the number of countries in each continent
fetch("https://countries-api-hsak.onrender.com/api/countries")
  .then(response => response.json())
  .then(data => {
    countriesData = data;
    countcountry = data;
    displayCountries(data);
    showContinentsCount(); 
  })
function showContinentsCount() {
    let continentCount = {};
    countriesData.forEach(country => {
        let continentName = country.continent;
        if (continentCount[continentName]) {
            continentCount[continentName] += 1; 
        } else {
            continentCount[continentName] = 1; 
        }
    });
    let displayText = "Countries by continent: ";
    for (let continent in continentCount) {
        displayText += `${continent} (${continentCount[continent]}), `;
    }
    displayText = displayText.slice(0, -2);
    let headerDiv = document.getElementById("continentsCount");
    headerDiv.textContent = displayText;
}
 displayCountries(data);
showContinentsCount(); 