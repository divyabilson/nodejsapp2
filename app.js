const express = require ('express')
const app = express()

app.get ('/', (req, res) => res.send('Hello Welcome to My World'))
app.listen(3000, () => console.log('erver ready'))
