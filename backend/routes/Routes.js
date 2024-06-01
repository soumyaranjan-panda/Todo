const express = require('express')
const router = express.Router()
const PostTodo = require('../controllers/PostTodo')
const GetTodo = require('../controllers/GetTodo')
const PutTodo = require('../controllers/PutTodo')


router.post('/todo', PostTodo)
router.get('/todos', GetTodo)
router.put('/completed', PutTodo)

module.exports = router