const router = require('express').Router();
const postHandler = require('../handlers/postHandler.js');

router.route('/')
.post(postHandler.addPost)
.get(postHandler.getAllPosts);

module.exports = router;
