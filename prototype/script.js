let container=document.getElementById("main");
fetch("https://countries-api-hsak.onrender.com/api/countries")
  .then(response => response.json())
  .then(data => {
    data.forEach(p => {
        let card =document.createElement("div")
        card.innerHTML =
        
    });
  }