const router = require('express').Router();
const blogControl = require('../controllers/blogControl')

router.route('/blogs')
    .post(blogControl.createBlog)
    .get(blogControl.getBlogs);

router.route('/blogs/:id')
    .delete(blogControl.deleteBlog);

module.exports = router;