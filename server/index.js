import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'


import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js'


dotenv.config();



const app = express();


app.use(cors());

    app.use(
            cors({

            origin: process.env.FRONTEND_API_ENDPOINT, 
            credentials: true

         })
   
    );

app.use(express.json({limit: '50mb'}));
app.use('/api/v1/post', postRoutes)



app.get('/', async(req, res) =>{
    res.send('Hello from DALL-E')
})

const startServer = async() =>{

    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(process.env.PORT || 8080, () =>{
            console.log("Server has started on port https://pixa-verse.vercel.app/8080 ")
        })
    } catch (error) {
        console.log(error)
    }
   
};

startServer();