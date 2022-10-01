import app from "./app.js"
import {connectDB} from "./config/database.js"

//connect db function call here
connectDB()

app.get("/",(req,res,next)=>{
        res.send("<h1>This is foodies backend</h1>")
})

app.listen(process.env.PORT,()=>console.log(`Server is working on Port:${process.env.PORT}`))

