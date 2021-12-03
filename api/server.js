const express = require('express');
const server = express();
server.use(express.json());

const projectsRouter= require('./projects/projects-router');
const actionsRouter = require('./actions/actions-router');

server.use('/api/actions', actionsRouter);
server.use('/api/projects', projectsRouter);

module.exports = server;
