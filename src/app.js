import express from 'express'

import weatherRoutes from './routes/weatherRoutes.js'
const app = express();

app.use(express.json())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
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
