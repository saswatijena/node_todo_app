const express = require('express');
const router = express.Router();
const todo = require('../../server/todo');

router.get('/id', todo.getTaskByID);

module.exports = router;
