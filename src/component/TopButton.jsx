import React from 'react'


import rega from '../weather/64x64/day/113.png';

import { UilSearch ,UilClouds  ,UilReact,UilTemperature, UilTear,UilWind,UilSun,UilSunset } from '@iconscout/react-unicons'
const TopButton = (props) => {
    const cities = [ 
        {
        id:1,
        title:'Rajasthan'
    },
    
    {
        id:2,
        title:'Delhi'
    },
    
    {
        id:3,
        title:'Jaipur'
    }
    ,
    
    {
        id:4,
        title:'Karauli'
    },
    
        {
        id:5,
        title:'Gurugram'
    }
    
    ]


  return (

    <div className='weather-app'>
 <div className='container'>
    <h3 className='brand'>the weather</h3>
    <div>
        <h1 className='temp'>{props.weather.temp}</h1>
        
        <div className="city-time">
            <h1 className="name">{props.weather.name}</h1>
            <small>
                <span className='time'>06:59</span>
                <span className='date'>Monday sep 19</span>
            </small>
        </div>
        <div className='weather'>
      <img src={props.weather.iconURL} alt="" />
      <span condition>{props.weather.description}</span>
        </div>
    </div>

 </div>
 <div className='panel'>
    <form action="" id="locationInput">
        <input type="text" className='search' placeholder='search location' />
        <button className="submit" type='submit'>
           <UilSearch/>
        </button>
    </form>
    <ul className='cities'>
    {cities.map((city)=>(

        <li>
<button  className='city'  key={city.id} >{city.title}</button></li>
))}
    </ul>
    <ul className='details'>
<h4>weather details</h4>
<li>
    <li> <UilClouds/>
    <span>cloudy</span></li>
   
    <span className='cloud'>{props.weather.description}</span>
</li>
<hr />

<li>
    <li><UilTear/> <span>Humidity</span></li>
    

   
    <span className="humidity">{props.weather.humidity}%</span>
</li>
<hr />
<li>
    <li><UilWind/><span>Wind</span> </li>

    <span className='wind'>{props.weather.speed.toFixed()}kmph</span>
</li>
<hr />

<li>
 <li>  <UilTemperature/><span>Real feel</span> </li> 
    
    <span className='wind'>{props.weather.feels_like.toFixed()}°C</span>
</li>
<hr />



<li>
    <li>  <UilSun/><span>Rise</span></li>
  
    
    <span className='wind'>{props.weather.sunrise.toFixed()}A.M.</span>
</li>
<hr />



<li>
    <li> <UilSunset/>
    <span>Set</span></li>
   
    <span className='wind'>{props.weather.sunset}p.m.</span>
</li>
<hr />
<li>
    <li><UilTemperature/>
    <span>High</span></li>
    
    <span className='wind'>{props.weather.temp_max.toFixed()}°C</span>
</li>
<hr />
<li>
    <li><UilTemperature/>
    <span>Low</span></li>
    
    <span className='wind'>{props.weather.temp_min.toFixed()}°C</span>
</li>




    </ul>
 </div>
    </div>
   
  )
}

export default TopButton
