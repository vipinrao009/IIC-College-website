import { config } from "dotenv"
config()
import express from "express"
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRouter.js"
import { ErrorMiddleware } from "./middleware/Error.js";
const app = express()

// cors is used for connecting fronted with backend
app.use(cors({
    origin:[],
    credentials:true
}))

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use("/api/v1/user",userRouter)

app.use(ErrorMiddleware)

export default app