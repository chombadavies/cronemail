const express = require('express')
const app = express()
const port = 4045
const {schedulesms} = require("./app")
const { schedulemail } = require('./app')

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

schedulemail.start();