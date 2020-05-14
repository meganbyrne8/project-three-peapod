const db = require('../db')
const Product = require('../models/product')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const products =
    [
        {
            "title": "Brown eggs",
            "type": "dairy",
            "description": "Raw organic brown eggs in a basket",
            "image": "0.jpg",
            "price": 28.1,
            "rating": 0/0
          }, {
            "title": "Sweet fresh stawberry",
            "type": "fruit",
            "description": "Sweet fresh stawberry on the wooden table",
            "image": "1.jpg",
            "price": 29.45,
            "rating": 0/0
          }, {
            "title": "Asparagus",
            "type": "vegetable",
            "description": "Asparagus with ham on the wooden table",
            "image": "2.jpg",
            "price": 18.95,
            "rating": 0/0
          }, {
            "title": "Green smoothie",
            "type": "dairy",
            "description": "Glass of green smoothie with quail egg's yolk, served with cocktail tube, green apple and baby spinach leaves over tin surface.",
            "image": "3.jpg",
            "price": 17.68,
            "rating": 0/0
          }, {
            "title": "Raw legums",
            "type": "vegetable",
            "description": "Raw legums on the wooden table",
            "image": "4.jpg",
            "price": 17.11,
            "rating": 0/0
          }, {
            "title": "Baking cake",
            "type": "dairy",
            "description": "Baking cake in rural kitchen - dough  recipe ingredients (eggs, flour, sugar) on vintage wooden table from above.",
            "image": "5.jpg",
            "price": 11.14,
            "rating": 0/0
          }, {
            "title": "Pesto with basil",
            "type": "vegetable",
            "description": "Italian traditional pesto with basil, chesse and oil",
            "image": "6.jpg",
            "price": 18.19,
            "rating": 0/0
          }, {
            "title": "Hazelnut in black ceramic bowl",
            "type": "vegetable",
            "description": "Hazelnut in black ceramic bowl on old wooden background. forest wealth. rustic style. selective focus",
            "image": "7.jpg",
            "price": 27.35,
            "rating": 0/0
          }, {
            "title": "Fresh stawberry",
            "type": "fruit",
            "description": "Sweet fresh stawberry on the wooden table",
            "image": "8.jpg",
            "price": 28.59,
            "rating": 0/0
          }, {
            "title": "Lemon and salt",
            "type": "fruit",
            "description": "Rosemary, lemon and salt on the table",
            "image": "9.jpg",
            "price": 15.79,
            "rating": 0/0
          }, {
            "title": "Homemade bread",
            "type": "bakery",
            "description": "Homemade bread",
            "image": "10.jpg",
            "price": 17.48,
            "rating": 0/0
          }

    ]

await Product.insertMany(products)
console.log("Created products!")
}
const run = async () => {
await main()
db.close()
}

run()