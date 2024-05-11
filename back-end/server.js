import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes/routes.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

mongoose.connect(process.env.MONGO_URI);

app.use('/api', routes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});