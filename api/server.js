const express = require('express');
const server = express();
server.use(express.json());

const projectsRouter= require('./projects/projects-router')

server.use('/api/projects',projectsRouter);

module.exports = server;
