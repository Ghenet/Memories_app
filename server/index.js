import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

//initializes the app
const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes); //middleware to connect the app with the routes

// connect to mongodb
// const CONNECTION_URL = "mongodb+srv://ghenikibrom:lovegheni0341@cluster0.p3uso.mongodb.net/<dbname>?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology:true})
.then(()=> app.listen(PORT, ()=> console.log(`Server is running so fast on port: ${PORT}`)))
.catch((error)=> console.log(error.message));

mongoose.set('useFindAndModify', false); //this prevents us from getting warnings in the console.sxcws