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
  const selectedCount = Number(this.value)
  
  if (searchcount > selectedCount) {
    displayCountries(countcountry);
  } else {
  const filteredCountCountries = countcountry.filter(country => 
      country.population >= searchcount
    );
    displayCountries(filteredCountCountries);
  }
});

