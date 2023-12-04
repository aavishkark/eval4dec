const express=require('express')
const { useRouter } = require('./Routes/users.routes')
const { connection } = require('./db')
const app=express()
const cors=require('cors')
app.use(express.json())
app.use(cors())
app.use('/contacts',useRouter)
app.get('/',(req,res)=>{
    res.status(200).send({"msg":"Hello this is home"})
})
app.listen(3000,async()=>{
    try{
        await connection
        console.log("Connected to atlas")
    }
    catch{
        console.log("Some Error ocurred in Backend")
    }
    console.log("Your app is connected")
})