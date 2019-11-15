// bring  in express
const express = require('express');
const app = express()
const port = 3000;


// routes
app.get('/', (req, res) => {
    res.send('HelloWorld!')
})

//DONUT ROUTES

//CREATE DONUT
//ADD NEW DONUT
app.post('/donuts', (req, res) => {
    // gets an object via req.body
    res.send('placeholder')
})

//GET ALL DONUTS
app.get('/donuts', (req, res) => {
    res.send('sorry no donuts yet')
})

// GET SINGLE DONUT RECORD
app.get('/donuts/:id', (req, res) => {
    res.send('here is a donut')
})

//DELETE A DONUT
app.delete('/donuts/:id', (req, res) => {
    res.send('donut eaten')
})

//UPDATE A DONUT
app.patch('/donuts/:id', (req, res) => {
    // req.body
    res.send('placeholder update')
})
    
// listen on port
app.listen(port, () => {
    console.log('Ready')
})    



