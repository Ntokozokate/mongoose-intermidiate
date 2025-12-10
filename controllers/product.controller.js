import Product from "../models/Product.js";

export const getProductStats = async (req, res) => {
  try {
    const result = await Product.aggregate([
      //stage 1 filtering documents that are in stock and cost above 400
      {
        $match: {
          inStock: true,
          price: {
            $gte: 400,
          },
        },
      },
      //stage group by category and get everage price and get amount
      {
        $group: {
          _id: "$category",
          avgprice: {
            $avg: "$price",
          },
          count: {
            $sum: 1,
          },
        },
      },
    ]);
    res.status(200).json({
      success: true,
      message: `There are  ${result.length} available products`,
      data: result,
    });
  } catch (error) {
    console.log("Error geting product stat:", error);
    res.status(500).json({
      message: "Error getting product stat",
      error: error.message,
    });
  }
};
export const getProductAnalysis = async (req, res) => {
  try {
    const result = await Product.aggregate([
      {
        $match: {
          category: "Electronics",
        },
      },
      {
        $group: {
          _id: null,
          totalRevenue: {
            $sum: "$price",
          },
          averagePrice: {
            $avg: "$price",
          },
          maxProductPrice: {
            $max: "$price",
          },
          minProductPrice: {
            $min: "$price",
          },
        },
      },
      {
        $project: {
          _id: 0,
          totalRevenue: 1,
          averagePrice: 1,
          maxProductPrice: 1,
          minProductPrice: 1,
          priceRange: {
            $subtract: ["$maxProductPrice", "$minProductPrice"],
          },
        },
      },
    ]);
    res.status(200).json({
      success: true,
      data: result, //[0] || {}, // Return the first aggregation result
    });
  } catch (error) {
    console.log("Error making analysis:", error);
    res.status(500).json({
      message: "Error occured whilst getting analysis",
      error: error.message,
    });
  }
};

export const insertSampleProducts = async (req, res) => {
  try {
    const sampleProducts = [
      {
        name: "Dell Inspiron 15 Laptop",
        category: "Electronics",
        price: 850,
        inStock: true,
        tags: ["laptop", "windows", "portable"],
      },
      {
        name: "Samsung Galaxy S22",
        category: "Electronics",
        price: 999,
        inStock: true,
        tags: ["smartphone", "android", "samsung"],
      },
      {
        name: "Apple MacBook Air M2",
        category: "Electronics",
        price: 1299,
        inStock: false,
        tags: ["laptop", "apple", "macos"],
      },
      {
        name: "Sony WH-1000XM5 Headphones",
        category: "Electronics",
        price: 399,
        inStock: true,
        tags: ["audio", "noise-cancelling", "wireless"],
      },
      {
        name: "Nike Air Max 270",
        category: "Footwear",
        price: 150,
        inStock: true,
        tags: ["shoes", "sneakers", "nike"],
      },
      {
        name: "Adidas Ultraboost",
        category: "Footwear",
        price: 180,
        inStock: false,
        tags: ["sneakers", "adidas", "running"],
      },
      {
        name: "Levi's 501 Original Jeans",
        category: "Clothing",
        price: 70,
        inStock: true,
        tags: ["jeans", "denim", "levis"],
      },
      {
        name: "North Face Winter Jacket",
        category: "Clothing",
        price: 250,
        inStock: true,
        tags: ["jacket", "winter", "northface"],
      },
      {
        name: "Canon EOS 250D DSLR Camera",
        category: "Electronics",
        price: 650,
        inStock: true,
        tags: ["camera", "dslr", "photography"],
      },
      {
        name: "IKEA Markus Office Chair",
        category: "Furniture",
        price: 199,
        inStock: true,
        tags: ["chair", "office", "ergonomic"],
      },
      {
        name: "Samsung 55-inch 4K Smart TV",
        category: "Electronics",
        price: 690,
        inStock: false,
        tags: ["tv", "smart-tv", "4k"],
      },
      {
        name: "Logitech MX Master 3S Mouse",
        category: "Electronics",
        price: 99,
        inStock: true,
        tags: ["mouse", "wireless", "logitech"],
      },
    ];
    const result = await Product.insertMany(sampleProducts);
    return res.status(201).json({
      success: true,
      data: `Inserted ${result.length} sample products`,
    });
  } catch (error) {
    console.log("Error insrting data:", error);
    res.status(500).json({
      message: "Error creating product",
      error: error.message,
    });
  }
};
