const express = require('express');

const global = express();

// const errHandler = global.use((err, req, res, next)=>{
//     res.status(err.status || 500).json({
//       errorMessage: ' Something went wrong!',
//       message: err.message,
//       stack: err.stack,
//     })
//   })
function nameValidator(req, res, next) {
    if (req.body.name) {
        next()
    }
    else {
        res.status(500).json({
            message: "Name is required"
        })
    }
}

function descriptionValidator(req, res, next) {
    if (req.body.description) {
        next()
    }
    else {
        res.status(500).json({
            message: "Description is required"
        })
    }
}

function completedValidator(req, res, next) {
    if (req.body.completed) {
        next()
    }
    else {
        res.status(500).json({
            message: "Completion is required"
        })
    }
}

function notesValidator(req, res, next) {
    if (req.body.notes) {
        next()
    }
    else {
        res.status(500).json({
            message: "Notes are required"
        })
    }
}

  module.exports = {
    nameValidator,
    descriptionValidator,
    completedValidator,
    notesValidator,

  }