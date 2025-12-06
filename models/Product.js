import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: String,
    category: String,
    price: Number,
    inStock: Boolean,
    tags: [String],
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
