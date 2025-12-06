import express from "express";
import { insertSampleProducts } from "../controllers/product.controller.js";

const router = express.Router();

router.post("/products", insertSampleProducts);
export default router;
