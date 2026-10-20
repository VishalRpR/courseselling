import jwt from 'jsonwebtoken'
import express from 'express'
import userRouter from './routes/user.js';
import adminRouter from './routes/admin.js';
import dotenv from 'dotenv'
import courseRouter from './routes/course.js';

dotenv.config({})

  
const app = express();
const PORT=process.env.PORT


app.use("/api/v1/user",userRouter)
app.use("/api/v1/course",courseRouter)
app.use("/api/v1/admin",adminRouter)

app.listen(PORT,()=>[

    console.log(`app listing on ${PORT}`)
])