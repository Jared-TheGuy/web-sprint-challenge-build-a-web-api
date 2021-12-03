const express = require('express');

const router = express.Router();

const {errHandler} = require('../global-middleware');
const {validateProjectId} = require('./projects-middleware');
const {nameValidator,
    descriptionValidator,
    completedValidator,
    notesValidator,} 
    = require('../global-middleware')

const Projects = require('./projects-model');


router.get('/', async (req, res, next) => {
   try {
       const projects = await Projects.get()
       res.json(projects)
   }
   catch (err) {
       next(err)
   }
})

router.get('/:id', validateProjectId,  (req, res) => {
    res.json(req.project)
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

router.get('/test/test', nameValidator, descriptionValidator, completedValidator, notesValidator, (req,res, next) => {
    res.json({
        message: "yeah"
    })
})

router.use((err, req, res, next)=>{
    res.status(err.status || 500).json({
      errorMessage: ' Something went wrong!',
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = router;