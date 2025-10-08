import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import bookRouter from './routes/bookRouter.js'
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    console.log(req)
    return res.status(200).send("Welcome to mern stack")
})

app.use('/books', bookRouter);
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log(" Connected to database"))
    .catch((error) => console.log(" Error connecting to database", error));

    export default app  ;
