
import { Router } from "express";
import { getWeatherByCity } from "../controllers/weatherControllers.js";
const router = Router()


router.get('/weather',async(req,res)=>{
    res.json({type:'hello world'})
})
router.get('/weather/:city',getWeatherByCity)

export default router