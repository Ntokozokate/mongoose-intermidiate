import Product from "../models/Product.js";

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
        name: "HP Pavilion Gaming PC",
        category: "Electronics",
        price: 1100,
        inStock: true,
        tags: ["desktop", "gaming", "nvidia"],
      },
      {
        name: "Canon EOS 250D DSLR Camera",
        category: "Electronics",
        price: 650,
        inStock: true,
        tags: ["camera", "dslr", "photography"],
      },
      {
        name: "Apple iPad 10th Gen",
        category: "Electronics",
        price: 499,
        inStock: true,
        tags: ["tablet", "apple", "ipad"],
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
