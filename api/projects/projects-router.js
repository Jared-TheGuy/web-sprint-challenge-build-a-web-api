const express = require('express');

const router = express.Router();

const Projects = require('./projects-model');


router.get('/', (req,res) => {
    res.json({
        message: "This is the get all -projects"
    })
})

router.get('/:id', (req,res) => {
    res.json({
        message: "This is the get by id -projects"
    })
})

router.get('/:id/actions', (req,res) => {
    res.json({
        message: "This is the get actions by id -projects"
    })
})

router.post('/', (req,res) => {
    res.json({
        message: "This is the create new -projects"
    })
})

router.put('/:id', (req,res) => {
    res.json({
        message: "This is the update -projects"
    })
})

router.delete('/:id', (req,res) => {
    res.json({
        message: "This is the delete -projects"
    })
})

router.get('/test/test', (req,res, next) => {
    next({})
})

router.use((err, req, res, next)=>{
    res.status(err.status || 500).json({
      errorMessage: ' Something went wrong!',
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = router;