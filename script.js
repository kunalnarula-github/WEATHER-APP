
let  = document.getElementById('')
let  = document.getElementById('')
let  = document.getElementById('')
let  = document.getElementById('')
let  = document.getElementById('')
let  = document.getElementById('')


// api url
const api_url = 
'http://api.weatherapi.com/v1/forecast.json?key=9d01ad784d0a447790915433212407&q=delhi&days=1&aqi=yes&alerts=no';
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    show(data);
}
// Calling that async function
getapi(api_url);

// Function to define innerHTML
function show(data) {
    // DATE
    document.getElementById('date').innerHTML = data.forecast.forecastday[0].date

    // TIME
    let time = (data.location.localtime).split('')
    document.getElementById('temperature-time').innerHTML = 'Updated' + ' ' + (time.slice(11,25).join(''))

    // DELHI
    document.getElementById('delhiTemp').innerHTML = data.current.temp_c
    document.getElementById('temperature-comment').innerHTML = data.current.condition.text

    // VISIBILITY
    document.getElementById('precipitation-value').innerHTML = (data.current.vis_km) + ' ' + 'km'
    document.getElementById('wind-value').innerHTML = (data.current.wind_kph) + ' ' + 'kph'
    document.getElementById('humidity-value').innerHTML = (data.current.humidity) + ' ' + '%'
    document.getElementById('pressure-value').innerHTML = (data.current.pressure_mb) + ' ' + 'mb'
 
    console.log(data)
    }

// api url
const api_url_hourly = 
'https://api.openweathermap.org/data/2.5/forecast?q=delhi&appid=2f974502bfcfa7502f91bc4df92023fe';
  
// Defining async function
async function getapihourly(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    hourly(data);
}
// Calling that async function
getapihourly(api_url_hourly);

function hourly(data) {
    document.getElementById('high-nineM').innerHTML = Math.floor(data.list[0].main.temp_max - 273.15)
    document.getElementById('low-nineM').innerHTML = Math.floor(data.list[0].main.temp_min - 273.15)
    document.getElementById('high-twelveM').innerHTML = Math.floor(data.list[1].main.temp_max - 273.15)
    document.getElementById('low-twelveM').innerHTML = Math.floor(data.list[1].main.temp_min - 273.15)
    document.getElementById('high-three').innerHTML = Math.floor(data.list[2].main.temp_max - 273.15)
    document.getElementById('low-three').innerHTML = Math.floor(data.list[2].main.temp_min - 273.15)
    document.getElementById('high-six').innerHTML = Math.floor(data.list[3].main.temp_max - 273.15)
    document.getElementById('low-six').innerHTML = Math.floor(data.list[3].main.temp_min - 273.15)
    document.getElementById('high-nineN').innerHTML = Math.floor(data.list[4].main.temp_max - 273.15)
    document.getElementById('low-nineN').innerHTML = Math.floor(data.list[4].main.temp_min - 273.15)
    document.getElementById('high-twelveN').innerHTML = Math.floor(data.list[5].main.temp_max - 273.15)
    document.getElementById('low-twelveN').innerHTML = Math.floor(data.list[5].main.temp_min - 273.15)
}

// api url
const api_url_bangalore = 'https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=432c2df0c8c4cc325dca07a6c477e002';
  
// Defining async function
async function getapibangalore(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    bangalore(data);
}
// Calling that async function
getapibangalore(api_url_bangalore);

function bangalore(data) {
    document.getElementById('remark-of-temperature-state-bangalore').innerHTML = data.weather[0].description
    document.getElementById('value-of-temperature-state-bangalore').innerHTML = Math.floor(data.main.temp -273.15)
}

// api url
const api_url_mumbai = 'https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=432c2df0c8c4cc325dca07a6c477e002';
  
// Defining async function
async function getapimumbai(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    mumbai(data);
}
// Calling that async function
getapimumbai(api_url_mumbai);

function mumbai(data) {
    document.getElementById('remark-of-temperature-state-mumbai').innerHTML = data.weather[0].description
    document.getElementById('value-of-temperature-state-mumbai').innerHTML = Math.floor(data.main.temp -273.15)
}

// api url
const api_url_kolkata = 'https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=432c2df0c8c4cc325dca07a6c477e002';
  
// Defining async function
async function getapikolkata(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    kolkata(data);
}
// Calling that async function
getapikolkata(api_url_kolkata);

function kolkata(data) {
    document.getElementById('remark-of-temperature-state-kolkata').innerHTML = data.weather[0].description
    document.getElementById('value-of-temperature-state-kolkata').innerHTML = Math.floor(data.main.temp -273.15)
}