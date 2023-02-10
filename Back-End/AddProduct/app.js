const express = require('express')

const app = express();

//To parse JSON data from the request body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'/*, { index: false }*/))

//JSON
//FORM DATA

const products = [];
app.post('/products', (req, res) => {
  const productData = req.body

  console.log("client Data", productData)
  products.push(productData)
  // res.send({ status: 'success', msg: 'Product Added Successfully' })
  console.log(__dirname)
  res.sendFile(`${__dirname}/public/ThankYou.html`)
})

app.get('/products', (req, res) => {
  res.send({ products })
})

app.listen(8080, () => {
  console.log("Server is started in port 8080")
})


//Product Name
//Product Price
//Description
//Image
//Product Rating

// Client - Store in DB - POST
// DB - Client - GET

// REST APIs