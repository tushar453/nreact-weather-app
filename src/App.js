import logo from './logo.svg';
import './App.css';
import './component/Top.css';
import bg from './img/valentin-muller-bWtd1ZyEy6w-unsplash.jpg'
import cold from './img/valentin-muller-bWtd1ZyEy6w-unsplash.jpg'
import { useEffect, useState } from 'react';
import { getFormattedWeatherData } from './WeatherService';
import { UilSearch ,UilMapPinAlt,UilClouds  ,UilReact,UilTemperature, UilTear,UilWind,UilSun,UilSunset } from '@iconscout/react-unicons'
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
const[city , setCity] = useState("kota");
const[citiess , setCitiess] = useState("");
const[units , setUnits] = useState("metric");
const[bgs , setbgs] = useState(bg);
 const handleUnit=(e)=>{
const button = e.currentTarget;
const currentUnit = button.innerText.slice(1);
 const isCelsius = currentUnit === "C";
 button.innerText = isCelsius ? "°F":"°C";
 setUnits(isCelsius ? 'metric' : 'imperial');

 }


const click = (e)=>{
    e.preventDefault();
    setCity(citiess);
    console.log(citiess);
 
  }

  




useEffect( ()=>{
  const fetch = async ()=>{
    const data = await getFormattedWeatherData(city,units);
    setWeather(data);
   const thresold = units === 'metric' ? 20 : 60  ;
   if(data.temp <= thresold ) setbgs(bg);
   else setbgs(cold);


 


  };
  fetch();

} , [city ,units])



  return (

//  background-size: cover;
// background-position: center;
// background-repeat: no-repeat;
// color: #fff;
// position: relative;
// transition: 500ms;
// opacity: 1;
    <div className='weather-app'  style={{
        backgroundImage: `url(${bgs})`,
        backgroundSize :"cover", backgroundRepeat: "no-repeat"
        
      }}>
    <div className='container'>
       <h3 className='brand'>Sharma Tushar's Weather App</h3>
       <div>
           <h1 className='temp'>{`${weather.temp} °${units==='metric' ? 'C':'F'}`}</h1>
           
           <div className="city-time">
               <h1 className="name">{`${weather.name} `}</h1>
               <small>
                   <span className='time'><button onClick={(e)=>handleUnit(e)}  className='button'>°C</button></span>

               </small>
           </div>
           <div className='weather'>
         <img src={weather.iconURL} alt="" />
         <span condition>
          {weather.description}</span>

          <span><UilMapPinAlt  size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"/></span>
           </div>
       </div>
   
    </div>
    <div className='panel'>
       <form action="" id="locationInput">
           <input type="text" className='search' placeholder='search location'
           value={citiess}
        onChange={(e)=>setCitiess(e.target.value.toString())}
           
           />
           <button onClick={click} className="submit" type='submit'>
              <UilSearch />
           </button>
       </form>
       <ul className='cities'>
       {cities.map((city)=>(
   
           <li>
   <button  className='city' onClick={()=>setCity(city.title)}   key={city.id} >{city.title}</button></li>
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
       
       <span className='wind'>{`${weather.feels_like} °${units==='metric' ? 'C':'F'}`}</span>
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
       
       <span className='wind'>{`${weather.temp_max} °${units==='metric' ? 'C':'F'}`}</span>
   </li>
   <hr />
   <li>
       <li><UilTemperature/>
       <span>Low</span></li>
       
       <span className='wind'>{`${weather.temp_min} °${units==='metric' ? 'C':'F'}`}</span>
   </li>
   
   
   
   
       </ul>
    </div>
       </div>
  );
}

export default App;