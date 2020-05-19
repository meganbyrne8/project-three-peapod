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
        "price": 3.1,
        "rating": 0 / 0,
        "category": "vegetables",
        "aisle": "produce"
      },
      {
        "title": "Zucchini",
        "type": "vegetable",
        "description": "Seasonal locally grown zucchini",
        "image": "https://www.jessicagavin.com/wp-content/uploads/2018/05/zucchini-2-1200.jpg",
        "price": 3.1,
        "rating": 0 / 0,
        "category": "vegetables",
        "aisle": "produce"
      },
      {
        "title": "Shallots",
        "type": "vegetable",
        "description": "Locally grown shallot",
        "image": "https://draxe.com/wp-content/uploads/2015/06/WhatIsaShallotHeader.jpg",
        "price": 3.1,
        "rating": 0 / 0,
        "category": "vegetables",
        "aisle": "produce"
      },
      {
        "title": "Carrots",
        "type": "vegetable",
        "description": "Seasonal locally grown carrots",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRou9od8LjnnETrA3ONJGUqUR1E83P_MBsgYXg6m6ZqOJtGLzGL&usqp=CAU",
        "price": 3.1,
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