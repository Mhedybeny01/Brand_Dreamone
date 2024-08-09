document.getElementById('getWeather').addEventListener('click', async function() {
    const city = document.getElementById('city').value;
    const apiKey = 'a0746cb852a7d4652aa5ec6a91c61581'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const imgIcon = document.getElementById('weatherInfo');
    const imgIc = document.getElementById('sun');
    const imgIc2 = document.getElementById('speed');
    const imgIc3 = document.getElementById('nisba');
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }


        const data = await response.json();
        document.getElementById('cityName').textContent = data.name;
        document.getElementById('temperature').textContent = Math.round(data.main.temp) + ' °C ' ;
        document.getElementById('weather').textContent = data.wind.speed + 'km/h' ;
        document.getElementById('humidity').textContent = data.main.humidity + ' %';
       
        imgIc2.src='win.png';
        imgIc3.src='wth.png';
        

        if(data.weather[0].main == "clouds"){
                imgIc.src='cloudy.png';
        }else if(data.weather[0].main == "rain"){
            imgIc.src='storm.png';
        }else if(data.weather[0].main == "mist"){
            imgIc.src='mist.png';
        }else{
            imgIc.src='sun.png';
        }
  
     

       
    } catch (error) {
        document.getElementById('weatherInfo').innerHTML = `<p>${error.message}</p>`;
    }
});
