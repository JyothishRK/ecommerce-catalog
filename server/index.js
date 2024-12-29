import express from "express";
import dotenv from "dotenv";
import connectDB from './db/mongoose.js';
import productRoutes from './routes/products.js'; // Import the routes

connectDB();

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(productRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
