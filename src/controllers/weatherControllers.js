import axios from "axios";
import {API_KEY,WEATHER_API_URL} from '../config.js'


export const getWeatherByCity = async(req,res) =>{
    const city = req.params.city;
 
    try {
        const response = await axios.get(WEATHER_API_URL,{
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric'
            }
        })
       res.json(
        response.data,
       )
        
    } catch (error) {
        if (error.response) {
            
            res.status(error.response.status).json({
                error: error.response.data.message,
            });
        } 
    }
}