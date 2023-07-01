const express = require ('express')
const app = express()

app.get ('/', (req, res) => res.send('Hello Welcome to My New World 2'))
app.listen(3000, () => console.log('erver ready'))
