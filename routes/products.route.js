import express from "express";
import { insertSampleProducts } from "../controllers/product.controller.js";

const router = express.Router();

router.post("/insert-sample", insertSampleProducts);
console.log("Product routes loaded");

export default router;
