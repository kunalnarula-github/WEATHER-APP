function DailyCard(props) {
  return (
    <div id='card-day'>
      <h1 id='day'>{props.day}</h1>
      <div id='card-high-low'>
      <h1 id='high'>{props.high}<span id='yellow'>°</span>C</h1>
      <h1 id='slash'>/</h1>
      <h1 id='low'>{props.low}<span id='yellow'>°</span>C</h1>
      </div>
      <div id='card-img'>
      <img alt='weather icon' src={props.image}></img>
      </div>
    </div>
  )
}

function StateCard(props){
  return(
    <div id='states'>
    <h1 id='name-of-state'>{props.state}</h1>
    <img src={props.image} id='image-of-weather'></img>
    <div id='remarks-state'>
      <h1 id='value-of-temperature-state'><strong>{props.temp}<span id='yellow'>°</span>C</strong></h1>
      <h1 id='remark-of-temperature-state'>{props.remark}</h1>
    </div>
    </div>
  )
}

function App() {
  return (
    <div>
    <div  id='App'>
    <div id='left'>
      <div id='precipitation-section'>
      <h1 id='precipitation'>Visisbility</h1>
      <h1 id='precipitation-value'>3500</h1>
      </div>
      <div id='line-break-aqi'></div>
      <div id='wind-section'>
      <h1 id='wind'>Wind</h1>
      <h1 id='wind-value'>10 km/h</h1>
      </div>
      <div id='line-break-aqi'></div>
      <div id='humidity-section'>
      <h1 id='humidity'>Humidity</h1>
      <h1 id='humidity-value'>0%</h1>
      </div>
      <div id='line-break-aqi'></div>
      <div id='pressure-section'>
      <h1 id='pressure'>Pressure</h1>
      <h1 id='pressure-value'>840hPa</h1>
    </div>
      </div>
      <div id='center'>
        <div id='top'>
        <h1 id='location'><strong>INDIA</strong>,New Delhi</h1>
        <h1 id='date'>21,July 2021</h1>
        </div>
        <div id='middle'>
        <img alt='weather' src="https://img.icons8.com/fluent/150/000000/chance-of-storm.png" id='weather-img'/>
        <h1 id='temperature-value'>
        <strong id='temperature-degree'><div id='delhiTemp'>30</div><span id='yellow'>°</span>C</strong>
        <div id='temperature-comment'>Thunderstorm</div>
        <div id='temperature-time'>1:48</div>
        </h1>
        </div>
        <div id='bottom'>
        <div id='temperature'>
          <DailyCard day='09:00' high='24' low='18' image='https://img.icons8.com/fluent/75/000000/torrential-rain.png' id='nine-morning' />
          <DailyCard day='12:00' high='29' low='14' image='https://img.icons8.com/fluent/75/000000/windy-weather.png' id='twelve-morning' />
          <DailyCard day='15:00' high='27' low='21' image='https://img.icons8.com/fluent/75/000000/chance-of-storm.png' id='three' />
          <DailyCard day='18:00' high='32' low='20' image='https://img.icons8.com/fluent/75/000000/windy-weather.png' id='six' />
          <DailyCard day='21:00' high='18' low='10' image='https://img.icons8.com/fluent/75/000000/torrential-rain.png' id='nine-night' />
          <DailyCard day='00:00' high='18' low='10' image='https://img.icons8.com/fluent/75/000000/torrential-rain.png' id='twelve-night' />
        </div>
        </div>
      </div>
      <div id='right'>
      <StateCard state='Delhi' image='https://img.icons8.com/fluent/48/000000/sleet.png' temp='32' remark='mist' />
      <div id='line-break-states'></div>
      <StateCard state='Mumbai' image='https://img.icons8.com/fluent/48/000000/partly-cloudy-day.png' temp='25' remark='Moderate' />
      <div id='line-break-states'></div>
      <StateCard state='Kolkata' image='https://img.icons8.com/fluent/48/000000/sleet.png' temp='18' remark='Cold' />
      </div>
      </div>
    </div>
  );
}

export default App;
