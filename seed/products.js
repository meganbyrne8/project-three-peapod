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
        "image": "0.jpg",
        "price": 3.1,
        "rating": 0 / 0,
        "catergory": "vegetables",
        "aisle": "produce"
      },
      {
        "title": "Zucchini",
        "type": "vegetable",
        "description": "Seasonal locally grown zucchini",
        "image": "0.jpg",
        "price": 3.1,
        "rating": 0 / 0,
        "catergory": "vegetables",
        "aisle": "produce"
      },
      {
        "title": "Shallots",
        "type": "vegetable",
        "description": "Locally grown shallot",
        "image": "0.jpg",
        "price": 3.1,
        "rating": 0 / 0,
        "catergory": "vegetables",
        "aisle": "produce"
      },
      {
        "title": "Carrots",
        "type": "vegetable",
        "description": "Seasonal locally grown carrots",
        "image": "0.jpg",
        "price": 3.1,
        "rating": 0 / 0,
        "catergory": "vegetables",
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