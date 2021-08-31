const countriesEl = document.getElementById("countries");
const toggleBtn = document.getElementById("toggle");
const filter = document.getElementById("filter");
const regionFilter = filter.querySelectorAll("li")
const search = document.getElementById("input");

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
            <h2 class="country-name">${country.name}</h2>
            <p>
                 <strong>Population:</strong>
                 ${country.population}
            </p>
            <p class="country-region"><strong>
                Region:
            </strong >
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


search.addEventListener("input", e =>  {
   const {value}= e.target;

   const countryName = document.querySelectorAll(".country-name");
   countryName?.forEach(name =>{ 
        console.log(name.innerText)
       if (name.innerText.toLowerCase().includes(value.toLowerCase())){
            name.parentElement.parentElement.style.display ="block";
       }else{
        name.parentElement.parentElement.style.display="none"
       }
     
   })
})
regionFilter?.forEach(filter => {
    filter.addEventListener("click", ()=> {
        const countryRegion = document.querySelectorAll(".country-region");
   countryRegion?.forEach(region=>{ 
        console.log(region.innerText)
       if (region.innerText.toLowerCase().includes(filter.innerText.toLowerCase())){
            region.parentElement.parentElement.style.display ="block";
       }else{
        region.parentElement.parentElement.style.display="none"
       }
     
   })
    });
});