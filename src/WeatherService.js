
const API_KEY = '15c5b4f036b1199846a87d9662a18268';

const iconUrl = (iconId)=>`https://openweathermap.org/img/wn/${iconId}@2x.png`
const getFormattedWeatherData  = async (city , units = 'metric')=>{
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`


const data = await fetch(URL).then((res)=>res.json()).then((data)=>data);
const{weather,
    
main:{temp , feels_like , temp_min , temp_max,humidity},
wind:{speed},
sys:{country , sunrise , sunset , },
name,



}= data;
const{description ,icon ,haze}  = weather[0];

return{
description ,iconURL:iconUrl(icon) , haze, temp , feels_like ,temp_max, temp_min,humidity,speed,country,name
,sunrise,sunset};





};
export {getFormattedWeatherData };
