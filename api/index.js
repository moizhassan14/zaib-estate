import express from "express";
import mongoose from "mongoose";
import 'dotenv/config';
import chalk from 'chalk';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

mongoose.connect(process.env.MONGODB).then(() => {
  console.log(chalk.blue.bgGreen.bold('Connected to MongoDB sucessfully !!!'));
}).catch((err) => {
  console.log(err);
})

const app = express();

app.use(express.json());
app.listen(3000, () => {
  console.log("Server running on port 3000!!!");
});

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);