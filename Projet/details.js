let countryid=sessionStorage.getItem("countryID");
let container = document.getElementById("cardContainer");

fetch("https://countries-api-hsak.onrender.com/api/countries/"+countryid)
.then(Response=>Response.json())
.then(country=>{
    let card = document.createElement("div");
    card.classList.add("cardnew");
    card.innerHTML = `
      <h2>${country.name}</h2>
      <p><strong>Capital:</strong> ${country.capital}</p>
      <p><strong>Language:</strong> ${country.language}</p>
      <p><strong>Continent:</strong> ${country.continent}</p>
      <img class="flag-img" src="${country.flag}"flag">
      <p><strong>Population:</strong>${country.population}</p>
      <p><strong>Superficie:</strong>${country.area}km²</p>
      <p><strong>Currency:</strong>${country.currency}</p>
      <p><strong>Timezone:</strong>${country.timezone}</p>
    `;
    container.appendChild(card);
})