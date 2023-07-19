let displayBox = document.getElementById('displayBox');
let fiveDayOne = document.getElementById('fiveDayOne');
let fiveDayTwo = document.getElementById('fiveDayTwo');
let fiveDayThree = document.getElementById('fiveDayThree');
let fiveDayFour = document.getElementById('fiveDayFour');
let fiveDayFive = document.getElementById('fiveDayFive');
let date = dayjs().format('MMMM D, YYYY');
let dateFiveDayOne = dayjs().add (1, 'day').format('M D, YYYY');
let dateFiveDayTwo = dayjs().add (2, 'day').format('M D, YYYY');
let dateFiveDayThree = dayjs().add (3, 'day').format('M D, YYYY');
let dateFiveDayFour = dayjs().add (4, 'day').format('M D, YYYY');
let dateFiveDayFive = dayjs().add (5, 'day').format('M D, YYYY');


function todaysWeather() {
fetch (
    'https://api.openweathermap.org/data/2.5/weather?q=Modesto,CA,USA&APPID=093ae3ae21bb27eb5d4488dfe5718811&units=imperial'
    )


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
displayBox.append(temperature)
displayBox.append(wind)
displayBox.append(humidity)
displayBox.append(img)

  });
}


function fiveDayForecast() {
    fetch (
        'https://api.openweathermap.org/data/2.5/forecast?q=Modesto,CA,USA&APPID=093ae3ae21bb27eb5d4488dfe5718811&units=imperial'
        )
    
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        let fiveDayDate = document.createElement('h5')
        let temperature = document.createElement('p')
        let wind = document.createElement('p')
        let humidity = document.createElement('p')
        let img = document.createElement ('img')
        
        fiveDayDate.textContent = dateFiveDayOne
        temperature.textContent = " Temp " + data.list[0].main.temp + " ºF";
        wind.textContent = "Wind Speed " + data.list[0].wind.speed + " MPH";
        humidity.textContent = "Humidity " + data.list[0].main.humidity + " %";
        imgSrc = data.list[0].weather[0].icon
        iconUrl = "http://openweathermap.org/img/w/"+imgSrc + ".png";
        img.src = iconUrl
        
        fiveDayOne.append(fiveDayDate)
        fiveDayOne.append(temperature)
        fiveDayOne.append(wind)
        fiveDayOne.append(humidity)
        fiveDayOne.append(img)
      

        let fiveDayDateTwo = document.createElement('h5')
        let temperatureTwo = document.createElement('p')
        let windTwo = document.createElement('p')
        let humidityTwo = document.createElement('p')
        let imgTwo = document.createElement('img')

        fiveDayDateTwo.textContent = dateFiveDayTwo
        temperatureTwo.textContent = " Temp " + data.list[6].main.temp + " ºF";
        windTwo.textContent = "Wind Speed " + data.list[6].wind.speed + " MPH";
        humidityTwo.textContent = "Humidity " + data.list[6].main.humidity + " %";
        imgSrcTwo = data.list[6].weather[0].icon
        iconUrlTwo = "http://openweathermap.org/img/w/"+imgSrcTwo + ".png";
        imgTwo.src = iconUrlTwo
        
        fiveDayTwo.append(fiveDayDateTwo)
        fiveDayTwo.append(temperatureTwo)
        fiveDayTwo.append(windTwo)
        fiveDayTwo.append(humidityTwo)
        fiveDayTwo.append(imgTwo)
       

        let fiveDayDateThree = document.createElement('h5')
        let temperatureThree = document.createElement('p')
        let windThree = document.createElement('p')
        let humidityThree = document.createElement('p')
        let imgThree = document.createElement('img')

        fiveDayDateThree.textContent = dateFiveDayThree
        temperatureThree.textContent = " Temp " + data.list[14].main.temp + " ºF";
        windThree.textContent = "Wind Speed " + data.list[14].wind.speed + " MPH";
        humidityThree.textContent = "Humidity " + data.list[14].main.humidity + " %";
        imgSrcThree = data.list[14].weather[0].icon
        iconUrlThree = "http://openweathermap.org/img/w/"+imgSrcThree + ".png";
        imgThree.src = iconUrlThree
        
        fiveDayThree.append(fiveDayDateThree)
        fiveDayThree.append(temperatureThree)
        fiveDayThree.append(windThree)
        fiveDayThree.append(humidityThree)
        fiveDayThree.append(imgThree)

        let fiveDayDateFour = document.createElement('h5')
        let temperatureFour = document.createElement('p')
        let windFour = document.createElement('p')
        let humidityFour = document.createElement('p')
        let imgFour = document.createElement('img')

        fiveDayDateFour.textContent = dateFiveDayFour
        temperatureFour.textContent = " Temp " + data.list[22].main.temp + " ºF";
        windFour.textContent = "Wind Speed " + data.list[22].wind.speed + " MPH";
        humidityFour.textContent = "Humidity " + data.list[22].main.humidity + " %";
        imgSrcFour = data.list[22].weather[0].icon
        iconUrlFour = "http://openweathermap.org/img/w/"+imgSrcFour + ".png";
        imgFour.src = iconUrlFour
        
        fiveDayFour.append(fiveDayDateFour)
        fiveDayFour.append(temperatureFour)
        fiveDayFour.append(windFour)
        fiveDayFour.append(humidityFour)
        fiveDayFour.append(imgFour)

        let fiveDayDateFive = document.createElement('h5')
        let temperatureFive = document.createElement('p')
        let windFive = document.createElement('p')
        let humidityFive = document.createElement('p')
        let imgFive = document.createElement('img')

        fiveDayDateFive.textContent = dateFiveDayFive
        temperatureFive.textContent = " Temp " + data.list[30].main.temp + " ºF";
        windFive.textContent = "Wind Speed " + data.list[30].wind.speed + " MPH";
        humidityFive.textContent = "Humidity " + data.list[30].main.humidity + " %";
        imgSrcFive = data.list[30].weather[0].icon
        iconUrlFive = "http://openweathermap.org/img/w/"+imgSrcFive + ".png";
        imgFive.src = iconUrlFive
        
        fiveDayFive.append(fiveDayDateFive)
        fiveDayFive.append(temperatureFive)
        fiveDayFive.append(windFive)
        fiveDayFive.append(humidityFive)
        fiveDayFive.append(imgFive)

})
}

let button = document.querySelector('#button-addon1')
button.addEventListener("click", getWeather(), todaysWeather(), fiveDayForecast());

function getWeather() {

let enteredCity = document.getElementById('input')
let locationEntered = enteredCity.value.trim();
let apiFetch = "https://api.openweathermap.org/data/2.5/weather?q=" + locationEntered + "&APPID=093ae3ae21bb27eb5d4488dfe5718811&units=imperial"
console.log(enteredCity);
   
fetch (
        apiFetch
        )
    
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

})
}



