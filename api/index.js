import express from "express";
import mongoose from "mongoose";
import 'dotenv/config';
import chalk from 'chalk';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cors from "cors";

mongoose.connect(process.env.MONGODB).then(() => {
  console.log(chalk.blue.bgGreen.bold('Connected to MongoDB successfully !!!'));
}).catch((err) => {
  console.log(err);
})

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

// Middleware for handling errors
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000!!!");
});
