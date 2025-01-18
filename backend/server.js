import experss from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import userRoutes from './routes/user.route.js'

import connectToMongodb from './db/connectToMongodb.js'


const app = experss()
const PORT = process.env.PORT || 5000

dotenv.config()

app.use(experss.json()) // Used to help parsed incomming request from (req.body)
app.use(cookieParser())// Used to help parsed incomming request from (req.cookie)

app.use('/api/auth', authRoutes)
app.use('/api/message', messageRoutes)
app.use('/api/users', userRoutes)

app.get('/', (req,res) =>{
    //res.send("Hello world")
})



app.listen(PORT, () => {
    connectToMongodb()
    console.log('Server running at ' + PORT)    
})