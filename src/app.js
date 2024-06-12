import express from 'express'

import weatherRoutes from './routes/weatherRoutes.js'
const app = express();

app.use(express.json())
app.get('/',(req,res)=>{
    res.send("Hello world")
})
app.use('/api',weatherRoutes)
app.use((req,res,next)=>{
    res.status(400).json({
        message:'Not found'
    })
})

export default app
