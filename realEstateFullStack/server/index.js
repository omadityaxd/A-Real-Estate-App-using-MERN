import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import { userRoute } from './routes/userRoutes.js';
import { residencyRoute } from './routes/residencyRoutes.js';

dotenv.config()

const app = express()
const PORT=process.env.PORT||3000

app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})

app.use('/api/user',userRoute)
app.use('/api/residency',residencyRoute)