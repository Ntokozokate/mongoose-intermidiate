import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { connectMongoBD } from "./utils/db.js";
import productRoutes from "./routes/products.route.js";

const app = express();
const port = process.env.PORT || 3003;

//connect to database
connectMongoBD();

//middlewares
app.use(express.json());
app.use("/products", productRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
