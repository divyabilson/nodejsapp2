const express = require ('express')
const app = express()

app.get ('/', (req, res) => res.send('Hello World from Nodejs'))
app.listen(3000, () => console.log('erver ready'))
