import path from 'path'
import experss from 'express';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import userRoutes from './routes/user.route.js'

import connectToMongodb from './db/connectToMongodb.js'
import { app, server } from './socket/socket.js'


const PORT = process.env.PORT || 5000

const __dirname = path.resolve()

dotenv.config()

app.use(experss.json()) // Used to help parsed incomming request from (req.body)
app.use(cookieParser())// Used to help parsed incomming request from (req.cookie)

app.use('/api/auth', authRoutes)
app.use('/api/message', messageRoutes)
app.use('/api/users', userRoutes)

app.use(experss.static(path.join(__dirname, 'frontend/dist')))

app.get("*", (req,res) =>{
    res.sendFile(path.join(__dirname, "frontend" , "dist", "index.html"))
})


server.listen(PORT, () => {
    connectToMongodb()
    console.log('Server running at ' + PORT)    
})