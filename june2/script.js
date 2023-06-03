// get all the references
let form = document.querySelector('.breweryform');
let wordInput = document.querySelector('.wordinput');
let searchButton = document.querySelector('.searchButton');
// get the data from open brewery API
const api_url = "https://api.openbrewerydb.org/v1/breweries";
async function getData(url) {
    try {
        let response = await fetch(url);
        // parse the json to js object
        let data = await response.json();
        for (element of data) {
            if (element.brewery_type == wordInput.value) {

                console.log(element.name, element.brewery_type, element.phone, element.address_1, element.website_url);
            }
        };
        displayData(data);
    } catch (error) {
        console.error('error fetching the meaning of the word');
    }
}
function handleSubmit(event) {
    event.preventDefault();
    getData(api_url);
}
// Display the fetched data in table format
function displayData(data) {
    let tab =
        `<tr>
          <th>Name</th>
          <th>Brewery_type</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Website_url</th>
          </tr>`;
    // Loop to access all rows
    for (let r of data) {
        if (r.brewery_type == wordInput.value) {
            tab += `<tr>
            <td>${r.name} </td>
            <td>${r.brewery_type}</td>
            <td>${r.phone}</td>
            <td>${r.address_1}</td>    
            <td>${r.website_url}</td>     
            </tr>`;
        }
    }
    // Setting innerHTML as tab variable
    document.getElementById("Breweries").innerHTML = tab;
}
form.addEventListener('submit', handleSubmit);
searchButton.addEventListener('click', handleSubmit);