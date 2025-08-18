import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './config/db.js'
import userRouter from './routes/userRoute.js'

//App config
const app = express()
const port = process.env.PORT || 3000

//Middlewares
app.use(express.json())
app.use(cors())
connectDB()

//Api endpoints
app.use('/api/user',userRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
