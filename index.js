const express = require('express')
const app = express()
const path = require('path')
app.use(express.json())

app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(3000, () => {
    console.log('app Running in 3000')
})