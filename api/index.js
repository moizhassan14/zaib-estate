import express from "express";
import mongoose from "mongoose";
import 'dotenv/config';
import chalk from 'chalk';

mongoose.connect(process.env.MONGODB).then(() => {
  console.log(chalk.blue.bgGreen.bold('Connected to MongoDB sucessfully !!!'));
}).catch((err) => {
  console.log(err);
})

const app = express();

app.listen(3000, () => {
  console.log("Server running on port 3000!!!");
});