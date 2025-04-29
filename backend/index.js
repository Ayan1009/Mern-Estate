import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to MongoDB');
}
).catch((err) => { 
    console.error('MongoDB connection error:', err);
});

const app = express();
app.use(cors());

app.use(express.json());
app.use("/api/user",userRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        status: false,
        statusCode,
        message
    })
});

app.listen(3000, () => {
    console.log(`Server is running on port http://localhost:3000`);
    }
);