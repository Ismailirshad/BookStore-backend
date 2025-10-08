import express from 'express';
import { PORT, MONGODB_URL } from './config.js'
import mongoose from 'mongoose'
import bookRouter from './routes/bookRouter.js'
import cors from 'cors';


const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send("Welcome to mern stack")
})

app.use('/books', bookRouter);

mongoose.connect(MONGODB_URL)
    .then(() => {
        console.log("Connected to databse")
        app.listen(PORT, () => {
            console.log("Server is running on port", { PORT })
        })
    }).catch((error) => {
        console.log("Error connecting to database", error)
    })