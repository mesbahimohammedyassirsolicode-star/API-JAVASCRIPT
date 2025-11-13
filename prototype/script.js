const container = document.getElementById("cardContainer");
fetch("https://countries-api-hsak.onrender.com/api/countries")
  .then(response => response.json())
  .then(data => {
    data.forEach(p => {
        let card =document.createElement("div")
        card.classList.add("card");
        card.innerHTML = `
        <h2>${p.name}</h2>
        <p><strong>Capital:</strong> ${p.capital}</p>
        <p><strong>language:</strong> ${p.language}</p>
        <img class="flag-img" src = "${p.flag}")></img>
        `;
        container.appendChild(card);
    });
  });
  