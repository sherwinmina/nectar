const router = require('express').Router();
const postHandler = require('../handlers/userHandler.js');

router.route('/')
.post(postHandler.addPost)
.get(postHandler.getPost);
