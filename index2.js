function worldCountry() {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(data => data.json())
        .then(info => countryInfo(info))
}
worldCountry();
const countryDiv = document.getElementById('countries');
const countryInfo = info => {
    info.forEach(country => {
        const createDiv = document.createElement('div');
        createDiv.classList.add('styleCountry');
        createDiv.innerHTML =
            `<h3>${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick ="loadCountry('${country.name}')">Details</button>`;

        // const h3 = document.createElement('h3');
        // h3.innerText = country.name;
        // createDiv.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // createDiv.appendChild(p);
        countryDiv.appendChild(createDiv);
    })

}
const loadCountry = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(data => data.json())
        .then(info => countryDetail(info[0]));
}
const countryDetail = country => {
    const div = document.getElementById('country-detail');
    div.innerHTML = `<h4>Name:${country.name}</h4>
  <p>Population:${country.population}</p>
  <img width="200px" src ="${country.flag}">`
}