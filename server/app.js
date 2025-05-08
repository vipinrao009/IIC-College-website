import { config } from "dotenv"
config()
import express from "express"
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRouter.js"
import noticeRouter from "./routes/noticeRouter.js"
import eventRouter from "./routes/eventRouter.js"
import gallaryRouter from "./routes/gallaryRouter.js"
import { ErrorMiddleware } from "./middleware/Error.js";
const app = express()

// cors is used for connecting fronted with backend
app.use(cors({
    origin:["*"],
    credentials:true
}))

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use("/api/v1/user",userRouter)
app.use("/api/v1/notice",noticeRouter)
app.use("/api/v1/event",eventRouter)
app.use("/api/v1/gallery",gallaryRouter)

app.use(ErrorMiddleware)

export default app