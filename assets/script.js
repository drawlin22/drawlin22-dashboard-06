let displayBox = document.getElementById('displayBox');
let fiveDayOne = document.getElementById('fiveDayOne');
let fiveDayTwo = document.getElementById('fiveDayTwo');
let fiveDayThree = document.getElementById('fiveDayThree');
let fiveDayFour = document.getElementById('fiveDayFour');
let fiveDayFive = document.getElementById('fiveDayFive');
let date = dayjs().format('MMMM D, YYYY');


function todaysWeather() {
fetch (
    'https://api.openweathermap.org/data/2.5/weather?q=Modesto,CA,USA&APPID=093ae3ae21bb27eb5d4488dfe5718811&units=imperial'
    )


.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

let cityEl = document.createElement('h5')
let temperature = document.createElement('p')
let wind = document.createElement('p')
let humidity = document.createElement('p')

cityEl.textContent = data.name +date;
temperature.textContent = " Temperature: " + data.main.temp + " degrees F";
wind.textContent = "Wind Speed: " + data.wind.speed + " MPH";
humidity.textContent = "Humidity: " + data.main.humidity + " %";

displayBox.append(cityEl)
displayBox.append(temperature)
displayBox.append(wind)
displayBox.append(humidity)


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
        
        fiveDayDate.textContent = data.list[0].main.dt_txt;
        temperature.textContent = " Temp " + data.list[0].main.temp + " degrees F";
        wind.textContent = "Wind Speed " + data.list[0].wind.speed + " MPH";
        humidity.textContent = "Humidity " + data.list[0].main.humidity + " %";
        
       
        fiveDayOne.append(temperature)
        fiveDayOne.append(wind)
        fiveDayOne.append(humidity)

        let fiveDayDateTwo = document.createElement('h5')
        let temperatureTwo = document.createElement('p')
        let windTwo = document.createElement('p')
        let humidityTwo = document.createElement('p')

        fiveDayDateTwo.textContent = data.list[6].main.dt_txt;
        temperatureTwo.textContent = " Temp " + data.list[6].main.temp + " degrees F";
        windTwo.textContent = "Wind Speed " + data.list[6].wind.speed + " MPH";
        humidityTwo.textContent = "Humidity " + data.list[6].main.humidity + " %";
        
       
        fiveDayTwo.append(temperatureTwo)
        fiveDayTwo.append(windTwo)
        fiveDayTwo.append(humidityTwo)

        let fiveDayDateThree = document.createElement('h5')
        let temperatureThree = document.createElement('p')
        let windThree = document.createElement('p')
        let humidityThree = document.createElement('p')

        fiveDayDateThree.textContent = data.list[14].main.dt_txt;
        temperatureThree.textContent = " Temp " + data.list[14].main.temp + " degrees F";
        windThree.textContent = "Wind Speed " + data.list[14].wind.speed + " MPH";
        humidityThree.textContent = "Humidity " + data.list[14].main.humidity + " %";
        
       
        fiveDayThree.append(temperatureThree)
        fiveDayThree.append(windThree)
        fiveDayThree.append(humidityThree)

        let fiveDayDateFour = document.createElement('h5')
        let temperatureFour = document.createElement('p')
        let windFour = document.createElement('p')
        let humidityFour = document.createElement('p')

        fiveDayDateFour.textContent = data.list[14].main.dt_txt;
        temperatureFour.textContent = " Temp " + data.list[22].main.temp + " degrees F";
        windFour.textContent = "Wind Speed " + data.list[22].wind.speed + " MPH";
        humidityFour.textContent = "Humidity " + data.list[22].main.humidity + " %";
        
       
        fiveDayFour.append(temperatureFour)
        fiveDayFour.append(windFour)
        fiveDayFour.append(humidityFour)

        let fiveDayDateFive = document.createElement('h5')
        let temperatureFive = document.createElement('p')
        let windFive = document.createElement('p')
        let humidityFive = document.createElement('p')

        fiveDayDateFive.textContent = data.list[14].main.dt_txt;
        temperatureFive.textContent = " Temp " + data.list[30].main.temp + " degrees F";
        windFive.textContent = "Wind Speed " + data.list[30].wind.speed + " MPH";
        humidityFive.textContent = "Humidity " + data.list[30].main.humidity + " %";
        
       
        fiveDayFive.append(temperatureFive)
        fiveDayFive.append(windFive)
        fiveDayFive.append(humidityFive)

})
}

todaysWeather()
fiveDayForecast()