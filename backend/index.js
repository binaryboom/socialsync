import express, { urlencoded } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

import connectDB from './utils/db.js';


dotenv.config();
const PORT = process.env.PORT || 8000;


const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));

const corsOptions = {
    origin: [`http://localhost:5173`, process.env.URL],
    credentials: true,
};
app.use(cors(corsOptions));


// Start Server
app.listen(PORT, '0.0.0.0', () => {
    connectDB();
    console.log(`App running on PORT ${PORT}`);
});
