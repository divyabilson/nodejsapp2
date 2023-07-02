const express = require ('express')
const app = express()

app.get ('/', (req, res) => res.send('Welcome to My New World!!'))
app.listen(3000, () => console.log('erver ready'))
