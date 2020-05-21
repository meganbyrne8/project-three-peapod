const db = require('../db')
const Product = require('../models/product')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const products =
    [
      {
        "title": "Heirloom Tomatoes",
        "type": "vegetable",
        "description": "Seasonal locally grown tomatoes",
        "image": "https://unionmarket.com/wp-content/uploads/2018/08/Union-Market-Heirloom-Tomato-Varieties.jpg",
        "price": 3.99,
        "rating": 0 / 0,
        "category": "vegetables",
        "aisle": "produce"
      },
      {
        "title": "Zucchini",
        "type": "vegetable",
        "description": "Seasonal locally grown zucchini",
        "image": "https://www.jessicagavin.com/wp-content/uploads/2018/05/zucchini-2-1200.jpg",
        "price": 3.99,
        "rating": 0 / 0,
        "category": "vegetables",
        "aisle": "produce"
      },
      {
        "title": "Shallots",
        "type": "vegetable",
        "description": "Locally grown shallot",
        "image": "https://draxe.com/wp-content/uploads/2015/06/WhatIsaShallotHeader.jpg",
        "price": 3.99,
        "rating": 0 / 0,
        "category": "vegetables",
        "aisle": "produce"
      },
      {
        "title": "Carrots",
        "type": "vegetable",
        "description": "Seasonal locally grown carrots",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRou9od8LjnnETrA3ONJGUqUR1E83P_MBsgYXg6m6ZqOJtGLzGL&usqp=CAU",
        "price": 3.99,
        "rating": 0 / 0,
        "category": "vegetables",
        "aisle": "produce"
      },
      {
        "title": "Beets",
        "type": "vegetable",
        "description": "Seasonal locally grown carrots",
        "image": "https://images.unsplash.com/photo-1573426667638-18ccdd988a39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
        "price": 3.99,
        "rating": 0 / 0,
        "category": "vegetables",
        "aisle": "produce"
      },
      {
        "title": "Avocado",
        "type": "vegetable",
        "description": "Seasonal locally grown carrots",
        "image": "https://images.unsplash.com/photo-1573566291259-fd494a326b60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2052&q=80",
        "price": 3.99,
        "rating": 0 / 0,
        "category": "vegetables",
        "aisle": "produce"
      },
      {
        "title": "Cucumbers",
        "type": "vegetable",
        "description": "Seasonal locally grown carrots",
        "image": "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80",
        "price": 3.99,
        "rating": 0 / 0,
        "category": "vegetables",
        "aisle": "produce"
      },
      {
        "title": "Peppers",
        "type": "vegetable",
        "description": "Seasonal locally grown carrots",
        "image": "https://images.unsplash.com/photo-1577098093907-93abb87b29be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "price": 3.99,
        "rating": 0 / 0,
        "category": "vegetables",
        "aisle": "produce"
      },
      {
        "title": "Garlic",
        "type": "vegetable",
        "description": "Seasonal locally grown carrots",
        "image": "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "price": 3.99,
        "rating": 0 / 0,
        "category": "vegetables",
        "aisle": "produce"
      },
      {
        "title": "Eggplant",
        "type": "vegetable",
        "description": "Seasonal locally grown carrots",
        "image": "https://images.unsplash.com/photo-1589213956583-f53d3022ac95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
        "price": 3.99,
        "rating": 0 / 0,
        "category": "vegetables",
        "aisle": "produce"
      },
      {
        "title": "Spinach",
        "type": "vegetable",
        "description": "Seasonal locally grown carrots",
        "image": "https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "price": 3.99,
        "rating": 0 / 0,
        "category": "vegetables",
        "aisle": "produce"
      },
      {
        "title": "Asparagus",
        "type": "vegetable",
        "description": "Seasonal locally grown carrots",
        "image": "https://images.unsplash.com/photo-1571741443338-e0b5e3bc1566?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
        "price": 3.99,
        "rating": 0 / 0,
        "category": "vegetables",
        "aisle": "produce"
      },

    ]

  await Product.insertMany(products)
  console.log("Created products!")
}
const run = async () => {
  await main()
  db.close()
}

run()