import logo from './logo.svg';
import './App.css';
import './component/Top.css';

import { useEffect, useState } from 'react';
import { getFormattedWeatherData } from './WeatherService';
import { UilSearch ,UilClouds  ,UilReact,UilTemperature, UilTear,UilWind,UilSun,UilSunset } from '@iconscout/react-unicons'
// import UilReact from '@iconscout/react-unicons/icons/uil-react'

function App() {
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




const[weather ,setWeather] = useState(" ");
const[city , setCity] = useState("Jaipur");
const[citiess , setCitiess] = useState("");

const click = (citiess)=>{
  if(citiess!==' '){
    setCity(citiess);
    console.log(citiess);
  }
}


useEffect( ()=>{
  const fetch = async ()=>{
    const data = await getFormattedWeatherData(city);
    setWeather(data);
  };
  fetch();

},[])



  return (


    <div className='weather-app'>
    <div className='container'>
       <h3 className='brand'>the weather</h3>
       <div>
           <h1 className='temp'>{weather.temp}°C</h1>
           
           <div className="city-time">
               <h1 className="name">{`${weather.name} `}</h1>
               <small>
                   <span className='time'>06:59</span>
                   <span className='date'>Monday sep 19</span>
               </small>
           </div>
           <div className='weather'>
         <img src={weather.iconURL} alt="" />
         <span condition>
          {weather.description}</span>
           </div>
       </div>
   
    </div>
    <div className='panel'>
       <form action="" id="locationInput">
           <input type="text" className='search' placeholder='search location'
           value={citiess}
        onChange={(e)=>setCitiess(e.currentTarget.value)}
           
           />
           <button className="submit" type='submit'>
              <UilSearch onClick={click}/>
           </button>
       </form>
       <ul className='cities'>
       {cities.map((city)=>(
   
           <li>
   <button  className='city' onClick={()=>setCity(city.title)}  key={city.id} >{city.title}</button></li>
   ))}
       </ul>
       <ul className='details'>
   <h4>weather details</h4>
   <li>
       <li> <UilClouds/>
       <span>cloudy</span></li>
      
       <span className='cloud'>{weather.description}</span>
   </li>
   <hr />
   
   <li>
       <li><UilTear/> <span></span>humidity</li>
       
   
      
       <span className="humidity">{weather.humidity}%</span>
   </li>
   <hr />
   <li>
       <li><UilWind/><span>Wind</span> </li>
   
       <span className='wind'>{weather.speed}kmph</span>
   </li>
   <hr />
   
   <li>
    <li>  <UilTemperature/><span>Real feel</span> </li> 
       
       <span className='wind'>{weather.feels_like}°C</span>
   </li>
   <hr />
   
   
   
   <li>
       <li>  <UilSun/><span>Rise</span></li>
     
       
       <span className='wind'>{weather.sunrise}A.M.</span>
   </li>
   <hr />
   
   
   
   <li>
       <li> <UilSunset/>
       <span>Set</span></li>
      
       <span className='wind'>{weather.sunset}P.M.</span>
   </li>
   <hr />
   <li>
       <li><UilTemperature/>
       <span>High</span></li>
       
       <span className='wind'>{weather.temp_max}°C</span>
   </li>
   <hr />
   <li>
       <li><UilTemperature/>
       <span>Low</span></li>
       
       <span className='wind'>{weather.temp_min}°C</span>
   </li>
   
   
   
   
       </ul>
    </div>
       </div>
  );
}

export default App;
