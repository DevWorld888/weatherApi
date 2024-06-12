import { config } from "dotenv";
config()

export const PORT = process.env.PORT || 3000
export const API_KEY = process.env.API_KEY 
export const WEATHER_API_URL = process.env.WEATHER_API_URL