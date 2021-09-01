const countriesEl = document.getElementById("countries");
const toggleBtn = document.getElementById("toggle");
const filter = document.getElementById("filter");
const regionFilter = filter.querySelectorAll("li")
const search = document.getElementById("input");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("btn-close");


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
        countryEl.addEventListener("click", ()=>{
            modal.style.display="flex";
            showCountryDetails(country);
        })
        countriesEl.appendChild(countryEl);
    })
    
}


 
function showCountryDetails(country) {
  const modalBody=modal.querySelector(".modal-body");
  const modalImg= modal.querySelector("img")
  
  modalImg.src= country.flag
  
  modalBody.innerHTML= `
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
          <p class="country-region"><strong>
          Subregion:
          </strong >
        ${country.subregion}
        </p>
        <p>
            <strong>Capital:</strong>
            ${country.capital}
        </p>
        <p>
        <strong>Top Level Domain:</strong>
        ${country.topLevelDomain[0]}
    </p>
    <p>
    <strong>Currency</strong>
    ${country.currencies?.map(currency=>currency.code)}
</p>
<p>
<strong>Language</strong>
${country.languages?.map(language=> language.name)}
</p>
    `
}
toggleBtn.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
})


closeBtn.addEventListener("click", ()=>{
    modal.style.display = "none";
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