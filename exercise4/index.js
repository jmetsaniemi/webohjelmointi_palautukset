const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

const products = require('./routes/products')
const user = require('./routes/user')
const purchases = require('./routes/purchases')

app.use(bodyParser.json());

//käynnistä appi --> run --> run without debugging

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.use('/products', products);
  app.use('/user', user);
  app.use('/purchases', purchases);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})