const express = require('express');

const router = express.Router();

const Actions = require('./actions-model');
const {validateActionsId} = require('./actions-middlware');

router.get('/', (req,res) => {
    res.json({
        message: "This is the get all -actions"
    })
})

router.get('/:id', validateActionsId, (req,res) => {
    res.json(req.action)
})

router.post('/', (req,res) => {
    res.json({
        message: "This is the create new -actions"
    })
})

router.put('/:id', (req,res) => {
    res.json({
        message: "This is the update -actions"
    })
})

router.delete('/:id', (req,res) => {
    res.json({
        message: "This is the delete -actions"
    })
})

router.get('/test/test', (req,res,next) => {
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
