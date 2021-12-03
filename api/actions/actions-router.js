const express = require('express');

const router = express.Router();

const Actions = require('./actions-model');

router.get('/', (req,res) => {
    res.json({
        message: "This is the get all -actions"
    })
})

router.get('/:id', (req,res) => {
    res.json({
        message: "This is the get by id -actions"
    })
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

module.exports = router;
