const express = require('express')
const router = express.Router()

//home page
//this going to be for localhost:3000
router.get('/', (req, res)=> {
    res.render('pages/home', {
        //do stuff
        title: 'sakila home page'

    })
})

// error page
router.get('*', (req, res)=> {
    if (req.url == '/favicon.ico') {
        res.end()
    } else {
        res.render('pages/404', {
            title: '404 error',
            name: 'this page does not exist dummy'
        })
    }
})

module.exports = router