import app from "./app.js";

const PORT = process.env.PORT


app.listen(()=>{
    console.log(`Server is running on ${PORT}`)
})