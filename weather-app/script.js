const url = 'https://api.openweathermap.org/data/2.5/weather?';
const lat = 'lat=';
const lon = '&lon=';
const appid = '&appid=14ceefedc075c5088ae9ff8a3d13cf04';
const unit = '&units=metric';

const loc = 'http://api.openweathermap.org/geo/1.0/direct?';
const city = 'q=';
const limit = '&limit=1';
//--------------------------------------------------------------
const input = document.querySelector('input');
const btn = document.querySelector('button');
const country = document.querySelector('.country');
const place = document.querySelector('.city');

const temp = document.querySelector('.temp');
const feels = document.querySelector('.feels');
const humidity = document.querySelector('.humidity');
const max = document.querySelector('.max');
const min = document.querySelector('.min');

window.addEventListener('load', ()=>{
    const location = fetchLocation('buenos aires');
    
    location.then(v => {
        country.textContent = v.country;
        place.textContent = v.name;
        fetchTemperature(v.lat, v.lon);
    });
});

btn.addEventListener('click', (e)=>{
    const location = fetchLocation(input.value);
    
    location.then(v => {
        country.textContent = v.country;
        place.textContent = v.name;
        fetchTemperature(v.lat, v.lon);
    });

    e.preventDefault();
});

async function fetchLocation(inputValue){
    let newCity = city + inputValue;
    let newUrl = loc + newCity + limit + appid;

    const res = await fetch(newUrl, {mode: 'cors'});
    const location = await res.json();

    const ret = {lat:location[0].lat, lon:location[0].lon, name:location[0].name, country:location[0].country};

    return ret;
}

async function fetchTemperature(la, lo){
    let newlat = lat + la;
    let newlon = lon + lo;
    let newurl = url + newlat + newlon + appid + unit;

    const res = await fetch(newurl, {mode:"cors"});
    const weather = await res.json();
    
    temp.textContent = Math.round(weather.main.temp);
    feels.textContent = Math.round(weather.main.feels_like);
    humidity.textContent = weather.main.humidity;
    max.textContent = Math.round(weather.main.temp_max);
    min.textContent = Math.round(weather.main.temp_min);
}