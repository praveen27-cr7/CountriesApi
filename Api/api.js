async function getCountries() {
    let response = await fetch("https://restcountries.com/v3.1/all")
    let countriesData = await response.json()
    return countriesData
}



   




async function displayCountries() {
    let countries = await getCountries()
     console.log(countries);
     

    let countriesTable = document.getElementById('countries-table-body') 

    
    
    
    
   
   for (const country of countries) {
      let row = document.createElement('tr')

      
      

      let serialNo = document.createElement('td')
      serialNo.innerText = country
      row.appendChild(serialNo)

      let nameRow = document.createElement('td')
      nameRow.innerText = country.name.common
      row.appendChild(nameRow)

      let capitalRow = document.createElement('td')
      capitalRow.innerText = country.capital
      row.appendChild(capitalRow)

      let regionRow = document.createElement('td')
      regionRow.innerText = country.region
      row.appendChild(regionRow)
      
      let populationRow = document.createElement('td')
      let millionVal = country.population/100000
      millionVal.toFixed(2)

      populationRow.innerText = `${millionVal}M`
      row.appendChild(populationRow)

     

      let currencyRow = document.createElement('td')
      currencyRow.innerText = country.currencyInfo
      row.appendChild(currencyRow)

      let flagrow = document.createElement('td')
      let flagImg = document.createElement('img')
      flagImg.src = country.flags.png
      flagrow.appendChild(flagImg)
      row.appendChild(flagrow)

      let detailsRow = document.createElement('td')
      let showbtn = document.createElement('button')
    
      

      showbtn.innerText = 'Show Details'
      
      detailsRow.appendChild(showbtn)

      
    
       row.appendChild(detailsRow)

       countriesTable.appendChild(row)
      
   }
        
    };
    displayCountries()

console.log(displayCountries())