const countriesEl = document.getElementById("countries");
const toggleBtn = document.getElementById("toggle")
const filter = document.getElementById("filter")
const search = document.getElementById("input")

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
        <div >
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
toggleBtn.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
})
filter.addEventListener("click", ()=> {
    filter.classList.toggle("open");
});


search.addEventListener("click",(e)=>{
   const val= e.target.value

   console.log(val);
})