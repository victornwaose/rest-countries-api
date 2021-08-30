const countriesEl = document.getElementById("countries")

async function getCountries() {
    const res = await fetch("https://restcountries.eu/rest/v2/all");
     const countries = await res.json();
     console.log(countries);
     displayCountries(countries);
}
getCountries();

function displayCountries(countries) {
    countries?.forEach(country=>{
        const countryEl =  document.createElement("div");
        countryEl.classList.add("card")
        countryEl.innerHTML= `
        <div class="card">
        <div class="card-header">
           <img src=${country.flag} alt="">
        </div>
        <div class="card-body">
            <h2>${country.name}</h2>
            <p>
                 <strong>Population:</strong>
                 ${country.population}
            </p>
            <p><strong>
                Region:
            </strong>
             ${country.region}
           </p>
           <p><strong>Capital:</strong>${country.capital}</p>
        </div>
       </div> 
       </select>
        `;
        countriesEl.appendChild(countryEl);
    })
    
}