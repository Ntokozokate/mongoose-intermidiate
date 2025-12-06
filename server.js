import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { connectMongoBD } from "./utils/db.js";

const app = express();
const port = process.env.PORT || 3003;

connectMongoBD();
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
