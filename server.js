import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import mongoose from "mongoose";
import http from "http";
import fs from "fs";
import app from "./app.js"


dotenv.config();

// Initialize express app and connect to the database
// const app = express();
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// DB connection
//mongoose.connect('mongodb://localhost:27017/splitsmart', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
import groupRoutes from "./Routes/groupRoute.js";
import userRoutes from "./Routes/userRoute.js";

// User routes
app.use('/api/users', userRoutes);

// Group routes
app.use('/api/groups', groupRoutes);

// Test route
app.get('/', (_req, res) => {
    res.send('SplitSmart API is running...');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
