import { config } from "dotenv"
config()
import express from "express"
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express()

// cors is used for connecting fronted with backend
app.use(cors({
    origin:[],
    credentials:true
}))

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}));


export default app