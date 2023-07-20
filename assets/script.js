let displayBox = document.getElementById('displayBox');
let date = dayjs().format('MMMM D, YYYY');
let cityInput = document.getElementById('input');
let button = document.getElementById('button-addon1')
let prior = document.getElementById('prior')
let cityInputLocation = cityInput.value
let town = document.querySelector(".town");

function todaysWeather() {
    cityInputLocation =cityInput.value.trim(); /* added */
    fetchUrl = "https://api.openweathermap.org/data/2.5/weather?q="+cityInputLocation+"&APPID=093ae3ae21bb27eb5d4488dfe5718811&units=imperial" /* added */

    fetch (fetchUrl)

.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

let cityEl = document.createElement('h2')
let temperature = document.createElement('p')
let wind = document.createElement('p')
let humidity = document.createElement('p')
let img = document.createElement ('img')

cityEl.textContent = data.name +"  " +date;
temperature.textContent = " Temperature: " + data.main.temp + " ºF";
wind.textContent = "Wind Speed: " + data.wind.speed + " MPH";
humidity.textContent = "Humidity: " + data.main.humidity + " %";
imgSrc = data.weather[0].icon
iconUrl = "http://openweathermap.org/img/w/"+imgSrc + ".png";
img.src = iconUrl

displayBox.append(cityEl)
displayBox.append(img)
displayBox.append(temperature)
displayBox.append(wind)
displayBox.append(humidity)
  });
}

function fiveDayForecast() {
  cityInputLocation =cityInput.value.trim(); /* added */
  fetchUrl = "https://api.openweathermap.org/data/2.5/forecast?q="+cityInputLocation+"&APPID=093ae3ae21bb27eb5d4488dfe5718811&units=imperial" /* added */ 
  
  fetch (fetchUrl)
    
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        for (i=0; i < data.list.length; i++) {
            if (data.list[i].dt_txt.substring(11,13) == "03"){
                console.log(data.list[i])
       

        let cardSection = document.createElement('section')
        cardSection.className = "col-1 card card-body"

        let fiveDayDate = document.createElement('h5')
        let temperature = document.createElement('p')
        let wind = document.createElement('p')
        let humidity = document.createElement('p')
        let img = document.createElement ('img')
      
        fiveDayDate.textContent = data.list[i].dt_txt.substring(0,10);
        temperature.textContent = " Temp " + data.list[i].main.temp + " ºF";
        wind.textContent = "Wind " + data.list[i].wind.speed + " MPH";
        humidity.textContent = "Humidity " + data.list[i].main.humidity + " %";
        imgSrc = data.list[i].weather[0].icon
        iconUrl = "http://openweathermap.org/img/w/"+imgSrc + ".png";
        img.src = iconUrl
        
        cardSection.appendChild(fiveDayDate)
        cardSection.appendChild(img)
        cardSection.appendChild(temperature)
        cardSection.appendChild(wind)
        cardSection.appendChild(humidity)

        prior.appendChild(cardSection)

            }
        } 
      })
    }

button.addEventListener("click", function() {
  displayBox.textContent = "";
  prior.textContent = "";
  // saveSearch()
   todaysWeather()
   fiveDayForecast()
   saveSearch()
});

function saveSearch() {
let searchLocation = JSON.parse(localStorage.getItem("cityInputLocation")) || [];
let place = document.getElementById('input').value;

searchLocation.push(place);

localStorage.setItem("cityInputLocation", JSON.stringify(searchLocation))

const searchButton = document.createElement("button");
town.appendChild(searchButton)
searchButton.textContent = place;

searchButton.addEventListener("click", function() {
  cityInputLocation = searchButton.value

  displayBox.textContent = "";
  prior.textContent = "";
   todaysWeather()
   fiveDayForecast()
})



}




