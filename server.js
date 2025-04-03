// 1. import express and create a server instance and port
const express = require('express')
const server = express()
const helmet = require('helmet')
const port = process.env.port || 3000

//import router
const router = require('./app/routes/router')


// increase security using helmet

// this is the same thange but sorter
//server.use(helmet()).use(express.json()).use('/, router')

server.use(helmet())
server.use(express.json())
server.use('/, router')



// root route
// .get(path, callback function)
// localhost:3000/api
server.get('/api', (req, res)=> {
    res.json({
        'all actors': `http://localhost:${port}/api/actor`,
        'all customers': `http://localhost:${port}/api/customer`,
        'all films': `http://localhost:${port}/api/film`
    })
})

server.set('view engine', 'ejs')

// 2. listen on the port
// .listen(port, clallback function)
server.listen(port, ()=> console.log(`It work dummy${port}...`))