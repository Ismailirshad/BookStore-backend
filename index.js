import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import bookRouter from './routes/bookRouter.js'
import cors from 'cors';
import { connectDB } from './db.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    console.log(req)
    return res.status(200).send("Welcome to mern stack")
})

app.use('/books', bookRouter);
connectDB()

    export default app  ;
